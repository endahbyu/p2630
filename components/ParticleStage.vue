<script setup lang="ts">
// Particle stage: one shape made of small dots that slowly turns, yields to the pointer and scatters on click.
// When the shape changes, every particle travels from its old position to its new one.
// Motion still runs on the CPU; moving it to the GPU and the camera path come next.
import * as THREE from 'three';
import { shapes, type ShapeName } from '~/lib/shapes';

const props = withDefaults(defineProps<{
  shape?: ShapeName;
  count?: number;
  color?: string;
  pointerRadius?: number; // px
  clickForce?: number;
  shift?: number; // horizontal offset in scene units, e.g. to make room for an open panel
}>(), { shape: 'sphere', count: 10000, color: '#ffffff', pointerRadius: 40, clickForce: 5, shift: 0 });

const host = ref<HTMLElement>();

const SCALE = 1.25, PUSH = 15, SPEED = 0.5, DOT = 0.008;
let renderer: THREE.WebGLRenderer | undefined, particles: THREE.InstancedMesh | undefined;
let base = new Float32Array(0), offset = new Float32Array(0), velocity = new Float32Array(0);
let from = new Float32Array(0), to = new Float32Array(0), morph = 1; // morph runs 0 → 1 while travelling between shapes
let n = 0, width = 1, height = 1, frameId = 0, observer: ResizeObserver | undefined;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
camera.position.z = 4.4;
const group = new THREE.Group();
scene.add(group);
const pointer = { x: 0, y: 0, active: false };
const viewProjection = new THREE.Matrix4(), toScreen = new THREE.Matrix4();

function build() {
  if (particles) { group.remove(particles); particles.geometry.dispose(); (particles.material as THREE.Material).dispose(); }
  n = props.count;
  base = shapes[props.shape](n);
  for (let i = 0; i < base.length; i++) base[i] *= SCALE;
  offset = new Float32Array(n * 3); velocity = new Float32Array(n * 3);
  particles = new THREE.InstancedMesh(
    new THREE.SphereGeometry(DOT, 8, 8),
    new THREE.MeshBasicMaterial({ color: new THREE.Color(props.color), blending: THREE.AdditiveBlending }),
    n,
  );
  const m = new THREE.Matrix4();
  for (let i = 0; i < n; i++) { m.makeTranslation(base[i * 3], base[i * 3 + 1], base[i * 3 + 2]); particles.setMatrixAt(i, m); }
  particles.instanceMatrix.needsUpdate = true;
  particles.frustumCulled = false;
  group.add(particles);
}

const scaled = (name: ShapeName) => { const a = shapes[name](n); for (let i = 0; i < a.length; i++) a[i] *= SCALE; return a; };

/** Start travelling from wherever the particles are now to another shape. */
function morphTo(name: ShapeName) {
  from = base.slice(); to = scaled(name); morph = 0;
  // shuffle which particle goes where, so the cloud breaks apart and re-forms instead of sliding
  for (let i = n - 1; i > 0; i -= 7) { const k = Math.floor(Math.random() * (i + 1)) * 3, j = i * 3; for (let c = 0; c < 3; c++) { const t = to[j + c]; to[j + c] = to[k + c]; to[k + c] = t; } }
}

function resize() {
  if (!host.value || !renderer) return;
  width = host.value.clientWidth || 1; height = host.value.clientHeight || 1;
  renderer.setSize(width, height, false);
  camera.aspect = width / height; camera.updateProjectionMatrix();
}

function updateMatrices() {
  group.updateMatrixWorld(true); camera.updateMatrixWorld();
  viewProjection.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
  toScreen.multiplyMatrices(viewProjection, group.matrixWorld);
}

const local = (e: PointerEvent | MouseEvent) => { const r = renderer!.domElement.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };

/** Click: throw nearby particles away from the point under the cursor. */
function scatter(p: { x: number; y: number }) {
  if (!props.clickForce || !props.pointerRadius) return;
  updateMatrices();
  const g = group.matrixWorld.elements, e = toScreen.elements;
  const dir = new THREE.Vector3((p.x / width) * 2 - 1, 1 - (p.y / height) * 2, 0.5).unproject(camera).sub(camera.position).normalize();
  const centre = camera.position.clone().addScaledVector(dir, camera.position.length());
  const rad = props.pointerRadius, rad2 = rad * rad;
  for (let i = 0; i < n; i++) {
    const j = i * 3, x = base[j] + offset[j], y = base[j + 1] + offset[j + 1], z = base[j + 2] + offset[j + 2];
    const w = e[3] * x + e[7] * y + e[11] * z + e[15];
    const sx = ((e[0] * x + e[4] * y + e[8] * z + e[12]) / w * 0.5 + 0.5) * width;
    const sy = (-(e[1] * x + e[5] * y + e[9] * z + e[13]) / w * 0.5 + 0.5) * height;
    const dx = p.x - sx, dy = p.y - sy, d2 = dx * dx + dy * dy;
    if (d2 >= rad2 || d2 === 0) continue;
    const f = ((rad - Math.sqrt(d2)) / rad) * props.clickForce * 0.5;
    let rx = g[0] * x + g[4] * y + g[8] * z + g[12] - centre.x;
    let ry = g[1] * x + g[5] * y + g[9] * z + g[13] - centre.y;
    let rz = g[2] * x + g[6] * y + g[10] * z + g[14] - centre.z;
    const len = Math.hypot(rx, ry, rz);
    if (len < 0.001) continue;
    rx = (rx / len) * f; ry = (ry / len) * f; rz = (rz / len) * f;
    velocity[j] += g[0] * rx + g[1] * ry + g[2] * rz;
    velocity[j + 1] += g[4] * rx + g[5] * ry + g[6] * rz;
    velocity[j + 2] += g[8] * rx + g[9] * ry + g[10] * rz;
  }
}

