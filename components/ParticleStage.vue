<script setup lang="ts">
// Particle stage. Two clouds share one shader (lib/particleShader.ts):
//   · the shape  — thousands of dots that form the active topic's shape and travel to the next one
//   · the field  — sparse dots far around it, out of focus, that drift and part around the pointer
// The camera glides along a path with one stop per topic.
import * as THREE from 'three';
import { shapes, type ShapeName } from '~/lib/shapes';
import { vertexShader, fragmentShader } from '~/lib/particleShader';

const props = withDefaults(defineProps<{
  shape?: ShapeName;
  index?: number;   // which stop on the camera path
  stops?: number;   // how many stops the path has
  count?: number;
  active?: boolean; // false while loading: particles wait scattered, then fly in
  shift?: number;   // slide the picture sideways, as a fraction of the width (makes room for a panel)
}>(), { shape: 'sphere', index: 0, stops: 6, count: 40000, active: true, shift: 0 });

const host = ref<HTMLElement>();

const SCALE = 1.25, FOV = 35, STAGGER = 0.6, SPREAD = 0.55;
const TRAVEL = 1.9, INTRO = 3.2; // seconds
let renderer: THREE.WebGLRenderer | undefined;
let shape: THREE.Points | undefined, field: THREE.Points | undefined;
let from = new Float32Array(0), to = new Float32Array(0), seeds = new Float32Array(0);
let morph = 0, travelTime = INTRO, started = false;
let width = 1, height = 1, frameId = 0, observer: ResizeObserver | undefined;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);
const pointer = { x: 0, y: 0, tx: 0, ty: 0, on: 0, target: 0 };
let burstAt = -100, path: THREE.CatmullRomCurve3, progress = 0, shiftNow = 0;

const cssColor = (name: string, fallback: string) => new THREE.Color(getComputedStyle(host.value!).getPropertyValue(name).trim() || fallback);

function material(options: { size: number; opacity: number; drift: number; push: number; radius: number; aperture: number; depthFade: number }) {
  return new THREE.ShaderMaterial({
    vertexShader, fragmentShader, transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 }, uMorph: { value: 1 }, uStagger: { value: STAGGER }, uSpread: { value: SPREAD }, uDrift: { value: options.drift },
      uSize: { value: options.size }, uPixels: { value: 1 }, uFocus: { value: 6 }, uAperture: { value: options.aperture }, uDepthFade: { value: options.depthFade }, uAspect: { value: 1 },
      uPointer: { value: new THREE.Vector2() }, uPointerOn: { value: 0 }, uRadius: { value: options.radius }, uPush: { value: options.push },
      uBurst: { value: new THREE.Vector2() }, uBurstAge: { value: 100 },
      uColor: { value: cssColor('--on-dark', '#ffffff') }, uAccent: { value: cssColor('--accent', '#c8d2ff') }, uOpacity: { value: options.opacity },
    },
  });
}
const uniforms = (points?: THREE.Points) => (points?.material as THREE.ShaderMaterial).uniforms;

const scaled = (name: ShapeName, n: number) => { const a = shapes[name](n); for (let i = 0; i < a.length; i++) a[i] *= SCALE; return a; };
function randomShell(n: number, inner: number, outer: number) {
  const out = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2, s = Math.sqrt(1 - u * u), r = inner + Math.random() * (outer - inner);
    out[i * 3] = Math.cos(a) * s * r; out[i * 3 + 1] = u * r; out[i * 3 + 2] = Math.sin(a) * s * r;
  }
  return out;
}
function cloud(a: Float32Array, b: Float32Array, seed: Float32Array, mat: THREE.ShaderMaterial) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(b, 3)); // three needs one; the shader reads aFrom/aTo
  g.setAttribute('aFrom', new THREE.BufferAttribute(a, 3));
  g.setAttribute('aTo', new THREE.BufferAttribute(b, 3));
  g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 4));
  const points = new THREE.Points(g, mat);
  points.frustumCulled = false;
  return points;
}
function drop(points?: THREE.Points) { if (points) { scene.remove(points); points.geometry.dispose(); (points.material as THREE.Material).dispose(); } }

function build() {
  drop(shape); drop(field);
  const n = props.count;
  seeds = Float32Array.from({ length: n * 4 }, () => Math.random());
  to = scaled(props.shape, n);
  from = started ? to.slice() : randomShell(n, 3.5, 9); // before the intro the particles wait far out
  morph = started ? 1 : 0;
  shape = cloud(from, to, seeds, material({ size: 0.011, opacity: 0.6, drift: 0.004, push: 0.07, radius: 0.24, aperture: 0.008, depthFade: 1 }));
  scene.add(shape);

  const m = Math.round(n / 14), far = randomShell(m, 2.6, 10);
  field = cloud(far, far, Float32Array.from({ length: m * 4 }, () => Math.random()), material({ size: 0.022, opacity: 0.55, drift: 0.05, push: 0.22, radius: 0.45, aperture: 0.011, depthFade: 0 }));
  scene.add(field);
  resize();
}

