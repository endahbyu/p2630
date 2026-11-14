<script setup lang="ts">
// Token: a thick, tile-shaped piece carrying the topic's icon, floating beside the shape. It is built from
// stacked layers, so it has real depth and shows its edge as it tilts towards the pointer.
// Pressing it enters the topic. While travelling to another topic it grows and flies off past the viewer,
// as if the camera were passing it; the next topic's token then settles in from the same way.
import type { ShapeName } from '~/lib/shapes';
import type { ScrollTravel } from '~/lib/scrollTravel';
const props = defineProps<{ icon: ShapeName; label: string; visible: boolean; travel: ScrollTravel }>();
defineEmits<{ open: [] }>();

const LAYERS = 9; // thickness, in stacked slices
// where the token floats for each shape, as a fraction of the screen from its centre (it tucks in beside the shape's outline)
const SPOT: Record<ShapeName, [number, number]> = { globe: [0.2, 0.14], flask: [0.15, 0.1], bottle: [0.15, 0.02], bulb: [-0.12, 0.2], chain: [0.14, 0.14], target: [0.19, 0.12] };
const anchor = ref<HTMLElement>();
const tilt = reactive({ x: -10, y: -22 });
function onMove(e: PointerEvent) { tilt.x = -10 + (e.clientY / window.innerHeight - 0.5) * -22; tilt.y = -22 + (e.clientX / window.innerWidth - 0.5) * 30; }
let frame = 0;
onMounted(() => {
  window.addEventListener('pointermove', onMove, { passive: true });
  const tick = () => {
    const p = props.travel.state.progress, f = Math.min(1, Math.abs(p - Math.round(p)) * 2); // 0 on a topic, 1 half-way to the next
    const fly = f * f * (3 - 2 * f), s = anchor.value?.style;
    if (s) { s.setProperty('--fly', fly.toFixed(3)); s.setProperty('--seen', Math.max(0, 1 - fly * 1.7).toFixed(3)); }
    frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);
});
onBeforeUnmount(() => { cancelAnimationFrame(frame); window.removeEventListener('pointermove', onMove); });
</script>

<template>
  <div ref="anchor" class="anchor" :class="{ visible }" :style="{ '--sx': SPOT[icon][0], '--sy': SPOT[icon][1] }">
    <div class="flight">
      <button type="button" class="token" :style="{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }" :aria-label="label" :tabindex="visible ? 0 : -1" @click="$emit('open')">
        <span v-for="i in LAYERS" :key="i" class="slice" :style="{ transform: `translateZ(${-i * 1.6}px)` }" aria-hidden="true" />
        <span class="face">
          <TopicIcon :name="icon" class="icon" />
          <svg class="arc" viewBox="0 0 40 40" aria-hidden="true"><path d="M35 22a15 15 0 0 1-9.5 12" /></svg>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.anchor { position: absolute; z-index: var(--z-ui); left: calc(50% + var(--sx, .16) * min(100vw, 150vh)); top: calc(50% + var(--sy, .1) * 100vh); perspective: 700px; opacity: 0; transition: opacity .35s var(--ease); pointer-events: none; }
.anchor.visible { opacity: 1; }
.flight { translate: calc(var(--fly, 0) * 22vw) calc(var(--fly, 0) * 26vh); scale: calc(1 + var(--fly, 0) * 2.6); opacity: var(--seen, 1); filter: drop-shadow(0 22px 26px rgb(0 0 0 / .38)); }
.anchor.visible .token { pointer-events: auto; }
.token { --shape: path('M16 0H48Q64 0 67.7 15.6L80.3 68.4Q84 84 68 84H16Q0 84 0 68V16Q0 0 16 0Z'); position: relative; display: block; width: 84px; height: 84px; padding: 0; border: 0; background: none; color: var(--accent-deep); cursor: pointer; pointer-events: none; transform-style: preserve-3d; transition: transform .3s var(--ease); animation: bob 5s ease-in-out infinite; }
.slice, .face { position: absolute; inset: 0; clip-path: var(--shape); }
.slice { background: color-mix(in srgb, var(--surface) 62%, var(--brand-deep)); }           /* the edge: the same outline, repeated backwards */
.slice:last-of-type { background: color-mix(in srgb, var(--surface) 40%, var(--brand-deep)); }
.face { display: grid; place-items: center; background: linear-gradient(150deg, #fff 0%, var(--surface) 45%, color-mix(in srgb, var(--surface) 82%, var(--brand)) 100%); transition: filter .25s var(--ease); }
.token:hover .face { filter: brightness(1.04); }
.token:focus-visible { outline: none; }
.token:focus-visible .face { box-shadow: inset 0 0 0 3px var(--accent); }
.icon { width: 44px; height: 44px; margin-right: 6px; stroke-width: 1.25; }
.arc { position: absolute; left: 18px; top: 20px; width: 44px; height: 44px; fill: none; stroke: color-mix(in srgb, var(--accent) 55%, var(--brand)); stroke-width: 3.6; stroke-linecap: round; }
@keyframes bob { 50% { translate: 0 -6px; } }
@media (max-width: 800px) { .anchor { left: auto; right: var(--frame); top: auto; bottom: calc(var(--frame) + 8rem); scale: .8; transform-origin: right bottom; } }
@media (prefers-reduced-motion: reduce) { .token { animation: none; } .flight { translate: none; scale: none; } }
</style>
