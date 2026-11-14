// The token as a real object in the scene: a thick, glossy tile with rounded edges that mirrors a soft studio
// around it, carrying the topic's icon on its face. One tile is one unit wide; the stage sizes and places it.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { ICONS } from '~/lib/icons';
import type { ShapeName } from '~/lib/shapes';

export const TILE_PX = 84; // the tile's size on screen, CSS pixels
const DEPTH = 0.13, EDGE = 0.035;

/** Soft studio surroundings for the tile to reflect. */
export function studio(renderer: THREE.WebGLRenderer) {
  const maker = new THREE.PMREMGenerator(renderer), map = maker.fromScene(new RoomEnvironment(), 0.04).texture;
  maker.dispose();
  return map;
}

/** The tile's body: its outline (a rounded square with one slanted side), pushed back and rounded over at the edges. */
export function tileGeometry() {
  const x = (v: number) => (v - 42) / 84, y = (v: number) => (42 - v) / 84, s = new THREE.Shape();
  s.moveTo(x(16), y(0)); s.lineTo(x(48), y(0)); s.quadraticCurveTo(x(64), y(0), x(67.7), y(15.6)); s.lineTo(x(80.3), y(68.4)); s.quadraticCurveTo(x(84), y(84), x(68), y(84));
  s.lineTo(x(16), y(84)); s.quadraticCurveTo(x(0), y(84), x(0), y(68)); s.lineTo(x(0), y(16)); s.quadraticCurveTo(x(0), y(0), x(16), y(0));
  const g = new THREE.ExtrudeGeometry(s, { depth: DEPTH, bevelEnabled: true, bevelThickness: EDGE, bevelSize: EDGE, bevelOffset: -EDGE, bevelSegments: 6, curveSegments: 16 });
  g.translate(0, 0, -DEPTH - EDGE); // front face at z = 0
  return g;
}

/** The icon, and the short accent stroke beside it, painted on a see-through square that covers the tile's face. */
export function iconTexture(name: ShapeName, ink: string, stroke: string) {
  const K = 4, c = document.createElement('canvas'); c.width = c.height = TILE_PX * K;
  const ctx = c.getContext('2d')!;
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.setTransform(K * 1.1, 0, 0, K * 1.1, 15 * K, 20 * K); // the accent stroke: a 44px square on a 40-unit grid
  ctx.strokeStyle = stroke; ctx.lineWidth = 3.6; ctx.stroke(new Path2D('M35 22a15 15 0 0 1-9.5 12'));
  ctx.setTransform((K * 44) / 24, 0, 0, (K * 44) / 24, 17 * K, 20 * K); // the icon: a 44px square on a 24-unit grid, a little left of centre
  ctx.strokeStyle = ink; ctx.lineWidth = 1.25;
  for (const d of ICONS[name]) ctx.stroke(new Path2D(d));
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

export type Token = { group: THREE.Group; body: THREE.MeshPhysicalMaterial; face: THREE.MeshBasicMaterial; shadow: THREE.MeshBasicMaterial; seen: number; turnX: number; turnY: number };

let shade: THREE.Texture | undefined;
function softShadow() { // a blurred dark blob that sits behind and below the tile
  if (shade) return shade;
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const ctx = c.getContext('2d')!, g = ctx.createRadialGradient(64, 64, 6, 64, 64, 64);
  g.addColorStop(0, 'rgba(0,0,0,.55)'); g.addColorStop(0.55, 'rgba(0,0,0,.2)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
  return (shade = new THREE.CanvasTexture(c));
}

export function makeToken(geometry: THREE.BufferGeometry, surroundings: THREE.Texture, colour: THREE.ColorRepresentation): Token {
  const body = new THREE.MeshPhysicalMaterial({ color: colour, roughness: 0.12, metalness: 0.3, clearcoat: 1, clearcoatRoughness: 0.08, envMap: surroundings, envMapIntensity: 1.5, transparent: true });
  const face = new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, toneMapped: false });
  const shadow = new THREE.MeshBasicMaterial({ map: softShadow(), transparent: true, depthWrite: false, depthTest: false, toneMapped: false });
  const group = new THREE.Group(), tile = new THREE.Group();
  const under = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 1.5), shadow), block = new THREE.Mesh(geometry, body), front = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), face);
  under.position.set(0.06, -0.3, -0.5); under.renderOrder = 4; block.renderOrder = 5; front.position.z = 0.004; front.renderOrder = 6;
  tile.add(block, front); group.add(under, tile); group.visible = false;
  group.userData.tile = tile;
  return { group, body, face, shadow, seen: 0, turnX: 0, turnY: 0 };
}

/** Show the tile at a given strength (0 hides it) and turn it (degrees: tipped back, turned aside). */
export function poseToken(t: Token, seen: number, tipDeg: number, asideDeg: number) {
  t.seen = seen; t.group.visible = seen > 0.004;
  t.body.opacity = seen; t.face.opacity = seen; t.shadow.opacity = seen * 0.7;
  (t.group.userData.tile as THREE.Group).rotation.set(THREE.MathUtils.degToRad(-tipDeg), THREE.MathUtils.degToRad(asideDeg), 0);
}

export function dropToken(t: Token) { t.group.removeFromParent(); t.body.dispose(); t.face.dispose(); t.shadow.dispose(); }
