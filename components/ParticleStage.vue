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
  focused?: boolean;                          // a topic has been entered: move closer, calm the background
  points?: { slug: string; title: string }[]; // selectable points shown on the shape while focused
}>(), { count: 10000, active: true, shift: 0, landUrl: '', focused: false, points: () => [] });
const emit = defineEmits<{ pick: [slug: string] }>();

const host = ref<HTMLElement>();
const markers = ref<HTMLElement[]>([]);

// stage
const SCALE = 1.2, FOV = 35, DISTANCE = 6.6, INTRO = 3.2;
const BREATH = 0.022, BREATH_PACE = 10.25; // idle shimmer: how far each particle moves in and out along its surface, and how fast (the quickest ones about 1.6 times a second)
const SCATTER = 3.6; // leaving a topic: how far each particle flies out along its own random direction
// Particle Sphere settings (its defaults plus the supplied preset; frame-based values are per 1/60 s)
const SPEED = 2;              // "speed 20": scales pushing and how fast particles return
const SMOOTH = 0.03;          // "smoothing 10": how quickly the shape catches up with a drag
const THROW_DECAY = 0.96;     // how long a thrown shape keeps turning
const DRAG = 0.0105;          // "drag speed 5": radians per pixel dragged
const RADIUS = 40;            // pointer reach, CSS pixels
const STRENGTH = 15;          // "cursor strength 10"
const CLICK = 10;             // click scatter force
const FRICTION = 0.94, RETURN = 0.015, SCATTER_FRICTION = 0.95;
const BALL = 0.0075;          // "particle scale 5": radius of one ball, scene units (each ball varies around this)
// lighting: one light, fixed relative to the camera (up, a little to the right, in front), like a studio lamp
const LIGHT = new THREE.Vector3(0.4, 0.75, 0.55).normalize();

let renderer: THREE.WebGLRenderer | undefined;
let balls: THREE.InstancedMesh | undefined, field: THREE.Points | undefined;
let clouds: Cloud[] = [], isLand: LandTest | undefined;
let from: Cloud, to: Cloud, showing: Cloud; // the journey's two shapes, and the one on screen right now
let disperse = 1, shownKey = -1, autoTurn = 0, globeTurn = 0;
let seeds = new Float32Array(0), current = new Float32Array(0), offsets = new Float32Array(0), velocities = new Float32Array(0);
let pair = -1, intro = 0, started = false;
let width = 1, height = 1, frameId = 0, observer: ResizeObserver | undefined, disposed = false;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);
const pivot = new THREE.Group();
scene.add(pivot);
const pointer = { px: 0, py: 0, x: 0, y: 0, tx: 0, ty: 0, on: 0, target: 0, inside: false, click: false };
const spin = { x: 0, y: 0, tx: 0, ty: 0, vx: 0, vy: 0, dragging: false, moved: 0, lastX: 0, lastY: 0, lastT: 0 }; // x = turn, y = tilt
let shiftNow = 0, focusNow = 0;
let anchors: number[] = []; // which particle each point sits on
const colorMain = new THREE.Color(), colorAccent = new THREE.Color(), colorStage = new THREE.Color(), tint = new THREE.Color();

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
  from = first; to = first; showing = first;
  current = first.positions.slice(); shownKey = -1;
  pair = -1;

  // one small ball per particle
  balls = new THREE.InstancedMesh(new THREE.SphereGeometry(BALL, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }), n);
  balls.frustumCulled = false;
  const m = new THREE.Matrix4();
  for (let i = 0; i < n; i++) { // sizes vary, so the cloud looks like grains rather than a grid
    const s = 0.5 + seeds[i * 4 + 3] * 1.0;
    m.makeScale(s, s, s).setPosition(current[i * 3], current[i * 3 + 1], current[i * 3 + 2]); balls.setMatrixAt(i, m);
    balls.setColorAt(i, tint.setRGB(1, 1, 1));
  }
  colorMain.copy(cssColor('--on-dark', '#ffffff')); colorAccent.copy(cssColor('--accent', '#c8d2ff')); colorStage.copy(cssColor('--stage-from', '#2440c9'));
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
      uPointer: { value: new THREE.Vector2() }, uPointerOn: { value: 0 }, uRadius: { value: 0.45 }, uPush: { value: 0 }, // the field is not pushed; it only shifts as the camera leans with the pointer
      uColor: { value: colorMain.clone() }, uAccent: { value: colorAccent.clone() }, uOpacity: { value: 0.6 }, uAccentShare: { value: 0.6 },
    },
  }));
  field.frustumCulled = false; field.renderOrder = -1;
  scene.add(field);
  resize();
}

