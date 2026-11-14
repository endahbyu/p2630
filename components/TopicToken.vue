<script setup lang="ts">
// Token: the topic's tile (TokenTile.vue), floating beside the shape and tilting towards the pointer.
// Pressing it enters the topic. While travelling to another topic it grows and flies off past the viewer,
// as if the camera were passing it; the next topic's token then settles in from the same way.
import type { ShapeName } from '~/lib/shapes';
import type { ScrollTravel } from '~/lib/scrollTravel';
const props = defineProps<{ icon: ShapeName; label: string; visible: boolean; travel: ScrollTravel }>();
defineEmits<{ open: [] }>();

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
      <TokenTile class="bobbing" :icon="icon" :label="label" :turn-x="tilt.x" :turn-y="tilt.y" :reachable="visible" @press="$emit('open')" />
    </div>
  </div>
</template>

<style scoped>
.anchor { position: absolute; z-index: var(--z-ui); left: calc(50% + var(--sx, .16) * min(100vw, 150vh)); top: calc(50% + var(--sy, .1) * 100vh); perspective: 700px; opacity: 0; transition: opacity .35s var(--ease); pointer-events: none; }
.anchor.visible { opacity: 1; }
.flight { translate: calc(var(--fly, 0) * 22vw) calc(var(--fly, 0) * 26vh); scale: calc(1 + var(--fly, 0) * 2.6); opacity: var(--seen, 1); filter: drop-shadow(0 22px 26px rgb(0 0 0 / .38)); }
.bobbing { pointer-events: none; animation: bob 5s ease-in-out infinite; }
.anchor.visible .bobbing { pointer-events: auto; }
@keyframes bob { 50% { translate: 0 -6px; } }
@media (max-width: 800px) { .anchor { left: auto; right: var(--frame); top: auto; bottom: calc(var(--frame) + 8rem); scale: .8; transform-origin: right bottom; } }
@media (prefers-reduced-motion: reduce) { .bobbing { animation: none; } .flight { translate: none; scale: none; } }
</style>
