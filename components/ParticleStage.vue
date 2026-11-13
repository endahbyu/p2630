<script setup lang="ts">
// Particle stage.
//   · the shape — built the "Particle Sphere" way (Originkit component, licensed for this project):
//     every particle is a tiny glowing ball; the shape turns by itself, can be dragged and thrown,
//     the pointer pushes away the particles facing you, and a click scatters them.
//     Here the balls sit on the active topic's shape instead of a plain sphere, and travel to the
//     next shape as you scroll (lib/scrollTravel.ts: whole numbers are topics, the fraction is the journey).
//   · the field — sparse dots far around it, out of focus, drawn by lib/particleShader.ts.
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
}>(), { count: 10000, active: true, shift: 0, landUrl: '' });

const host = ref<HTMLElement>();

// stage
const SCALE = 1.2, FOV = 35, DISTANCE = 6.6, INTRO = 3.2;
const STAGGER = 0.5, SPREAD = 0.9; // travelling between shapes: how staggered, how far apart
// Particle Sphere settings (its defaults plus the supplied preset; frame-based values are per 1/60 s)
const SPEED = 2;              // "speed 20": scales pushing and how fast particles return
const TURN = 0.003;           // idle turn per frame, radians (about one full turn every 35 seconds)
const SMOOTH = 0.03;          // "smoothing 10": how quickly the shape catches up with a drag
const THROW_DECAY = 0.96;     // how long a thrown shape keeps turning
const DRAG = 0.0105;          // "drag speed 5": radians per pixel dragged
const RADIUS = 40;            // pointer reach, CSS pixels
const STRENGTH = 15;          // "cursor strength 10"
const CLICK = 10;             // click scatter force
const FRICTION = 0.94, RETURN = 0.015, SCATTER_FRICTION = 0.95;
const BALL = 0.008;           // "particle scale 5": radius of one ball, scene units

let renderer: THREE.WebGLRenderer | undefined;
let balls: THREE.InstancedMesh | undefined, field: THREE.Points | undefined;
let clouds: Cloud[] = [], isLand: LandTest | undefined;
let from: Cloud, to: Cloud, painted: Cloud | undefined;
let seeds = new Float32Array(0), current = new Float32Array(0), offsets = new Float32Array(0), velocities = new Float32Array(0);
let pair = -1, intro = 0, started = false, shownMorph = -1;
let width = 1, height = 1, frameId = 0, observer: ResizeObserver | undefined, disposed = false;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);
const pivot = new THREE.Group();
scene.add(pivot);
const pointer = { px: 0, py: 0, x: 0, y: 0, tx: 0, ty: 0, on: 0, target: 0, inside: false, click: false };
const spin = { x: 0, y: 0, tx: 0, ty: 0, vx: 0, vy: 0, dragging: false, moved: 0, lastX: 0, lastY: 0, lastT: 0 }; // x = turn, y = tilt
let shiftNow = 0;
const colorMain = new THREE.Color(), colorAccent = new THREE.Color(), tint = new THREE.Color();

const cssColor = (name: string, fallback: string) => new THREE.Color(getComputedStyle(host.value!).getPropertyValue(name).trim() || fallback);
const wrap = (i: number) => ((i % props.shapes.length) + props.shapes.length) % props.shapes.length;
const fieldUniforms = () => (field!.material as THREE.ShaderMaterial).uniforms;

function drop(o?: THREE.Points | THREE.InstancedMesh) { if (o) { o.removeFromParent(); o.geometry.dispose(); (o.material as THREE.Material).dispose(); } }

