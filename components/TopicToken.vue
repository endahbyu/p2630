<script setup lang="ts">
// Token: a small tile with the topic's icon, floating beside the shape. It tilts towards the pointer
// and enters the topic when pressed. While travelling to another topic it grows and flies off past the
// viewer, as if the camera were passing it; the next topic's token then settles in from the same way.
import type { ShapeName } from '~/lib/shapes';
import type { ScrollTravel } from '~/lib/scrollTravel';
const props = defineProps<{ icon: ShapeName; label: string; visible: boolean; travel: ScrollTravel }>();
defineEmits<{ open: [] }>();

const anchor = ref<HTMLElement>();
const tilt = reactive({ x: 0, y: 0 });
function onMove(e: PointerEvent) { tilt.x = (e.clientY / window.innerHeight - 0.5) * -18; tilt.y = (e.clientX / window.innerWidth - 0.5) * 24; }
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
  <div ref="anchor" class="anchor" :class="{ visible }">
    <div class="flight">
      <button type="button" class="token" :style="{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }" :aria-label="label" :tabindex="visible ? 0 : -1" @click="$emit('open')">
        <TopicIcon :name="icon" class="icon" />
        <span class="ring" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.anchor { position: absolute; z-index: var(--z-ui); left: calc(50% + min(16vw, 13rem)); top: calc(50% + min(9vh, 5rem)); perspective: 600px; opacity: 0; transition: opacity .35s var(--ease); pointer-events: none; }
.anchor.visible { opacity: 1; }
.flight { translate: calc(var(--fly, 0) * 22vw) calc(var(--fly, 0) * 26vh); scale: calc(1 + var(--fly, 0) * 2.6); opacity: var(--seen, 1); }
.anchor.visible .token { pointer-events: auto; }
.token { position: relative; width: 5.25rem; height: 5.25rem; display: grid; place-items: center; border-radius: 1.5rem .4rem 1.5rem 1.5rem; border: 1px solid color-mix(in srgb, var(--surface) 70%, transparent); background: linear-gradient(145deg, var(--surface), color-mix(in srgb, var(--surface) 78%, var(--accent-deep))); color: var(--accent-deep); cursor: pointer; pointer-events: none; box-shadow: 0 18px 40px rgb(0 0 0 / .35), inset 0 1px 0 rgb(255 255 255 / .6); transition: transform .25s var(--ease), box-shadow .25s var(--ease); animation: bob 5s ease-in-out infinite; }
.token:hover { box-shadow: 0 24px 50px rgb(0 0 0 / .45), inset 0 1px 0 rgb(255 255 255 / .6); }
.token:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
.icon { width: 2.5rem; height: 2.5rem; }
.ring { position: absolute; inset: .7rem; border-radius: 50%; border: 2px solid transparent; border-bottom-color: var(--accent-deep); opacity: .35; transform: rotate(-35deg); }
@keyframes bob { 50% { translate: 0 -6px; } }
@media (max-width: 800px) { .anchor { left: auto; right: var(--frame); top: auto; bottom: calc(var(--frame) + 8rem); } .token { width: 4.25rem; height: 4.25rem; } .icon { width: 2rem; height: 2rem; } }
@media (prefers-reduced-motion: reduce) { .token { animation: none; } .flight { translate: none; scale: none; } }
</style>