/** Light every ball, every frame. The light stays put while the shape turns, so one side is always
 *  bright and the other falls into shadow; balls on the far side of the shape fade out. */
const modelView = new THREE.Matrix4(), shadow = new THREE.Color(), lit = new THREE.Color();
function light() {
  const n = current.length / 3, normals = showing.normals, colors = balls!.instanceColor!.array as Float32Array;
  modelView.multiplyMatrices(camera.matrixWorldInverse, balls!.matrixWorld);
  const m = modelView.elements, centreZ = m[14], reach = SCALE * 1.05;
  shadow.copy(colorStage).lerp(colorAccent, 0.16); lit.copy(colorMain); // in shadow a ball sinks into the stage colour; in light it turns white
  const fade = Math.pow(1 - disperse, 1.3); // particles dim into the stage colour as they scatter
  for (let i = 0; i < n; i++) {
    const j = i * 3, x = current[j] + offsets[j], y = current[j + 1] + offsets[j + 1], z = current[j + 2] + offsets[j + 2];
    const nx = normals[j], ny = normals[j + 1], nz = normals[j + 2];
    // normal and depth as the camera sees them
    const vx = m[0] * nx + m[4] * ny + m[8] * nz, vy = m[1] * nx + m[5] * ny + m[9] * nz, vz = m[2] * nx + m[6] * ny + m[10] * nz;
    const depth = ((m[2] * x + m[6] * y + m[10] * z + m[14]) - centreZ) / reach; // +1 nearest to the camera, -1 farthest
    const facing = Math.max(vx * LIGHT.x + vy * LIGHT.y + vz * LIGHT.z, 0);
    let b = 0.24 + 0.76 * Math.pow(facing, 1.25);                               // lit side bright, the rest in shadow
    const near = Math.min(1, Math.max(0, (depth + 0.55) / 0.9)); b *= 0.12 + 0.88 * near * near; // far side fades away
    if (seeds[i * 4] > 0.82) b = Math.min(1, b + 0.25);
    b *= fade;                              // a few grains always catch the light
    colors[j] = shadow.r + (lit.r - shadow.r) * b; colors[j + 1] = shadow.g + (lit.g - shadow.g) * b; colors[j + 2] = shadow.b + (lit.b - shadow.b) * b;
  }
  balls!.instanceColor!.needsUpdate = true;
}

/** Where every particle is right now: on the shape, or flown out from it along its own random direction.
 *  Leaving a topic scatters the old shape; arriving gathers the new one from the same scatter. */
function place(cloud: Cloud, amount: number) {
  const key = clouds.indexOf(cloud) * 10 + amount; // skip the work when nothing changed
  if (key === shownKey) return;
  shownKey = key; showing = cloud; disperse = amount;
  const a = cloud.positions, out = current, n = out.length / 3;
  if (amount <= 0) { out.set(a); return; }
  const reach = SCATTER * amount;
  for (let i = 0; i < n; i++) {
    const s = i * 4, j = i * 3;
    out[j] = a[j] + (seeds[s + 1] * 2 - 1) * reach; out[j + 1] = a[j + 1] + (seeds[s + 2] * 2 - 1) * reach; out[j + 2] = a[j + 2] + (seeds[s + 3] * 2 - 1) * reach;
  }
}