function build() {
  drop(balls); drop(field);
  const n = props.count;
  clouds = props.shapes.map((name) => { const c = buildShape(name, n, isLand); for (let i = 0; i < c.positions.length; i++) c.positions[i] *= SCALE; return c; });
  seeds = Float32Array.from({ length: n * 4 }, () => Math.random());
  offsets = new Float32Array(n * 3); velocities = new Float32Array(n * 3);
  const first = clouds[wrap(Math.floor(props.travel.state.progress))];
  from = intro >= 1 ? first : scatter(n, 3.5, 9); to = first; // before the intro the particles wait far out
  current = from.positions.slice();
  pair = -1; shownMorph = -1; painted = undefined;

  // one small ball per particle, additive so overlaps glow
  balls = new THREE.InstancedMesh(new THREE.SphereGeometry(BALL, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffffff, blending: THREE.AdditiveBlending }), n);
  balls.frustumCulled = false;
  const m = new THREE.Matrix4();
  for (let i = 0; i < n; i++) { m.setPosition(current[i * 3], current[i * 3 + 1], current[i * 3 + 2]); balls.setMatrixAt(i, m); }
  colorMain.copy(cssColor('--on-dark', '#ffffff')); colorAccent.copy(cssColor('--accent', '#c8d2ff'));
  paint(from);
  pivot.add(balls);

  // background field
  const k = Math.round(n * 0.28), far = scatter(k, 2.6, 10), g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(k * 3), 3));
  g.setAttribute('aFrom', new THREE.BufferAttribute(far.positions, 3));
  g.setAttribute('aTo', new THREE.BufferAttribute(far.positions, 3));
  g.setAttribute('aShade', new THREE.BufferAttribute(new Float32Array(k * 2).fill(0.8), 2));
  g.setAttribute('aOffset', new THREE.BufferAttribute(new Float32Array(k * 3), 3));
  g.setAttribute('aSeed', new THREE.BufferAttribute(Float32Array.from({ length: k * 4 }, () => Math.random()), 4));
  field = new THREE.Points(g, new THREE.ShaderMaterial({
    vertexShader, fragmentShader, transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 }, uMorph: { value: 1 }, uStagger: { value: 0 }, uSpread: { value: 0 }, uDir: { value: 1 }, uDrift: { value: 0.05 },
      uSize: { value: 0.022 }, uPixels: { value: 1 }, uFocus: { value: DISTANCE }, uAperture: { value: 0.011 }, uDepthFade: { value: 0 }, uAspect: { value: 1 },
      uPointer: { value: new THREE.Vector2() }, uPointerOn: { value: 0 }, uRadius: { value: 0.45 }, uPush: { value: 0.22 },
      uColor: { value: colorMain.clone() }, uAccent: { value: colorAccent.clone() }, uOpacity: { value: 0.6 }, uAccentShare: { value: 0.6 },
    },
  }));
  field.frustumCulled = false; field.renderOrder = -1;
  scene.add(field);
  resize();
}

/** Brightness per ball follows the shape's lighting, so the form reads as 3D; a few balls take the accent colour. */
function paint(cloud: Cloud) {
  if (!balls || painted === cloud) return;
  painted = cloud;
  for (let i = 0; i < cloud.shades.length; i++) {
    tint.copy(seeds[i * 4] > 0.7 ? colorAccent : colorMain).multiplyScalar(0.45 + 0.55 * cloud.shades[i]);
    balls.setColorAt(i, tint);
  }
  balls.instanceColor!.needsUpdate = true;
}

/** Where every particle belongs right now: on a shape, or somewhere on the way between two. */
function place(morph: number, direction: number) {
  if (morph === shownMorph) return;
  shownMorph = morph;
  const a = from.positions, b = to.positions, out = current, n = out.length / 3;
  if (morph <= 0) { out.set(a); return; }
  if (morph >= 1) { out.set(b); return; }
  for (let i = 0; i < n; i++) {
    const s = i * 4, j = i * 3;
    const t = Math.min(1, Math.max(0, morph * (1 + STAGGER) - seeds[s] * STAGGER)); // each particle leaves at its own moment
    const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2, mid = Math.sin(e * Math.PI), grow = 1 + mid * 0.2;
    let ax = seeds[s + 1] * 2 - 1, ay = seeds[s + 2] * 2 - 1, az = seeds[s + 3] * 2 - 1;
    const len = Math.hypot(ax, ay, az) || 1; ax /= len; ay /= len; az /= len;
    const x = (a[j] + (b[j] - a[j]) * e) * grow + ax * mid * SPREAD, y = (a[j + 1] + (b[j + 1] - a[j + 1]) * e) * grow + ay * mid * SPREAD, z = (a[j + 2] + (b[j + 2] - a[j + 2]) * e) * grow + az * mid * SPREAD;
    const turn = direction * mid * (0.5 + seeds[s] * 1.1), c = Math.cos(turn), sn = Math.sin(turn); // swirl mid-way
    out[j] = x * c - z * sn; out[j + 1] = y; out[j + 2] = x * sn + z * c;
  }
}

