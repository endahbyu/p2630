<script setup lang="ts">
// Particle stage. Two clouds share one shader (lib/particleShader.ts):
//   · the shape  — dots scattered over the active topic's shape; they travel to the next shape as you scroll
//   · the field  — sparse dots far around it, out of focus, that drift and part around the pointer
// Scroll position comes from lib/scrollTravel.ts: whole numbers are topics, the fraction is how far along the journey is.
// The pointer pushes the shape's particles with a small spring simulation (adapted from the ParticleObject
// component supplied for this project): particles flee and curl around the cursor, then spring back home.
import * as THREE from 'three';
import { buildShape, scatter, type Cloud, type ShapeName, type LandTest } from '~/lib/shapes';
import { loadLandTest } from '~/lib/landMask';
import { vertexShader, fragmentShader } from '~/lib/particleShader';
import type { ScrollTravel } from '~/lib/scrollTravel';

const props = withDefaults(defineProps<{
  shapes: ShapeName[];   // one per topic, in order
  travel: ScrollTravel;
  count?: number;
  active?: boolean;      // false while loading: particles wait scattered, then fly in
  shift?: number;        // slide the picture sideways, as a fraction of the width (makes room for a panel)
  landUrl?: string;
}>(), { count: 26000, active: true, shift: 0, landUrl: '' });

const host = ref<HTMLElement>();

const SCALE = 1.2, FOV = 35, DISTANCE = 6.6, STAGGER = 0.5, SPREAD = 0.9, INTRO = 3.2;
// pointer physics
const RADIUS = 110, STRENGTH = 1, SWIRL = 0.6, STIFFNESS = 60, DAMPING = 3 + 12 * 0.35;

let renderer: THREE.WebGLRenderer | undefined;
let shape: THREE.Points | undefined, field: THREE.Points | undefined;
let clouds: Cloud[] = [], waiting: Cloud | undefined, isLand: LandTest | undefined;
let offsets = new Float32Array(0), velocities = new Float32Array(0), home: Float32Array | null = null;
let pair = -1, intro = 0, started = false, awake = false;
let width = 1, height = 1, frameId = 0, observer: ResizeObserver | undefined, disposed = false;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);
const pivot = new THREE.Group(); // gentle float and rocking
scene.add(pivot);
const pointer = { px: 0, py: 0, x: 0, y: 0, tx: 0, ty: 0, on: 0, target: 0, speed: 0, lastX: 0, lastY: 0, lastT: 0, shoveX: 0, shoveY: 0, click: false };
let shiftNow = 0;

const cssColor = (name: string, fallback: string) => new THREE.Color(getComputedStyle(host.value!).getPropertyValue(name).trim() || fallback);
const wrap = (i: number) => ((i % props.shapes.length) + props.shapes.length) % props.shapes.length;

function material(o: { size: number; opacity: number; drift: number; push: number; radius: number; aperture: number; depthFade: number }) {
  return new THREE.ShaderMaterial({
    vertexShader, fragmentShader, transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 }, uMorph: { value: 0 }, uStagger: { value: STAGGER }, uSpread: { value: SPREAD }, uDir: { value: 1 }, uDrift: { value: o.drift },
      uSize: { value: o.size }, uPixels: { value: 1 }, uFocus: { value: DISTANCE }, uAperture: { value: o.aperture }, uDepthFade: { value: o.depthFade }, uAspect: { value: 1 },
      uPointer: { value: new THREE.Vector2() }, uPointerOn: { value: 0 }, uRadius: { value: o.radius }, uPush: { value: o.push },
      uColor: { value: cssColor('--on-dark', '#ffffff') }, uAccent: { value: cssColor('--accent', '#c8d2ff') }, uOpacity: { value: o.opacity },
    },
  });
}
const uniforms = (points?: THREE.Points) => (points?.material as THREE.ShaderMaterial).uniforms;
const attr = (name: string) => shape!.geometry.getAttribute(name) as THREE.BufferAttribute;