/** Choose particles for the points: on the shape's front, well apart from each other. */
function chooseAnchors() {
  const cloud = clouds[wrap(Math.round(props.travel.state.progress))], k = props.points.length;
  anchors = [];
  if (!cloud || !k) return;
  const p = cloud.positions, n = p.length / 3, step = Math.max(1, Math.floor(n / 600)), picked: number[] = [];
  const front = (i: number) => p[i * 3 + 2] > 0.3; // the side that faces the camera once the shape is turned to its front
  let best = -1; // start from the front particle that is highest and most to one side
  for (let i = 0; i < n; i += step) if (front(i) && (best < 0 || p[i * 3 + 1] - p[i * 3] > p[best * 3 + 1] - p[best * 3])) best = i;
  if (best < 0) best = 0;
  picked.push(best);
  while (picked.length < k) {
    let far = 0, farD = -1;
    for (let i = 0; i < n; i += step) {
      if (!front(i)) continue;
      let d = Infinity;
      for (const j of picked) d = Math.min(d, (p[i * 3] - p[j * 3]) ** 2 + (p[i * 3 + 1] - p[j * 3 + 1]) ** 2 + (p[i * 3 + 2] - p[j * 3 + 2]) ** 2);
      if (d > farD) { farD = d; far = i; }
    }
    picked.push(far);
  }
  anchors = picked;
  // turn the shape to its front (the nearest full turn) and level it, so every point starts in view
  spin.tx = -autoTurn + Math.round((spin.x + autoTurn) / (Math.PI * 2)) * Math.PI * 2; spin.ty = 0; spin.vx = spin.vy = 0;
}

/** Keep each point glued to its particle on screen; points on the far side of the shape fade out. */
const anchorAt = new THREE.Vector3();
function placeMarkers() {
  const els = markers.value;
  if (!els.length || !balls) return;
  const centreDepth = camera.position.length();
  for (let k = 0; k < els.length; k++) {
    const i = anchors[k], el = els[k];
    if (i === undefined || !el) continue;
    anchorAt.set(current[i * 3] + offsets[i * 3], current[i * 3 + 1] + offsets[i * 3 + 1], current[i * 3 + 2] + offsets[i * 3 + 2]).applyMatrix4(balls.matrixWorld);
    const near = camera.position.distanceTo(anchorAt) < centreDepth + 0.25;
    anchorAt.project(camera);
    el.style.transform = `translate(${((anchorAt.x * 0.5 + 0.5) * width).toFixed(1)}px, ${((-anchorAt.y * 0.5 + 0.5) * height).toFixed(1)}px)`;
    el.classList.toggle('behind', !near);
  }
}

function setPair(index: number) { pair = index; from = clouds[wrap(index)]; to = clouds[wrap(index + 1)]; }

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