onMounted(() => {
  const el = host.value!;
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  el.prepend(renderer.domElement);
  const canvas = renderer.domElement;
  canvas.addEventListener('pointermove', (e) => { const p = local(e); pointer.x = p.x; pointer.y = p.y; pointer.active = true; });
  canvas.addEventListener('pointerleave', () => { pointer.active = false; });
  canvas.addEventListener('pointerup', (e) => { if (e.pointerType !== 'mouse') pointer.active = false; });
  canvas.addEventListener('click', (e) => scatter(local(e)));
  observer = new ResizeObserver(resize); observer.observe(el);
  resize(); build();

  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let turn = 0, last = performance.now();
  const frame = (now: number) => {
    const step = Math.min((now - last) / (1000 / 60), 4); last = now;
    if (!still) turn += 0.003 * step;
    group.rotation.y = turn;
    group.position.x += (props.shift - group.position.x) * Math.min(1, 0.06 * step);
    if (morph < 1) {
      morph = still ? 1 : Math.min(1, morph + 0.014 * step);
      const e = morph < 0.5 ? 4 * morph * morph * morph : 1 - Math.pow(-2 * morph + 2, 3) / 2; // ease in-out
      const swell = Math.sin(morph * Math.PI) * 0.35; // puff outwards mid-way
      for (let i = 0; i < base.length; i++) base[i] = (from[i] + (to[i] - from[i]) * e) * (1 + swell);
    }
    updateMatrices();
    const g = group.matrixWorld.elements, e = toScreen.elements;
    const rad = props.pointerRadius, rad2 = rad * rad;
    const pull = 0.015 * SPEED * step;
    const keep = Math.pow(0.94, step) * (1 - pull), keepVelocity = Math.pow(0.95, step) * (1 - pull);
    const k = PUSH * SPEED * step * 0.01;
    const out = particles!.instanceMatrix.array;
    for (let i = 0; i < n; i++) {
      const j = i * 3;
      if (pointer.active && rad > 0) {
        const x = base[j] + offset[j], y = base[j + 1] + offset[j + 1], z = base[j + 2] + offset[j + 2];
        if (g[2] * x + g[6] * y + g[10] * z + g[14] > 0) { // front half only
          const w = e[3] * x + e[7] * y + e[11] * z + e[15];
          const sx = ((e[0] * x + e[4] * y + e[8] * z + e[12]) / w * 0.5 + 0.5) * width;
          const sy = (-(e[1] * x + e[5] * y + e[9] * z + e[13]) / w * 0.5 + 0.5) * height;
          const dx = pointer.x - sx, dy = pointer.y - sy, d2 = dx * dx + dy * dy;
          if (d2 < rad2 && d2 > 0) {
            const f = (rad - Math.sqrt(d2)) / rad, a = Math.atan2(dy, dx);
            const rx = -Math.cos(a) * f * k, ry = Math.sin(a) * f * k;
            offset[j] += g[0] * rx + g[1] * ry; offset[j + 1] += g[4] * rx + g[5] * ry; offset[j + 2] += g[8] * rx + g[9] * ry;
          }
        }
      }
      offset[j] *= keep; offset[j + 1] *= keep; offset[j + 2] *= keep;
      offset[j] += velocity[j] * step * 0.1; offset[j + 1] += velocity[j + 1] * step * 0.1; offset[j + 2] += velocity[j + 2] * step * 0.1;
      velocity[j] *= keepVelocity; velocity[j + 1] *= keepVelocity; velocity[j + 2] *= keepVelocity;
      const o = i * 16;
      out[o + 12] = base[j] + offset[j]; out[o + 13] = base[j + 1] + offset[j + 1]; out[o + 14] = base[j + 2] + offset[j + 2];
    }
    particles!.instanceMatrix.needsUpdate = true;
    renderer!.render(scene, camera);
    frameId = requestAnimationFrame(frame);
  };
  frameId = requestAnimationFrame(frame);
});

watch(() => props.count, () => { if (renderer) build(); });
watch(() => props.shape, (name) => { if (renderer) morphTo(name); });
watch(() => props.color, (c) => { if (particles) (particles.material as THREE.MeshBasicMaterial).color.set(c); });

onBeforeUnmount(() => {
  cancelAnimationFrame(frameId); observer?.disconnect();
  if (particles) { particles.geometry.dispose(); (particles.material as THREE.Material).dispose(); }
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