/** Where a particle is right now, using the same formula as the shader — so a new journey can start mid-flight. */
function bakeCurrent() {
  const n = seeds.length / 4, out = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const t = Math.min(1, Math.max(0, morph * (1 + STAGGER) - seeds[i * 4] * STAGGER));
    const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2, mid = Math.sin(e * Math.PI);
    let ax = seeds[i * 4 + 1] * 2 - 1, ay = seeds[i * 4 + 2] * 2 - 1, az = seeds[i * 4 + 3] * 2 - 1;
    const len = Math.hypot(ax, ay, az) || 1; ax /= len; ay /= len; az /= len;
    const j = i * 3, grow = 1 + mid * 0.15;
    out[j] = (from[j] + (to[j] - from[j]) * e) * grow + ax * mid * SPREAD;
    out[j + 1] = (from[j + 1] + (to[j + 1] - from[j + 1]) * e) * grow + ay * mid * SPREAD;
    out[j + 2] = (from[j + 2] + (to[j + 2] - from[j + 2]) * e) * grow + az * mid * SPREAD;
  }
  return out;
}
function travelTo(name: ShapeName) {
  if (!shape) return;
  from = bakeCurrent(); to = scaled(name, seeds.length / 4); morph = 0; travelTime = TRAVEL;
  const g = shape.geometry;
  (g.getAttribute('aFrom') as THREE.BufferAttribute).set(from).needsUpdate = true;
  (g.getAttribute('aTo') as THREE.BufferAttribute).set(to).needsUpdate = true;
}

/** Camera path: one viewpoint per topic, each from a different side, height and distance. */
function buildPath() {
  const points: THREE.Vector3[] = [];
  for (let i = 0; i < props.stops; i++) {
    const angle = i * 1.05, dist = 6.4 + (i % 3) * 0.5, lift = Math.sin(i * 1.7) * 1.3;
    points.push(new THREE.Vector3(Math.sin(angle) * dist, lift, Math.cos(angle) * dist));
  }
  path = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5);
}

function resize() {
  if (!host.value || !renderer) return;
  width = host.value.clientWidth || 1; height = host.value.clientHeight || 1;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  const pixels = renderer.getDrawingBufferSize(new THREE.Vector2()).y / (2 * Math.tan(THREE.MathUtils.degToRad(FOV) / 2));
  for (const p of [shape, field]) if (p) { uniforms(p).uPixels.value = pixels; uniforms(p).uAspect.value = camera.aspect; }
}

const toNdc = (e: PointerEvent | MouseEvent) => { const r = renderer!.domElement.getBoundingClientRect(); return { x: ((e.clientX - r.left) / r.width) * 2 - 1, y: 1 - ((e.clientY - r.top) / r.height) * 2 }; };

onMounted(() => {
  const el = host.value!;
  renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  el.prepend(renderer.domElement);
  const canvas = renderer.domElement;
  canvas.addEventListener('pointermove', (e) => { const p = toNdc(e); pointer.tx = p.x; pointer.ty = p.y; pointer.target = 1; });
  canvas.addEventListener('pointerleave', () => { pointer.target = 0; });
  canvas.addEventListener('pointerup', (e) => { if (e.pointerType !== 'mouse') pointer.target = 0; });
  canvas.addEventListener('click', (e) => { const p = toNdc(e); pointer.x = pointer.tx = p.x; pointer.y = pointer.ty = p.y; burstAt = performance.now() / 1000; for (const c of [shape, field]) uniforms(c).uBurst.value.set(p.x, p.y); });
  observer = new ResizeObserver(resize); observer.observe(el);
  buildPath(); started = props.active; build();

  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const at = new THREE.Vector3(), side = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  let last = performance.now(), time = 0;
  progress = props.index;
  const frame = (now: number) => {
    const dt = Math.min((now - last) / 1000, 0.1); last = now;
    if (!still) time += dt;
    const follow = (rate: number) => 1 - Math.exp(-dt * rate);

    if (started && morph < 1) morph = still ? 1 : Math.min(1, morph + dt / travelTime);

    // camera: glide along the path, pull back a little between stops, lean with the pointer
    progress += (props.index - progress) * (still ? 1 : follow(2.4));
    const between = Math.abs(progress - Math.round(progress)) * 2; // 0 at a stop, 1 half-way
    path.getPoint(Math.min(1, Math.max(0, progress / Math.max(1, props.stops - 1))), at);
    at.multiplyScalar(1 + between * 0.22 + (travelTime === INTRO ? (1 - Math.min(1, morph * 1.3)) * 0.5 : 0)); // the intro starts further back and moves in
    pointer.x += (pointer.tx - pointer.x) * follow(6); pointer.y += (pointer.ty - pointer.y) * follow(6);
    pointer.on += (pointer.target - pointer.on) * follow(5);
    side.crossVectors(up, at).normalize();
    camera.position.copy(at).addScaledVector(side, pointer.x * 0.35 * pointer.on).addScaledVector(up, pointer.y * 0.25 * pointer.on);
    camera.lookAt(0, 0, 0);
    shiftNow += (props.shift - shiftNow) * follow(4);
    if (Math.abs(shiftNow) > 0.0005) camera.setViewOffset(width, height, shiftNow * width, 0, width, height); else camera.clearViewOffset();
    camera.updateProjectionMatrix();

    if (shape && field) {
      shape.rotation.y = time * 0.12;
      field.rotation.y = -time * 0.02;
      const focus = camera.position.length(), age = now / 1000 - burstAt;
      for (const c of [shape, field]) {
        const u = uniforms(c);
        u.uTime.value = time; u.uFocus.value = focus; u.uBurstAge.value = age;
        u.uPointer.value.set(pointer.x, pointer.y); u.uPointerOn.value = pointer.on;
      }
      uniforms(shape).uMorph.value = morph;
    }
    renderer!.render(scene, camera);
    frameId = requestAnimationFrame(frame);
  };
  frameId = requestAnimationFrame(frame);
});

watch(() => props.active, (on) => { if (on) started = true; });
watch(() => props.count, () => { if (renderer) build(); });
watch(() => props.shape, (name) => { if (renderer) travelTo(name); });
watch(() => props.stops, buildPath);

onBeforeUnmount(() => {
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
