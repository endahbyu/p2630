// Shader for every particle on the stage. All motion is computed here, on the graphics card:
// travelling between two shapes, a slow drift, yielding to the pointer, scattering on click,
// and a depth-of-field blur (particles away from the focus distance grow into soft discs).

export const vertexShader = /* glsl */ `
uniform float uTime;
uniform float uMorph;      // 0 → 1 while travelling from aFrom to aTo
uniform float uStagger;    // how spread out the departure times are
uniform float uSpread;     // how far the cloud breaks apart mid-way
uniform float uDrift;      // idle wobble
uniform float uSize;       // particle diameter in scene units
uniform float uPixels;     // converts scene units at distance 1 into pixels
uniform float uFocus;      // distance from the camera that is perfectly sharp
uniform float uAperture;   // how quickly things blur away from the focus distance
uniform float uAspect;
uniform vec2 uPointer;     // pointer position, -1..1
uniform float uPointerOn;
uniform float uRadius;     // pointer reach, in screen heights
uniform float uPush;
uniform vec2 uBurst;       // last click position, -1..1
uniform float uBurstAge;   // seconds since the last click
uniform float uDepthFade;  // 1 = dim the far side of the shape, 0 = leave brightness alone

attribute vec3 aFrom;
attribute vec3 aTo;
attribute vec4 aSeed;      // four random numbers per particle

varying float vBlur;
varying float vAlpha;
varying float vTone;

float easeInOut(float t) { return t < 0.5 ? 4.0 * t * t * t : 1.0 - pow(-2.0 * t + 2.0, 3.0) / 2.0; }

void main() {
  // travel between shapes: each particle leaves at its own moment and swings outwards mid-way
  float t = clamp(uMorph * (1.0 + uStagger) - aSeed.x * uStagger, 0.0, 1.0);
  float e = easeInOut(t);
  float mid = sin(e * 3.14159265);
  vec3 away = normalize(aSeed.yzw * 2.0 - 1.0);
  vec3 p = mix(aFrom, aTo, e) * (1.0 + mid * 0.15) + away * mid * uSpread;

  // idle drift
  p += uDrift * vec3(sin(uTime * 0.6 + aSeed.y * 40.0), cos(uTime * 0.5 + aSeed.z * 40.0), sin(uTime * 0.7 + aSeed.w * 40.0));

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vec4 clip = projectionMatrix * mv;
  vec2 ndc = clip.xy / clip.w;
  float reach = -mv.z * 0.32; // keeps pushes the same size on screen at any depth

  // pointer: push particles away from it
  vec2 d = (ndc - uPointer) * vec2(uAspect, 1.0);
  float dist = length(d);
  float f = smoothstep(uRadius, 0.0, dist) * uPointerOn;
  f *= f; // soft edge: particles near the rim barely move
  mv.xy += (dist > 0.0001 ? d / dist : vec2(0.0)) * f * uPush * reach * (0.4 + aSeed.z * 1.2);
  mv.z += f * uPush * reach * (aSeed.x - 0.5) * 2.0;

  // click: a burst that shoots out and settles back
  vec2 b = (ndc - uBurst) * vec2(uAspect, 1.0);
  float bl = length(b);
  float k = (1.0 - exp(-uBurstAge * 12.0)) * exp(-uBurstAge * 1.6) * smoothstep(uRadius * 1.5, 0.0, bl);
  mv.xy += (bl > 0.0001 ? b / bl : vec2(0.0)) * k * reach * 0.45 * (0.3 + aSeed.y);
  mv.z += k * (aSeed.z - 0.5) * 1.2;

  gl_Position = projectionMatrix * mv;

  // size and depth of field
  float depth = max(-mv.z, 0.1);
  float base = uSize * (0.6 + aSeed.w * 0.8);
  float blur = abs(depth - uFocus) * uAperture;
  gl_PointSize = clamp((base + blur) * uPixels / depth, 1.0, 96.0);
  vBlur = blur / (base + blur);
  vAlpha = max(pow(base / (base + blur), 1.5), 0.05) * (0.8 + 0.2 * sin(uTime * (1.0 + aSeed.y * 2.0) + aSeed.z * 50.0)); // dimmer when blurred, plus a slow twinkle
  vAlpha *= mix(1.0, mix(1.0, 0.22, smoothstep(-1.2, 1.2, depth - uFocus)), uDepthFade);
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
  float sharp = exp(-r * r * 5.0);                                          // in focus: bright core with a soft glow
  float disc = smoothstep(1.0, 0.86, r) * (0.7 + 0.3 * smoothstep(0.4, 1.0, r)); // out of focus: flat disc with a brighter rim
  float a = mix(sharp, disc, vBlur) * vAlpha * uOpacity;
  gl_FragColor = vec4(mix(uColor, uAccent, step(0.72, vTone)), a);
}
`;