function cloudPoints(n: number, a: Cloud, b: Cloud, mat: THREE.ShaderMaterial) {
  const g = new THREE.BufferGeometry(), shade = new Float32Array(n * 2);
  for (let i = 0; i < n; i++) { shade[i * 2] = a.shades[i]; shade[i * 2 + 1] = b.shades[i]; }
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3)); // three needs one; the shader reads aFrom/aTo
  g.setAttribute('aFrom', new THREE.BufferAttribute(a.positions.slice(), 3));
  g.setAttribute('aTo', new THREE.BufferAttribute(b.positions.slice(), 3));
  g.setAttribute('aShade', new THREE.BufferAttribute(shade, 2));
  g.setAttribute('aOffset', new THREE.BufferAttribute(new Float32Array(n * 3), 3).setUsage(THREE.DynamicDrawUsage));
  g.setAttribute('aSeed', new THREE.BufferAttribute(Float32Array.from({ length: n * 4 }, () => Math.random()), 4));
  const points = new THREE.Points(g, mat);
  points.frustumCulled = false;
  return points;
}
function drop(points?: THREE.Points) { if (points) { points.removeFromParent(); points.geometry.dispose(); (points.material as THREE.Material).dispose(); } }

function build() {
  drop(shape); drop(field);
  const n = props.count;
  clouds = props.shapes.map((name) => { const c = buildShape(name, n, isLand); for (let i = 0; i < c.positions.length; i++) c.positions[i] *= SCALE; return c; });
  waiting = scatter(n, 3.5, 9);
  offsets = new Float32Array(n * 3); velocities = new Float32Array(n * 3);
  const first = clouds[wrap(Math.floor(props.travel.state.progress))];
  shape = cloudPoints(n, intro >= 1 ? first : waiting, first, material({ size: 0.017, opacity: 0.62, drift: 0.004, push: 0, radius: 0.2, aperture: 0.006, depthFade: 1 }));
  pivot.add(shape);
  pair = -1; // forces the right pair of shapes to be loaded on the next frame (after the intro)

  const m = Math.round(n / 9), far = scatter(m, 2.6, 10);
  field = cloudPoints(m, far, far, material({ size: 0.022, opacity: 0.55, drift: 0.05, push: 0.22, radius: 0.45, aperture: 0.011, depthFade: 0 }));
  uniforms(field).uMorph.value = 1;
  scene.add(field);
  resize();
}

/** Load the two shapes the journey is currently between. */
function setPair(index: number) {
  pair = index;
  const a = clouds[wrap(index)], b = clouds[wrap(index + 1)], shade = attr('aShade');
  attr('aFrom').set(a.positions).needsUpdate = true;
  attr('aTo').set(b.positions).needsUpdate = true;
  for (let i = 0; i < a.shades.length; i++) shade.setXY(i, a.shades[i], b.shades[i]);
  shade.needsUpdate = true;
}

function resize() {
  if (!host.value || !renderer) return;
  width = host.value.clientWidth || 1; height = host.value.clientHeight || 1;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  const pixels = renderer.getDrawingBufferSize(new THREE.Vector2()).y / (2 * Math.tan(THREE.MathUtils.degToRad(FOV) / 2));
  for (const p of [shape, field]) if (p) { uniforms(p).uPixels.value = pixels; uniforms(p).uAspect.value = camera.aspect; }
}

// ---- pointer physics: a spring per particle, pushed by a field around the cursor's ray ----
const raycaster = new THREE.Raycaster(), ndc = new THREE.Vector2(), inverse = new THREE.Matrix4();
const origin = new THREE.Vector3(), dir = new THREE.Vector3(), camRight = new THREE.Vector3(), camUp = new THREE.Vector3(), camBack = new THREE.Vector3(), shoveDir = new THREE.Vector3();

