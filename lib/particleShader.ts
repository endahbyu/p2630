// Shader for every particle on the stage.
// It blends each particle between two shapes (aFrom → aTo), adds the offset from the pointer physics,
// a slow drift, and a depth-of-field blur (particles away from the focus distance grow into soft discs).

export const vertexShader = /* glsl */ `
uniform float uTime;
uniform float uMorph;      // 0 → 1 while travelling from aFrom to aTo
uniform float uStagger;    // how spread out the departure times are
uniform float uSpread;     // how far the cloud breaks apart mid-way
uniform float uDir;        // travel direction (+1 / -1): which way the cloud swirls mid-way
uniform float uDrift;      // idle wobble
uniform float uSize;       // particle diameter in scene units
uniform float uPixels;     // converts scene units at distance 1 into pixels
uniform float uFocus;      // distance from the camera that is perfectly sharp
uniform float uAperture;   // how quickly things blur away from the focus distance
uniform float uDepthFade;  // 1 = dim the far side of the shape, 0 = leave brightness alone
uniform float uAspect;
uniform vec2 uPointer;     // pointer position, -1..1 (used by the background field only)
uniform float uPointerOn;
uniform float uRadius;
uniform float uPush;

attribute vec3 aFrom;
attribute vec3 aTo;
attribute vec2 aShade;     // brightness in the "from" and "to" shape
attribute vec3 aOffset;    // displacement from the pointer physics
attribute vec4 aSeed;      // four random numbers per particle

varying float vBlur;
varying float vAlpha;
varying float vTone;

float easeInOut(float t) { return t < 0.5 ? 4.0 * t * t * t : 1.0 - pow(-2.0 * t + 2.0, 3.0) / 2.0; }

void main() {
  // travel between shapes: each particle leaves at its own moment, swings outwards and swirls mid-way
  float t = clamp(uMorph * (1.0 + uStagger) - aSeed.x * uStagger, 0.0, 1.0);
  float e = easeInOut(t);
  float mid = sin(e * 3.14159265);
  vec3 away = normalize(aSeed.yzw * 2.0 - 1.0);
  vec3 p = mix(aFrom, aTo, e) * (1.0 + mid * 0.2) + away * mid * uSpread;
  float turn = uDir * mid * (0.5 + aSeed.x * 1.1);
  p.xz = mat2(cos(turn), -sin(turn), sin(turn), cos(turn)) * p.xz;
  p += aOffset;

  // idle drift
  p += uDrift * vec3(sin(uTime * 0.6 + aSeed.y * 40.0), cos(uTime * 0.5 + aSeed.z * 40.0), sin(uTime * 0.7 + aSeed.w * 40.0));

  vec4 mv = modelViewMatrix * vec4(p, 1.0);

  // background field: part around the pointer
  vec4 clip = projectionMatrix * mv;
  vec2 d = (clip.xy / clip.w - uPointer) * vec2(uAspect, 1.0);
  float dist = length(d);
  float f = smoothstep(uRadius, 0.0, dist) * uPointerOn;
  f *= f;
  float reach = -mv.z * 0.32;
  mv.xy += (dist > 0.0001 ? d / dist : vec2(0.0)) * f * uPush * reach * (0.4 + aSeed.z * 1.2);
  mv.z += f * uPush * reach * (aSeed.x - 0.5) * 2.0;

  gl_Position = projectionMatrix * mv;

  // size and depth of field
  float depth = max(-mv.z, 0.1);
  float base = uSize * (0.55 + aSeed.w * 0.9);
  float blur = abs(depth - uFocus) * uAperture + mid * uSize * 1.5; // particles in transit go soft
  gl_PointSize = clamp((base + blur) * uPixels / depth, 1.0, 96.0);
  vBlur = blur / (base + blur);
  vAlpha = max(pow(base / (base + blur), 1.5), 0.05) * (0.8 + 0.2 * sin(uTime * (1.0 + aSeed.y * 2.0) + aSeed.z * 50.0)); // dimmer when blurred, plus a slow twinkle
  vAlpha *= mix(aShade.x, aShade.y, e);
  vAlpha *= mix(1.0, mix(1.0, 0.3, smoothstep(-1.2, 1.2, depth - uFocus)), uDepthFade);
  vTone = aSeed.x;
}
`;

export const fragmentShader = /* glsl */ `
uniform vec3 uColor;
uniform vec3 uAccent;
uniform float uOpacity;

varying float vBlur;
varying float vAlpha;
varying float vTone;

void main() {
  float r = length(gl_PointCoord - 0.5) * 2.0;
  if (r > 1.0) discard;
  float sharp = smoothstep(1.0, 0.55, r);                                          // in focus: a solid dot with a soft edge
  float disc = smoothstep(1.0, 0.86, r) * (0.7 + 0.3 * smoothstep(0.4, 1.0, r));   // out of focus: flat disc with a brighter rim
  float a = mix(sharp, disc, vBlur) * vAlpha * uOpacity;
  gl_FragColor = vec4(mix(uColor, uAccent, step(0.78, vTone)), a);
}
`;
