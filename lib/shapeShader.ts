// Shader for the shape's particles. Each particle is a tiny dot of a fixed size on screen.
// Dots away from the focus distance grow into soft, tinted discs (bokeh), and each dot's
// brightness comes from the lighting worked out per particle on the CPU (aLight).

export const shapeVertex = /* glsl */ `
uniform float uDot;        // diameter of a sharp dot, in device pixels
uniform float uBlur;       // extra diameter of a fully blurred dot, in device pixels
uniform float uFocus;      // distance from the camera that is perfectly sharp
uniform float uRange;      // distance over which blur builds up

attribute float aLight;    // 0..1 brightness
attribute vec4 aSeed;

varying float vLight;
varying float vBlur;
varying float vSeed;

void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float away = -mv.z - uFocus;
  float blur = smoothstep(0.0, uRange, abs(away));
  blur *= away < 0.0 ? 1.0 : 0.12;                      // dots nearer than the focus blur fully (they fly past while travelling); the far side stays crisp
  gl_PointSize = uDot * (0.8 + aSeed.w * 0.5) + blur * uBlur * (0.6 + aSeed.x * 0.6);
  vLight = aLight; vBlur = blur; vSeed = aSeed.y;
}
`;

export const shapeFragment = /* glsl */ `
uniform vec3 uLit;         // colour of a fully lit dot
uniform vec3 uShade;       // colour of a dot in shadow
uniform vec3 uBokeh;       // tint of blurred dots

varying float vLight;
varying float vBlur;
varying float vSeed;

void main() {
  float r = length(gl_PointCoord - 0.5) * 2.0;
  if (r > 1.0) discard;
  float sharp = smoothstep(1.0, 0.45, r);                                         // a crisp dot with a soft edge
  float disc = smoothstep(1.0, 0.88, r) * (0.65 + 0.35 * smoothstep(0.3, 1.0, r)); // a flat disc with a brighter rim
  float shape = mix(sharp, disc, vBlur);
  vec3 colour = mix(mix(uShade, uLit, vLight), mix(uBokeh, uLit, step(0.6, vSeed) * 0.6), vBlur * 0.85);
  float alpha = shape * mix(0.12 + 0.88 * vLight, 0.5 * min(1.0, vLight * 3.0), vBlur);                   // shadowed dots are faint; blurred ones translucent
  gl_FragColor = vec4(colour, alpha * step(0.004, vLight));
}
`;