function setPair(index: number) { pair = index; from = clouds[wrap(index)]; to = clouds[wrap(index + 1)]; shownMorph = -1; }

function resize() {
  if (!host.value || !renderer) return;
  width = host.value.clientWidth || 1; height = host.value.clientHeight || 1;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  if (field) { const u = fieldUniforms(); u.uPixels.value = renderer.getDrawingBufferSize(new THREE.Vector2()).y / (2 * Math.tan(THREE.MathUtils.degToRad(FOV) / 2)); u.uAspect.value = camera.aspect; }
}

// ---- pointer physics ----
// Each particle has a displacement from its place in the shape, and a scatter velocity.
//   · pointer: particles on the near side, within RADIUS pixels of the pointer on screen, are pushed away from it
//   · click:   particles within RADIUS pixels get a velocity away from the clicked point
//   · always:  displacement and velocity shrink every frame, so particles drift back home
const toScreen = new THREE.Matrix4(), inverse = new THREE.Matrix4(), toCamera = new THREE.Vector3(), clickAt = new THREE.Vector3(), centre = new THREE.Vector3();
const camRight = new THREE.Vector3(), camUp = new THREE.Vector3(), localRight = new THREE.Vector3(), localUp = new THREE.Vector3();

function simulate(df: number, still: boolean) {
  const pushing = pointer.inside && !still, burst = pointer.click; pointer.click = false;
  const n = offsets.length / 3, p = offsets, v = velocities, h = current;
  const giveBack = RETURN * SPEED * df, keep = Math.pow(FRICTION, df) * (1 - giveBack), keepVelocity = Math.pow(SCATTER_FRICTION, df) * (1 - giveBack);
  let e: number[] = [], g: number[] = [], l: number[] = [], frontZ = 0;
  if (pushing || burst) {
    balls!.updateWorldMatrix(true, false);
    toScreen.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse).multiply(balls!.matrixWorld);
    e = toScreen.elements; g = balls!.matrixWorld.elements;
    inverse.copy(balls!.matrixWorld).invert(); l = inverse.elements;
    camRight.setFromMatrixColumn(camera.matrixWorld, 0).normalize(); camUp.setFromMatrixColumn(camera.matrixWorld, 1).normalize();
    localRight.copy(camRight).transformDirection(inverse); localUp.copy(camUp).transformDirection(inverse);
    toCamera.copy(camera.position).normalize();
    centre.setFromMatrixPosition(balls!.matrixWorld); frontZ = centre.dot(toCamera);
    if (burst) clickAt.set((pointer.px / width) * 2 - 1, 1 - (pointer.py / height) * 2, 0.5).unproject(camera).sub(camera.position).normalize().multiplyScalar(camera.position.length()).add(camera.position); // the click, at the shape's distance
  }
  const cx = toCamera.x, cy = toCamera.y, cz = toCamera.z, r2 = RADIUS * RADIUS, pushScale = STRENGTH * SPEED * df * 0.01;
  for (let i = 0; i < n; i++) {
    const ix = i * 3, iy = ix + 1, iz = ix + 2;
    if (pushing || burst) {
      const x = h[ix] + p[ix], y = h[iy] + p[iy], z = h[iz] + p[iz];
      const w = e[3] * x + e[7] * y + e[11] * z + e[15];
      const sx = ((e[0] * x + e[4] * y + e[8] * z + e[12]) / w * 0.5 + 0.5) * width, sy = (-(e[1] * x + e[5] * y + e[9] * z + e[13]) / w * 0.5 + 0.5) * height;
      const dx = pointer.px - sx, dy = pointer.py - sy, d2 = dx * dx + dy * dy;
      if (d2 < r2 && d2 > 0) {
        const d = Math.sqrt(d2), force = (RADIUS - d) / RADIUS;
        const wx = g[0] * x + g[4] * y + g[8] * z + g[12], wy = g[1] * x + g[5] * y + g[9] * z + g[13], wz = g[2] * x + g[6] * y + g[10] * z + g[14];
        if (pushing && wx * cx + wy * cy + wz * cz > frontZ) { // only the side facing the camera reacts
          const k = force * pushScale / d, rx = -dx * k, ry = dy * k; // away from the pointer, in screen directions
          p[ix] += localRight.x * rx + localUp.x * ry; p[iy] += localRight.y * rx + localUp.y * ry; p[iz] += localRight.z * rx + localUp.z * ry;
        }
        if (burst) {
          let ax = wx - clickAt.x, ay = wy - clickAt.y, az = wz - clickAt.z;
          const len = Math.hypot(ax, ay, az);
          if (len > 0.001) {
            const m = (force * CLICK * 0.5) / len; ax *= m; ay *= m; az *= m;
            v[ix] += l[0] * ax + l[4] * ay + l[8] * az; v[iy] += l[1] * ax + l[5] * ay + l[9] * az; v[iz] += l[2] * ax + l[6] * ay + l[10] * az; // world direction → the shape's own space
          }
        }
      }
    }
    p[ix] = p[ix] * keep + v[ix] * df * 0.1; p[iy] = p[iy] * keep + v[iy] * df * 0.1; p[iz] = p[iz] * keep + v[iz] * df * 0.1;
    v[ix] *= keepVelocity; v[iy] *= keepVelocity; v[iz] *= keepVelocity;
  }
  // move every ball to its place plus its displacement
  const out = balls!.instanceMatrix.array as Float32Array;
  for (let i = 0; i < n; i++) { const j = i * 3, o = i * 16; out[o + 12] = h[j] + p[j]; out[o + 13] = h[j + 1] + p[j + 1]; out[o + 14] = h[j + 2] + p[j + 2]; }
  balls!.instanceMatrix.needsUpdate = true;
}