function simulate(dt: number, still: boolean) {
  if (!shape) return;
  const pushing = !!home && pointer.target === 1 && !still;
  const burst = !!home && pointer.click; pointer.click = false;
  if (!pushing && !burst && !awake) return; // everything is at rest
  const n = offsets.length / 3, p = offsets, v = velocities, h = home;
  const decay = Math.exp(-DAMPING * dt);
  let ox = 0, oy = 0, oz = 0, dx = 0, dy = 0, dz = 1, radius = 0, r2max = 0, shove = 0;
  if (pushing || burst) {
    ndc.set((pointer.px / width) * 2 - 1, -(pointer.py / height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    shape.updateWorldMatrix(true, false);
    inverse.copy(shape.matrixWorld).invert();
    origin.copy(raycaster.ray.origin).applyMatrix4(inverse); dir.copy(raycaster.ray.direction).transformDirection(inverse);
    radius = RADIUS * (2 * camera.position.length() * Math.tan(THREE.MathUtils.degToRad(FOV) / 2)) / height;
    r2max = radius * radius;
    shove = Math.min(pointer.speed / 900, 2) * 14 * STRENGTH;
    camera.matrixWorld.extractBasis(camRight, camUp, camBack);
    shoveDir.set(0, 0, 0).addScaledVector(camRight, pointer.shoveX).addScaledVector(camUp, -pointer.shoveY).transformDirection(inverse);
    ox = origin.x; oy = origin.y; oz = origin.z; dx = dir.x; dy = dir.y; dz = dir.z;
  }
  const push = 26 * STRENGTH * (0.3 + 0.7 * Math.min(pointer.speed / 400, 1)); // a resting pointer leaves a dimple; a moving one leaves a wake
  let energy = 0;
  for (let i = 0; i < n; i++) {
    const ix = i * 3, iy = ix + 1, iz = ix + 2;
    let vx = v[ix], vy = v[iy], vz = v[iz];
    if (h && (pushing || burst)) {
      const wx = h[ix] + p[ix] - ox, wy = h[iy] + p[iy] - oy, wz = h[iz] + p[iz] - oz;
      const t = Math.max(wx * dx + wy * dy + wz * dz, 0);
      let rx = wx - dx * t, ry = wy - dy * t, rz = wz - dz * t;
      const d2 = rx * rx + ry * ry + rz * rz;
      if (d2 < r2max) {
        const d = Math.sqrt(d2), inv = 1 / Math.max(d, 1e-5);
        rx *= inv; ry *= inv; rz *= inv;
        const fall = 1 - d / radius;
        if (pushing) {
          const f = fall * fall * dt, tx = dy * rz - dz * ry, ty = dz * rx - dx * rz, tz = dx * ry - dy * rx; // tangent: curl around the ray
          vx += (rx + tx * SWIRL) * push * f + shoveDir.x * shove * f;
          vy += (ry + ty * SWIRL) * push * f + shoveDir.y * shove * f;
          vz += (rz + tz * SWIRL) * push * f + shoveDir.z * shove * f;
        }
        if (burst) { const k = fall * 2.4; vx += rx * k; vy += ry * k; vz += rz * k; } // a click kicks particles outwards
      }
    }
    vx = (vx - p[ix] * STIFFNESS * dt) * decay; vy = (vy - p[iy] * STIFFNESS * dt) * decay; vz = (vz - p[iz] * STIFFNESS * dt) * decay; // spring back home
    p[ix] += vx * dt; p[iy] += vy * dt; p[iz] += vz * dt;
    v[ix] = vx; v[iy] = vy; v[iz] = vz;
    energy += vx * vx + vy * vy + vz * vz + p[ix] * p[ix] + p[iy] * p[iy] + p[iz] * p[iz];
  }
  awake = energy > 1e-6;
  const a = attr('aOffset'); (a.array as Float32Array).set(p); a.needsUpdate = true;
}

function onMove(e: PointerEvent) {
  const r = renderer!.domElement.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top, now = performance.now();
  if (pointer.target === 1 && pointer.lastT) {
    const dt = Math.max((now - pointer.lastT) / 1000, 1e-3), dx = x - pointer.lastX, dy = y - pointer.lastY, speed = Math.hypot(dx, dy) / dt;
    pointer.speed += (speed - pointer.speed) * 0.35;
    if (speed > 1) { const inv = 1 / Math.max(Math.hypot(dx, dy), 1e-3); pointer.shoveX += (dx * inv - pointer.shoveX) * 0.4; pointer.shoveY += (dy * inv - pointer.shoveY) * 0.4; }
  }
  pointer.px = pointer.lastX = x; pointer.py = pointer.lastY = y; pointer.lastT = now;
  pointer.tx = (x / r.width) * 2 - 1; pointer.ty = 1 - (y / r.height) * 2; pointer.target = 1;
}
function onLeave() { pointer.target = 0; pointer.speed = 0; pointer.lastT = 0; }

onMounted(async () => {
  const el = host.value!;
  renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  el.prepend(renderer.domElement);
  const canvas = renderer.domElement;
  canvas.addEventListener('pointermove', onMove, { passive: true });
  canvas.addEventListener('pointerleave', onLeave, { passive: true });
  canvas.addEventListener('pointercancel', onLeave, { passive: true });
  canvas.addEventListener('pointerup', (e) => { if (e.pointerType !== 'mouse') onLeave(); });
  canvas.addEventListener('click', (e) => { onMove(e); pointer.click = true; });
  observer = new ResizeObserver(resize); observer.observe(el);
  started = props.active;
  build(); // shows at once with a plain sphere for the globe…
  if (props.landUrl) loadLandTest(props.landUrl).then((test) => { if (test && !disposed) { isLand = test; build(); } }); // …and swaps in the continents when they arrive

  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const base = new THREE.Vector3(0, -0.12, 1).normalize(), at = new THREE.Vector3(), side = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  let last = performance.now(), time = Math.random() * 100;
  const frame = (now: number) => {
    const dt = Math.min((now - last) / 1000, 1 / 30); last = now;
    if (!still) time += dt;
    const follow = (rate: number) => 1 - Math.exp(-dt * rate);
    const travel = props.travel, u = uniforms(shape);
    travel.update(dt);

    // which two shapes are we between, and how far along
    let morph: number, between = 0;
    if (!started) morph = 0;
    else if (intro < 1) { intro = still ? 1 : Math.min(1, intro + dt / INTRO); morph = intro; home = null; }
    else {
      const p = travel.state.progress, i = Math.floor(p), f = p - i;
      if (i !== pair) setPair(i);
      const x = Math.min(1, Math.max(0, (f - 0.12) / 0.76)); // hold each shape for a moment at either end
      morph = x * x * (3 - 2 * x); between = Math.sin(f * Math.PI);
      home = f < 0.02 ? clouds[wrap(i)].positions : f > 0.98 ? clouds[wrap(i + 1)].positions : null;
      u.uDir.value = travel.state.direction;
    }
    u.uMorph.value = morph;

    // camera: pulls back and swings to the side between topics, leans with the pointer
    pointer.x += (pointer.tx - pointer.x) * follow(6); pointer.y += (pointer.ty - pointer.y) * follow(6);
    pointer.on += (pointer.target - pointer.on) * follow(5);
    pointer.speed *= Math.exp(-3 * dt);
    const swing = between * 0.45 * travel.state.direction, pull = 1 + between * 0.3 + (1 - Math.min(1, intro * 1.3)) * 0.5;
    at.copy(base).applyAxisAngle(up, swing).multiplyScalar(DISTANCE * pull * Math.max(1, 0.72 / camera.aspect)); // step back on narrow screens so wide shapes fit
    side.crossVectors(up, at).normalize();
    camera.position.copy(at).addScaledVector(side, pointer.x * 0.3 * pointer.on).addScaledVector(up, pointer.y * 0.2 * pointer.on);
    camera.lookAt(0, 0, 0);
    shiftNow += (props.shift - shiftNow) * follow(4);
    if (Math.abs(shiftNow) > 0.0005) camera.setViewOffset(width, height, shiftNow * width, 0, width, height); else camera.clearViewOffset();
    camera.updateProjectionMatrix(); camera.updateMatrixWorld();

    // float and rock gently; keep turning slowly
    pivot.rotation.set(Math.cos(time / 2) / 14, time * 0.1 + Math.sin(time / 2) / 10, Math.sin(time / 2) / 26);
    pivot.position.y = Math.sin(time / 0.75) * 0.05;
    field!.rotation.y = -time * 0.02;

    simulate(dt, still);

    for (const c of [shape, field]) { const v = uniforms(c); v.uTime.value = time; v.uFocus.value = camera.position.length(); }
    const fu = uniforms(field); fu.uPointer.value.set(pointer.x, pointer.y); fu.uPointerOn.value = pointer.on;
    renderer!.render(scene, camera);
    frameId = requestAnimationFrame(frame);
  };
  frameId = requestAnimationFrame(frame);
});

watch(() => props.active, (on) => { if (on) started = true; });
watch(() => [props.count, props.shapes.join()], () => { if (renderer) { if (started) intro = 1; build(); } });

onBeforeUnmount(() => {
  disposed = true;
  cancelAnimationFrame(frameId); observer?.disconnect();
  drop(shape); drop(field);
  renderer?.dispose(); renderer?.domElement.remove();
});
</script>

<template>
  <div ref="host" class="stage" />
</template>

<style scoped>
.stage { position: absolute; inset: 0; overflow: hidden; background: radial-gradient(120% 90% at 60% 40%, var(--stage-from), var(--stage-to)); }
.stage :deep(canvas) { position: absolute; inset: 0; width: 100%; height: 100%; display: block; touch-action: none; }
</style>
