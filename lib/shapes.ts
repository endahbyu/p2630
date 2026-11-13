// Particle shapes, computed in code (no model files). Every shape is a cloud of points scattered
// evenly over a surface, plus a brightness per point from a fixed light, so the form reads as 3D.
// All shapes fit the same box (longest side = 2), so they can be blended one-to-one.

export type ShapeName = 'globe' | 'flask' | 'bottle' | 'bulb' | 'chain' | 'target';
export type Cloud = { positions: Float32Array; shades: Float32Array };
export type LandTest = (lon: number, lat: number) => boolean;

const LIGHT = normalize([0.5, 0.8, 0.6]);
function normalize(v: number[]) { const l = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / l, v[1] / l, v[2] / l]; }
const shadeOf = (nx: number, ny: number, nz: number) => Math.min(1, 0.45 + 0.65 * Math.max((nx * LIGHT[0] + ny * LIGHT[1] + nz * LIGHT[2]) * 0.5 + 0.5, 0));

/** Small seeded random generator, so a shape looks the same on every load. */
function seededRandom(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Collects points, then centres the cloud and fits it into the shared box. */
function collector(count: number) {
  const positions = new Float32Array(count * 3), shades = new Float32Array(count);
  let n = 0;
  return {
    get full() { return n >= count; },
    add(x: number, y: number, z: number, nx: number, ny: number, nz: number) {
      if (n >= count) return;
      positions[n * 3] = x; positions[n * 3 + 1] = y; positions[n * 3 + 2] = z; shades[n] = shadeOf(nx, ny, nz); n++;
    },
    done(fit = true): Cloud {
      if (fit) {
        const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
        for (let i = 0; i < count * 3; i++) { const a = i % 3; if (positions[i] < min[a]) min[a] = positions[i]; if (positions[i] > max[a]) max[a] = positions[i]; }
        const k = 2 / Math.max(max[0] - min[0], max[1] - min[1], max[2] - min[2], 1e-4);
        for (let i = 0; i < count * 3; i++) { const a = i % 3; positions[i] = (positions[i] - (min[a] + max[a]) / 2) * k; }
      }
      return { positions, shades };
    },
  };
}

type Profile = [radius: number, height: number][];

/** Spin an outline around the vertical axis and scatter points on that surface, weighted by area. */
function lathe(profile: Profile, count: number, { tilt = 0, pivot = 0.8, fuzz = 0.015, seed = 7 } = {}): Cloud {
  const rand = seededRandom(seed), out = collector(count);
  const segs: { r0: number; y0: number; r1: number; y1: number; nr: number; ny: number; cum: number }[] = [];
  let total = 0;
  for (let i = 0; i < profile.length - 1; i++) {
    const [r0, y0] = profile[i], [r1, y1] = profile[i + 1];
    const len = Math.hypot(r1 - r0, y1 - y0);
    if (len === 0) continue;
    total += Math.PI * (r0 + r1) * len;
    segs.push({ r0, y0, r1, y1, nr: (y1 - y0) / len, ny: -(r1 - r0) / len, cum: total });
  }
  const tiltRad = (tilt * Math.PI) / 180;
  const smooth = (a: number, b: number, x: number) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  for (let i = 0; i < count; i++) {
    const pick = rand() * total;
    let lo = 0, hi = segs.length - 1;
    while (lo < hi) { const m = (lo + hi) >> 1; if (segs[m].cum < pick) lo = m + 1; else hi = m; }
    const s = segs[lo], t = rand(), phi = rand() * Math.PI * 2, n = (rand() + rand() - 1) * fuzz;
    const r = s.r0 + (s.r1 - s.r0) * t + s.nr * n;
    let y = s.y0 + (s.y1 - s.y0) * t + s.ny * n, x = Math.cos(phi) * r;
    const z = Math.sin(phi) * r;
    if (tiltRad) { // bend the upper part around a pivot
      const a = tiltRad * smooth(pivot - 0.25, pivot + 0.35, y), dy = y - pivot, ca = Math.cos(a), sa = Math.sin(a), nx = x * ca - dy * sa;
      y = x * sa + dy * ca + pivot; x = nx;
    }
    out.add(x, y, z, s.nr * Math.cos(phi), s.ny, s.nr * Math.sin(phi));
  }
  return out.done();
}

/** A ring bent into an oval, as a tube. Used for chain links and plain rings. */
function tube(out: ReturnType<typeof collector>, n: number, rand: () => number, a: number, b: number, r: number, place: (p: number[]) => number[], turn: (v: number[]) => number[]) {
  for (let i = 0; i < n; i++) {
    const u = rand() * Math.PI * 2, v = rand() * Math.PI * 2;
    const N = normalize([b * Math.cos(u), a * Math.sin(u), 0]);
    const nrm = [Math.cos(v) * N[0], Math.cos(v) * N[1], Math.sin(v)];
    const p = place([a * Math.cos(u) + r * nrm[0], b * Math.sin(u) + r * nrm[1], r * nrm[2]]), q = turn(nrm);
    out.add(p[0], p[1], p[2], q[0], q[1], q[2]);
  }
}
const rotX = (v: number[], a: number) => [v[0], v[1] * Math.cos(a) - v[2] * Math.sin(a), v[1] * Math.sin(a) + v[2] * Math.cos(a)];
const rotZ = (v: number[], a: number) => [v[0] * Math.cos(a) - v[1] * Math.sin(a), v[0] * Math.sin(a) + v[1] * Math.cos(a), v[2]];

// ---- the six shapes ----

/** Globe: points only where there is land. Without land data it falls back to a plain sphere. */
export function globe(count: number, isLand?: LandTest): Cloud {
  const rand = seededRandom(3), out = collector(count);
  for (let guard = 0; !out.full && guard < count * 40; guard++) {
    const y = rand() * 2 - 1, a = rand() * Math.PI * 2, s = Math.sqrt(1 - y * y);
    const x = Math.cos(a) * s, z = Math.sin(a) * s;
    if (isLand && !isLand((Math.atan2(x, z) * 180) / Math.PI, (Math.asin(y) * 180) / Math.PI)) continue;
    const lift = 1 + (rand() - 0.5) * 0.02;
    out.add(x * lift, y * lift, z * lift, x, y, z);
  }
  return out.done(false);
}

/** Round-bottomed laboratory flask with a leaning neck. */
export function flask(count: number): Cloud {
  const D = Math.PI / 180, pts: Profile = [];
  for (let a = -90; a <= 58; a += 2) pts.push([Math.cos(a * D), Math.sin(a * D)]);
  const p0 = [Math.cos(58 * D), Math.sin(58 * D)], c = [0.3, 0.99], p1 = [0.3, 1.25];
  for (let i = 1; i <= 12; i++) { const t = i / 12, u = 1 - t; pts.push([u * u * p0[0] + 2 * u * t * c[0] + t * t * p1[0], u * u * p0[1] + 2 * u * t * c[1] + t * t * p1[1]]); }
  pts.push([0.29, 2.25], [0.33, 2.35], [0.4, 2.42], [0.41, 2.5]);
  return lathe(pts, count, { tilt: 22, fuzz: 0.025 });
}

/** Bottle: straight body, sloping shoulder, short neck with a lip. */
export function bottle(count: number): Cloud {
  const pts: Profile = [[0, 0], [0.4, 0], [0.45, 0.06], [0.45, 1.3]];
  for (let i = 1; i <= 10; i++) { const t = i / 10, e = t * t * (3 - 2 * t); pts.push([0.45 - 0.28 * e, 1.3 + 0.5 * t]); }
  pts.push([0.17, 2.2], [0.21, 2.22], [0.21, 2.36], [0.15, 2.36]);
  return lathe(pts, count, { seed: 17 });
}

/** Light bulb: round glass narrowing into a ridged base. */
export function bulb(count: number): Cloud {
  const D = Math.PI / 180, pts: Profile = [[0, -1.78], [0.2, -1.72]];
  for (let i = 0; i < 5; i++) pts.push([0.4, -1.6 + i * 0.11], [0.34, -1.545 + i * 0.11]); // screw ridges
  pts.push([0.42, -1.05]);
  for (let a = -52; a <= 90; a += 3) pts.push([Math.cos(a * D), Math.sin(a * D)]);
  return lathe(pts, count, { seed: 29 });
}

/** Three chain links, hooked through each other. */
export function chain(count: number): Cloud {
  const rand = seededRandom(41), out = collector(count), each = Math.ceil(count / 3), lean = 0.6;
  for (let k = 0; k < 3; k++) {
    const flip = k % 2 ? Math.PI / 2 : 0, shift = (k - 1) * 0.78;
    tube(out, each, rand, 0.55, 0.3, 0.1,
      (p) => rotZ([rotX(p, flip)[0] + shift, rotX(p, flip)[1], rotX(p, flip)[2]], lean),
      (v) => rotZ(rotX(v, flip), lean));
  }
  return out.done();
}

/** Target: two rings around a centre. */
export function target(count: number): Cloud {
  const rand = seededRandom(53), out = collector(count), same = (v: number[]) => v;
  const outer = Math.round(count * 0.52), inner = Math.round(count * 0.33);
  tube(out, outer, rand, 0.95, 0.95, 0.075, same, same);
  tube(out, inner, rand, 0.56, 0.56, 0.075, same, same);
  while (!out.full) { const y = rand() * 2 - 1, a = rand() * Math.PI * 2, s = Math.sqrt(1 - y * y); out.add(Math.cos(a) * s * 0.2, y * 0.2, Math.sin(a) * s * 0.2, Math.cos(a) * s, y, Math.sin(a) * s); }
  return out.done();
}

/** Loose cloud far around the centre: where particles wait before the opening animation. */
export function scatter(count: number, inner: number, outer: number): Cloud {
  const positions = new Float32Array(count * 3), shades = new Float32Array(count).fill(0.8);
  for (let i = 0; i < count; i++) {
    const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2, s = Math.sqrt(1 - u * u), r = inner + Math.random() * (outer - inner);
    positions[i * 3] = Math.cos(a) * s * r; positions[i * 3 + 1] = u * r; positions[i * 3 + 2] = Math.sin(a) * s * r;
  }
  return { positions, shades };
}

export function buildShape(name: ShapeName, count: number, isLand?: LandTest): Cloud {
  switch (name) {
    case 'globe': return globe(count, isLand);
    case 'flask': return flask(count);
    case 'bottle': return bottle(count);
    case 'bulb': return bulb(count);
    case 'chain': return chain(count);
    case 'target': return target(count);
  }
}