function locate(e: PointerEvent | MouseEvent) {
  const r = renderer!.domElement.getBoundingClientRect();
  pointer.px = e.clientX - r.left; pointer.py = e.clientY - r.top;
  pointer.tx = (pointer.px / r.width) * 2 - 1; pointer.ty = 1 - (pointer.py / r.height) * 2;
}
function onMove(e: PointerEvent) {
  locate(e); pointer.inside = true; pointer.target = 1;
  if (spin.dragging) { // drag turns the shape; the last movement becomes the throw
    const now = performance.now(), dx = e.clientX - spin.lastX, dy = e.clientY - spin.lastY, gap = now - spin.lastT;
    spin.tx += dx * DRAG; spin.ty = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, spin.ty + dy * DRAG));
    if (gap > 0) { const k = (1000 / 60 / gap) * 0.3; spin.vx = dx * DRAG * k; spin.vy = dy * DRAG * k; }
    spin.moved += Math.abs(dx) + Math.abs(dy);
    spin.lastX = e.clientX; spin.lastY = e.clientY; spin.lastT = now;
  }
}
function onLeave() { pointer.inside = false; pointer.target = 0; }
function onDown(e: PointerEvent) {
  if (e.pointerType !== 'mouse' || e.button !== 0) return; // touch swipes travel between topics instead
  spin.dragging = true; spin.moved = 0; spin.vx = spin.vy = 0; spin.lastX = e.clientX; spin.lastY = e.clientY; spin.lastT = performance.now();
  renderer!.domElement.setPointerCapture(e.pointerId);
}
function onUp(e: PointerEvent) { spin.dragging = false; if (e.pointerType !== 'mouse') onLeave(); }

/** Turning: idle spin, drag, throw — the shape eases towards its target angles. */
function turn(df: number, still: boolean) {
  if (!spin.dragging) {
    if (!still) spin.tx += TURN * df;
    if (Math.abs(spin.vx) > 0.0001 || Math.abs(spin.vy) > 0.0001) {
      spin.tx += spin.vx * df; spin.ty = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, spin.ty + spin.vy * df));
      const decay = Math.pow(THROW_DECAY, df); spin.vx *= decay; spin.vy *= decay;
    }
  }
  const k = still ? 1 : 1 - Math.pow(1 - SMOOTH, df);
  spin.x += (spin.tx - spin.x) * k; spin.y += (spin.ty - spin.y) * k;
  pivot.rotation.set(spin.y, spin.x, 0);
}

