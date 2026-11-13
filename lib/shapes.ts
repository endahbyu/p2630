// Particle shapes, computed in code (no model files). Each generator returns xyz triplets
// that fit inside a unit sphere, so shapes can be swapped or blended one-to-one.

export type ShapeName = 'sphere' | 'flask' | 'torus' | 'box' | 'helix' | 'disc';

/** Small seeded random generator, so a shape looks the same on every load. */
function seededRandom(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Evenly spread points on a sphere (Fibonacci spiral). */
export function sphere(count: number): Float32Array {
  const out = new Float32Array(count * 3);
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const a = golden * i;
    out[i * 3] = Math.cos(a) * r; out[i * 3 + 1] = y; out[i * 3 + 2] = Math.sin(a) * r;
  }
  return out;
}

/** Flask outline as [radius, height] pairs, bottom to top. */
function flaskProfile(neckLength: number): [number, number][] {
  const D = Math.PI / 180;
  const pts: [number, number][] = [];
  for (let a = -90; a <= 58; a += 2) pts.push([Math.cos(a * D), Math.sin(a * D)]); // round bulb
  const p0 = [Math.cos(58 * D), Math.sin(58 * D)], c = [0.3, 0.99], p1 = [0.3, 1.25]; // shoulder curve
  for (let i = 1; i <= 12; i++) {
    const t = i / 12, u = 1 - t;
    pts.push([u * u * p0[0] + 2 * u * t * c[0] + t * t * p1[0], u * u * p0[1] + 2 * u * t * c[1] + t * t * p1[1]]);
  }
  const top = 1.25 + neckLength;
  pts.push([0.29, top]); // neck
  pts.push([0.33, top + 0.1], [0.4, top + 0.17], [0.41, top + 0.25]); // flared lip
  return pts;
}

/** Spin an outline around the vertical axis and scatter points on that surface, weighted by area. */
function lathe(profile: [number, number][], count: number, { tilt = 0, pivot = 0.8, fuzz = 0.02, seed = 7 } = {}): Float32Array {
  const rand = seededRandom(seed);
  const segs: { r0: number; y0: number; r1: number; y1: number; nr: number; ny: number; cum: number }[] = [];
  let total = 0;
  for (let i = 0; i < profile.length - 1; i++) {
    const [r0, y0] = profile[i], [r1, y1] = profile[i + 1];
    const len = Math.hypot(r1 - r0, y1 - y0);
    if (len === 0) continue;
    total += Math.PI * (r0 + r1) * len;
    segs.push({ r0, y0, r1, y1, nr: (y1 - y0) / len, ny: -(r1 - r0) / len, cum: total });
  }
  const out = new Float32Array(count * 3);
  const tiltRad = (tilt * Math.PI) / 180;
  const smooth = (a: number, b: number, x: number) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (let i = 0; i < count; i++) {
    const pick = rand() * total;
    let lo = 0, hi = segs.length - 1;
    while (lo < hi) { const m = (lo + hi) >> 1; if (segs[m].cum < pick) lo = m + 1; else hi = m; }
    const s = segs[lo], t = rand(), phi = rand() * Math.PI * 2;
    const n = (rand() + rand() - 1) * fuzz; // soft fuzz along the surface normal
    const r = s.r0 + (s.r1 - s.r0) * t + s.nr * n;
    let y = s.y0 + (s.y1 - s.y0) * t + s.ny * n;
    let x = Math.cos(phi) * r;
    const z = Math.sin(phi) * r;
    if (tiltRad) { // bend the neck around a pivot above the bulb
      const a = tiltRad * smooth(pivot - 0.25, pivot + 0.35, y);
      const dy = y - pivot, ca = Math.cos(a), sa = Math.sin(a);
      const nx = x * ca - dy * sa;
      y = x * sa + dy * ca + pivot; x = nx;
    }
    out[i * 3] = x; out[i * 3 + 1] = y; out[i * 3 + 2] = z;
    if (x < minX) minX = x; if (x > maxX) maxX = x; if (y < minY) minY = y; if (y > maxY) maxY = y;
  }
  // centre it and fit it into the same box as the unit sphere
  const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2, k = 2 / Math.max(maxX - minX, maxY - minY);
  for (let i = 0; i < count; i++) {
    out[i * 3] = (out[i * 3] - cx) * k; out[i * 3 + 1] = (out[i * 3 + 1] - cy) * k; out[i * 3 + 2] *= k;
  }
  return out;
}

export function flask(count: number): Float32Array {
  return lathe(flaskProfile(1), count, { tilt: 22, fuzz: 0.025 });
}

// --- Placeholder shapes for the zones that do not have a final shape yet. Replace freely. ---

/** Ring (doughnut). */
export function torus(count: number): Float32Array {
  const rand = seededRandom(11), out = new Float32Array(count * 3), R = 0.68, r = 0.3;
  for (let i = 0; i < count; i++) {
    const u = rand() * Math.PI * 2;
    let v = rand() * Math.PI * 2;
    while (rand() > (R + r * Math.cos(v)) / (R + r)) v = rand() * Math.PI * 2; // keep the density even across the ring
    const x = (R + r * Math.cos(v)) * Math.cos(u), y = r * Math.sin(v), z = (R + r * Math.cos(v)) * Math.sin(u), tilt = 1.1; // lean it towards the viewer
    out[i * 3] = x; out[i * 3 + 1] = y * Math.cos(tilt) - z * Math.sin(tilt); out[i * 3 + 2] = y * Math.sin(tilt) + z * Math.cos(tilt);
  }
  return out;
}

/** Cube surface. */
export function box(count: number): Float32Array {
  const rand = seededRandom(23), out = new Float32Array(count * 3), h = 0.62;
  for (let i = 0; i < count; i++) {
    const face = Math.floor(rand() * 6), a = (rand() * 2 - 1) * h, b = (rand() * 2 - 1) * h, side = face % 2 ? h : -h;
    const axis = face >> 1;
    out[i * 3 + axis] = side; out[i * 3 + ((axis + 1) % 3)] = a; out[i * 3 + ((axis + 2) % 3)] = b;
  }
  return out;
}

/** Two strands twisting around the vertical axis. */
export function helix(count: number): Float32Array {
  const rand = seededRandom(37), out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const t = rand(), strand = rand() < 0.5 ? 0 : Math.PI, a = t * Math.PI * 5 + strand, fuzz = () => (rand() + rand() - 1) * 0.07;
    out[i * 3] = Math.cos(a) * 0.5 + fuzz(); out[i * 3 + 1] = (t * 2 - 1) * 0.95 + fuzz(); out[i * 3 + 2] = Math.sin(a) * 0.5 + fuzz();
  }
  return out;
}

/** Flat disc with concentric rings, slightly tilted. */
export function disc(count: number): Float32Array {
  const rand = seededRandom(53), out = new Float32Array(count * 3), tilt = 0.45;
  for (let i = 0; i < count; i++) {
    const ring = Math.ceil(rand() * 7) / 7, r = Math.sqrt(ring) * 0.98 + (rand() - 0.5) * 0.03, a = rand() * Math.PI * 2;
    const x = Math.cos(a) * r, z = Math.sin(a) * r, y = (rand() - 0.5) * 0.02;
    out[i * 3] = x; out[i * 3 + 1] = y * Math.cos(tilt) - z * Math.sin(tilt); out[i * 3 + 2] = y * Math.sin(tilt) + z * Math.cos(tilt);
  }
  return out;
}

export const shapes: Record<ShapeName, (count: number) => Float32Array> = { sphere, flask, torus, box, helix, disc };
