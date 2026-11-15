// Particle shapes, computed in code (no model files). Every shape is a cloud of points scattered
// evenly over a surface, plus the direction each point's surface faces (its normal), so the stage can light it.
// All shapes fit the same box (longest side = 2), so they can be blended one-to-one.

export type ShapeName = 'globe' | 'flask' | 'bottle' | 'bulb' | 'chain' | 'target';
export type Cloud = { positions: Float32Array; normals: Float32Array };
export type LandTest = (lon: number, lat: number) => boolean;

function normalize(v: number[]) { const l = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / l, v[1] / l, v[2] / l]; }

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
  const positions = new Float32Array(count * 3), normals = new Float32Array(count * 3);
  let n = 0;
  return {
    get full() { return n >= count; },
    add(x: number, y: number, z: number, nx: number, ny: number, nz: number) {
      if (n >= count) return;
      const l = Math.hypot(nx, ny, nz) || 1;
      positions[n * 3] = x; positions[n * 3 + 1] = y; positions[n * 3 + 2] = z;
      normals[n * 3] = nx / l; normals[n * 3 + 1] = ny / l; normals[n * 3 + 2] = nz / l; n++;
    },
    done(fit = true): Cloud {
      if (fit) {
        const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
        for (let i = 0; i < count * 3; i++) { const a = i % 3; if (positions[i] < min[a]) min[a] = positions[i]; if (positions[i] > max[a]) max[a] = positions[i]; }
        const k = 2 / Math.max(max[0] - min[0], max[1] - min[1], max[2] - min[2], 1e-4);
        for (let i = 0; i < count * 3; i++) { const a = i % 3; positions[i] = (positions[i] - (min[a] + max[a]) / 2) * k; }
      }
      return { positions, normals };
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

/** Globe: random points on a sphere, kept only where there is land.
 *  Without land data it is a plain dotted sphere. */
export function globe(count: number, isLand?: LandTest): Cloud {
  const rand = seededRandom(3), out = collector(count);
  for (let guard = 0; !out.full && guard < count * 40; guard++) {
    const y = rand() * 2 - 1, a = rand() * Math.PI * 2, s = Math.sqrt(1 - y * y), x = Math.cos(a) * s, z = Math.sin(a) * s;
    if (isLand && !isLand((Math.atan2(x, z) * 180) / Math.PI, (Math.asin(y) * 180) / Math.PI)) continue;
    const lift = 1 + (rand() - 0.5) * 0.012;
    out.add(x * lift, y * lift, z * lift, x, y, z);
  }
  return out.done(false);
}

/** Round-bottomed laboratory flask with a long straight neck and a slightly flared lip. */
export function flask(count: number): Cloud {
  const D = Math.PI / 180, pts: Profile = [];
  for (let a = -90; a <= 70; a += 2) pts.push([Math.cos(a * D), Math.sin(a * D)]);
  const p0 = [Math.cos(70 * D), Math.sin(70 * D)], c = [0.29, 1.02], p1 = [0.29, 1.22];
  for (let i = 1; i <= 10; i++) { const t = i / 10, u = 1 - t; pts.push([u * u * p0[0] + 2 * u * t * c[0] + t * t * p1[0], u * u * p0[1] + 2 * u * t * c[1] + t * t * p1[1]]); }
  pts.push([0.27, 2.45], [0.3, 2.56], [0.36, 2.63], [0.36, 2.7]);
  return lathe(pts, count, { fuzz: 0.025 });
}

/** Bottle: tall and slender — straight body, a long sloping shoulder, a short neck with a lip. */
export function bottle(count: number): Cloud {
  const pts: Profile = [[0, 0], [0.4, 0], [0.46, 0.07], [0.46, 1.85]];
  for (let i = 1; i <= 12; i++) { const t = i / 12, e = t * t * (3 - 2 * t); pts.push([0.46 - 0.27 * e, 1.85 + 1.05 * t]); }
  pts.push([0.19, 3.25], [0.24, 3.28], [0.24, 3.46], [0.2, 3.5], [0.14, 3.5]);
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

/** Two long chain links standing one above the other, hooked through each other; the lower one is turned aside. */
export function chain(count: number): Cloud {
  const rand = seededRandom(41), out = collector(count), each = Math.ceil(count / 2);
  const rotY = (v: number[], a: number) => [v[0] * Math.cos(a) + v[2] * Math.sin(a), v[1], -v[0] * Math.sin(a) + v[2] * Math.cos(a)];
  const link = (turn: number, lift: number) => tube(out, each, rand, 0.5, 0.95, 0.15, (p) => { const q = rotY(p, turn); return [q[0], q[1] + lift, q[2]]; }, (v) => rotY(v, turn));
  link(-0.3, 0.62); link(0.8, -0.62); // each turned a different way, so both show as ovals
  return out.done();
}

/** Target: one broad ring. */
export function target(count: number): Cloud {
  const rand = seededRandom(53), out = collector(count), same = (v: number[]) => v;
  tube(out, count, rand, 1, 1, 0.22, same, same);
  return out.done();
}

/** Loose cloud far around the centre: where particles wait before the opening animation. */
export function scatter(count: number, inner: number, outer: number): Cloud {
  const positions = new Float32Array(count * 3), normals = new Float32Array(count * 3); // no surface, so no normals: lit evenly
  for (let i = 0; i < count; i++) {
    const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2, s = Math.sqrt(1 - u * u), r = inner + Math.random() * (outer - inner);
    positions[i * 3] = Math.cos(a) * s * r; positions[i * 3 + 1] = u * r; positions[i * 3 + 2] = Math.sin(a) * s * r;
  }
  return { positions, normals };
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