onMounted(() => {
  const el = host.value!;
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  el.prepend(renderer.domElement);
  const canvas = renderer.domElement;
  canvas.addEventListener('pointermove', onMove, { passive: true });
  canvas.addEventListener('pointerleave', onLeave, { passive: true });
  canvas.addEventListener('pointercancel', onLeave, { passive: true });
  canvas.addEventListener('pointerdown', onDown);
  canvas.addEventListener('pointerup', onUp);
  canvas.addEventListener('click', (e) => { if (spin.moved < 5) { locate(e); pointer.click = true; } }); // a drag is not a click
  observer = new ResizeObserver(resize); observer.observe(el);
  started = props.active;
  build(); // shows at once with a plain sphere for the globe…
  if (props.landUrl) loadLandTest(props.landUrl).then((test) => { if (test && !disposed) { isLand = test; build(); } }); // …and swaps in the continents when they arrive

  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const base = new THREE.Vector3(0, -0.12, 1).normalize(), at = new THREE.Vector3(), side = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  let last = performance.now(), time = Math.random() * 100;
  const frame = (now: number) => {
    const dt = Math.min((now - last) / 1000, 1 / 30), df = dt * 60; last = now;
    if (!still) time += dt;
    const follow = (rate: number) => 1 - Math.exp(-dt * rate);
    const travel = props.travel;
    travel.update(dt);

    // which two shapes are we between, and how far along
    let morph = 0, between = 0;
    if (started && intro < 1) { intro = still ? 1 : Math.min(1, intro + dt / INTRO); morph = intro; }
    else if (started) {
      const p = travel.state.progress, i = Math.floor(p), f = p - i;
      if (i !== pair) setPair(i);
      const x = Math.min(1, Math.max(0, (f - 0.12) / 0.76)); // hold each shape for a moment at either end
      morph = x * x * (3 - 2 * x); between = Math.sin(f * Math.PI);
    }
    place(morph, travel.state.direction);
    paint(morph < 0.5 ? from : to);

    // camera: pulls back and swings to the side between topics, leans with the pointer
    pointer.x += (pointer.tx - pointer.x) * follow(6); pointer.y += (pointer.ty - pointer.y) * follow(6);
    pointer.on += (pointer.target - pointer.on) * follow(5);
    const swing = between * 0.45 * travel.state.direction, pull = 1 + between * 0.3 + (1 - Math.min(1, intro * 1.3)) * 0.5;
    at.copy(base).applyAxisAngle(up, swing).multiplyScalar(DISTANCE * pull * Math.max(1, 0.72 / camera.aspect)); // step back on narrow screens so wide shapes fit
    side.crossVectors(up, at).normalize();
    camera.position.copy(at).addScaledVector(side, pointer.x * 0.3 * pointer.on).addScaledVector(up, pointer.y * 0.2 * pointer.on);
    camera.lookAt(0, 0, 0);
    shiftNow += (props.shift - shiftNow) * follow(4);
    if (Math.abs(shiftNow) > 0.0005) camera.setViewOffset(width, height, shiftNow * width, 0, width, height); else camera.clearViewOffset();
    camera.updateProjectionMatrix(); camera.updateMatrixWorld();

    turn(df, still);
    simulate(df, still);

    field!.rotation.y = -time * 0.02;
    const u = fieldUniforms();
    u.uTime.value = time; u.uFocus.value = camera.position.length(); u.uPointer.value.set(pointer.x, pointer.y); u.uPointerOn.value = pointer.on;
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
  drop(balls); drop(field);
  renderer?.dispose(); renderer?.domElement.remove();
});
</script>

<template>
  <div ref="host" class="stage" />
</template>

<style scoped>
.stage { position: absolute; inset: 0; overflow: hidden;
  background:
    linear-gradient(128deg, transparent 18%, color-mix(in srgb, var(--accent) 26%, transparent) 40%, color-mix(in srgb, var(--accent) 10%, transparent) 52%, transparent 66%), /* a soft beam of light across the stage */
    radial-gradient(130% 110% at 58% 42%, var(--stage-from) 0%, color-mix(in srgb, var(--stage-from) 55%, var(--stage-to)) 48%, var(--stage-to) 100%); }
.stage :deep(canvas) { position: absolute; inset: 0; width: 100%; height: 100%; display: block; touch-action: none; cursor: grab; }
.stage :deep(canvas:active) { cursor: grabbing; }
</style>