function simulate(df: number, still: boolean, time: number) {
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
  // move every ball to its place plus its displacement; on the shape, each one also breathes in and out along its surface
  const out = balls!.instanceMatrix.array as Float32Array, nr = showing.normals, breathe = still ? 0 : BREATH * (1 - disperse);
  for (let i = 0; i < n; i++) {
    const j = i * 3, o = i * 16, pace = seeds[i * 4 + 2], w = breathe * Math.cos(time * BREATH_PACE * pace + Math.PI * pace) * seeds[i * 4]; // each particle at its own pace and depth
    out[o + 12] = h[j] + p[j] + nr[j] * w; out[o + 13] = h[j + 1] + p[j + 1] + nr[j + 1] * w; out[o + 14] = h[j + 2] + p[j + 2] + nr[j + 2] * w;
  }
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

/** Pose. Every shape starts in its own upright, front-facing pose. On top of that:
 *    · the user can drag it round and throw it;
 *    · the globe turns slowly by itself, every other shape just sways a little;
 *    · it bobs gently up and down. */
function turn(df: number, dt: number, still: boolean, time: number, isGlobe: boolean) {
  if (!spin.dragging && (Math.abs(spin.vx) > 0.0001 || Math.abs(spin.vy) > 0.0001)) {
    spin.tx += spin.vx * df; spin.ty = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, spin.ty + spin.vy * df));
    const decay = Math.pow(THROW_DECAY, df); spin.vx *= decay; spin.vy *= decay;
  }
  const k = still ? 1 : 1 - Math.pow(1 - SMOOTH, df);
  spin.x += (spin.tx - spin.x) * k; spin.y += (spin.ty - spin.y) * k;
  const calm = 1 - focusNow; // inside a topic the shape holds still, so its points stay put
  if (!still) globeTurn -= 0.1 * dt * calm;
  autoTurn = still ? 0 : isGlobe ? globeTurn : Math.cos(time) * 0.1 * calm;
  const drift = still ? 0 : calm; // floating: a slow nod and roll, and a rise and fall
  pivot.rotation.set(spin.y + Math.sin(time * 0.7) * 0.045 * drift, spin.x + autoTurn, Math.cos(time * 0.55) * 0.03 * drift);
  pivot.position.y = still ? 0 : Math.sin(time) * 0.07;
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

    // which shape is on screen, and how scattered it is
    let between = 0;
    const index = Math.round(travel.state.progress);
    const smooth = (x: number) => { const t = Math.min(1, Math.max(0, x)); return t * t * (3 - 2 * t); };
    if (!started) place(to, 1);
    else if (intro < 1) { intro = still ? 1 : Math.min(1, intro + dt / INTRO); place(to, 1 - smooth(intro)); } // opening: gather from the scatter
    else {
      const p = travel.state.progress, i = Math.floor(p), f = p - i;
      if (i !== pair) setPair(i);
      if ((f >= 0.5 ? to : from) !== showing && disperse > 0.5) spin.x = spin.tx = spin.y = spin.ty = spin.vx = spin.vy = 0; // a new shape always arrives in its own pose
      if (f < 0.5) place(from, smooth((f - 0.06) / 0.44)); // first half: the old shape scatters…
      else place(to, 1 - smooth((f - 0.5) / 0.44));        // …second half: the new one gathers
      between = Math.sin(Math.pow(f, 0.8) * Math.PI);      // the camera is closest a little before half-way
    }

    // camera: zooms in and swings a little between topics, leans with the pointer
    pointer.x += (pointer.tx - pointer.x) * follow(2.2); pointer.y += (pointer.ty - pointer.y) * follow(2.2); // slow, floaty follow
    pointer.on += (pointer.target - pointer.on) * follow(2);
    const swing = between * 0.3 * travel.state.direction;
    const pull = 1 - between * 0.7 + (1 - Math.min(1, intro * 1.3)) * 0.5; // between topics the camera flies into the cloud, then eases back out as the next shape forms
    focusNow += ((props.focused ? 1 : 0) - focusNow) * follow(2.6);
    at.copy(base).applyAxisAngle(up, swing).multiplyScalar(DISTANCE * pull * (1 - 0.27 * focusNow) * Math.max(1, 0.72 / camera.aspect)); // step back on narrow screens so wide shapes fit
    side.crossVectors(up, at).normalize();
    camera.position.copy(at).addScaledVector(side, pointer.x * 0.9 * pointer.on).addScaledVector(up, pointer.y * 0.55 * pointer.on); // the camera leans around the shape, so the background slides with the pointer
    camera.lookAt(0, 0, 0);
    shiftNow += (props.shift - shiftNow) * follow(4);
    if (Math.abs(shiftNow) > 0.0005) camera.setViewOffset(width, height, shiftNow * width, 0, width, height); else camera.clearViewOffset();
    camera.updateProjectionMatrix(); camera.updateMatrixWorld();

    turn(df, dt, still, time, props.shapes[wrap(index)] === 'globe');
    simulate(df, still, time);
    light();

    field!.rotation.y = -time * 0.02;
    const u = fieldUniforms();
    placeMarkers();
    u.uOpacity.value = 0.6 * (1 - 0.55 * focusNow); // the background calms down while a topic is entered
    u.uTime.value = time; u.uFocus.value = camera.position.length(); u.uPointer.value.set(pointer.x, pointer.y); u.uPointerOn.value = pointer.on;
    renderer!.render(scene, camera);
    frameId = requestAnimationFrame(frame);
  };
  frameId = requestAnimationFrame(frame);
});

watch(() => props.active, (on) => { if (on) started = true; });
watch(() => props.points, chooseAnchors, { immediate: true });
watch(() => [props.count, props.shapes.join()], () => { if (renderer) { if (started) intro = 1; build(); } });

onBeforeUnmount(() => {
  disposed = true;
  cancelAnimationFrame(frameId); observer?.disconnect();
  drop(balls); drop(field);
  renderer?.dispose(); renderer?.domElement.remove();
});
</script>

<template>
  <div ref="host" class="stage">
    <TransitionGroup name="marker">
      <button v-for="(p, k) in points" :key="p.slug" ref="markers" type="button" class="marker" :style="{ '--k': k }" :aria-label="p.title" @click="emit('pick', p.slug)">
        <span class="dot" /><span class="label">{{ p.title }}</span>
      </button>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.stage { position: absolute; inset: 0; overflow: hidden;
  background:
    radial-gradient(70% 90% at 100% 55%, color-mix(in srgb, var(--stage-to) 78%, transparent) 0%, transparent 70%),                     /* shadow on the right */
    radial-gradient(55% 60% at 0% 0%, color-mix(in srgb, var(--stage-to) 70%, transparent) 0%, transparent 75%),                        /* shadow in the top-left corner */
    linear-gradient(122deg, transparent 14%, color-mix(in srgb, var(--accent) 16%, transparent) 30%, color-mix(in srgb, var(--accent) 42%, transparent) 43%, color-mix(in srgb, var(--accent) 14%, transparent) 55%, transparent 72%), /* a wide beam of light, top-right to bottom-left */
    radial-gradient(120% 110% at 52% 45%, var(--stage-from) 0%, color-mix(in srgb, var(--stage-from) 62%, var(--stage-to)) 55%, var(--stage-to) 100%); }
.stage :deep(canvas) { position: absolute; inset: 0; width: 100%; height: 100%; display: block; touch-action: none; cursor: grab; }
.stage :deep(canvas:active) { cursor: grabbing; }

/* points on the shape: placed from the top-left corner by the stage, centred on their particle */
.marker { position: absolute; left: 0; top: 0; z-index: 1; width: 0; height: 0; padding: 0; border: 0; background: none; color: var(--on-dark); cursor: pointer; transition: opacity .3s var(--ease); }
.marker.behind { opacity: 0; pointer-events: none; }
.dot { position: absolute; left: -.55rem; top: -.55rem; width: 1.1rem; height: 1.1rem; border-radius: 50%; background: var(--accent); border: 2px solid var(--on-dark); box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent) 70%, transparent); animation: pulse 2.4s var(--ease) infinite; animation-delay: calc(var(--k) * .3s); transition: transform .25s var(--ease), background .25s var(--ease); }
.marker::before { content: ''; position: absolute; left: -1.4rem; top: -1.4rem; width: 2.8rem; height: 2.8rem; border-radius: 50%; } /* a comfortable area to hit */
.marker:hover .dot, .marker:focus-visible .dot { transform: scale(1.35); background: var(--on-dark); }
.marker:focus-visible { outline: none; }
.marker:focus-visible .dot { outline: 2px solid var(--on-dark); outline-offset: 3px; }
.label { position: absolute; left: 1.1rem; top: -.75rem; padding: .25rem .7rem; border-radius: 999px; background: var(--surface); color: var(--text); font-size: .75rem; font-weight: 600; white-space: nowrap; opacity: 0; transform: translateX(-6px); transition: opacity .25s var(--ease), transform .25s var(--ease); pointer-events: none; }
.marker:hover .label, .marker:focus-visible .label { opacity: 1; transform: none; }
.marker-enter-active { transition: opacity .5s var(--ease) calc(.5s + var(--k) * .12s); }
.marker-leave-active { transition: opacity .25s var(--ease); }
.marker-enter-from, .marker-leave-to { opacity: 0; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent) 70%, transparent); } 70%, 100% { box-shadow: 0 0 0 .9rem transparent; } }
@media (prefers-reduced-motion: reduce) { .dot { animation: none; } }
</style>
