<script setup lang="ts">
// Token: a small glass tile with the topic's icon, floating beside the shape. It tilts towards the pointer
// and opens the topic when pressed. It fades out while travelling between topics.
import type { ShapeName } from '~/lib/shapes';
defineProps<{ icon: ShapeName; label: string; visible: boolean }>();
defineEmits<{ open: [] }>();

const tilt = reactive({ x: 0, y: 0 });
function onMove(e: PointerEvent) { tilt.x = (e.clientY / window.innerHeight - 0.5) * -18; tilt.y = (e.clientX / window.innerWidth - 0.5) * 24; }
onMounted(() => window.addEventListener('pointermove', onMove, { passive: true }));
onBeforeUnmount(() => window.removeEventListener('pointermove', onMove));
</script>

<template>
  <div class="anchor" :class="{ visible }">
    <button type="button" class="token" :style="{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }" :aria-label="label" :tabindex="visible ? 0 : -1" @click="$emit('open')">
      <TopicIcon :name="icon" class="icon" />
      <span class="ring" aria-hidden="true" />
    </button>
  </div>
</template>

<style scoped>
.anchor { position: absolute; z-index: var(--z-ui); left: calc(50% + min(16vw, 13rem)); top: calc(50% + min(9vh, 5rem)); perspective: 600px; opacity: 0; transform: translateY(14px) scale(.9); transition: opacity .35s var(--ease), transform .5s var(--ease); pointer-events: none; }
.anchor.visible { opacity: 1; transform: none; pointer-events: auto; }
.token { position: relative; width: 5.25rem; height: 5.25rem; display: grid; place-items: center; border-radius: 1.5rem .4rem 1.5rem 1.5rem; border: 1px solid color-mix(in srgb, var(--surface) 70%, transparent); background: linear-gradient(145deg, var(--surface), color-mix(in srgb, var(--surface) 78%, var(--accent-deep))); color: var(--accent-deep); cursor: pointer; box-shadow: 0 18px 40px rgb(0 0 0 / .35), inset 0 1px 0 rgb(255 255 255 / .6); transition: transform .25s var(--ease), box-shadow .25s var(--ease); animation: bob 5s ease-in-out infinite; }
.token:hover { box-shadow: 0 24px 50px rgb(0 0 0 / .45), inset 0 1px 0 rgb(255 255 255 / .6); }
.token:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
.icon { width: 2.5rem; height: 2.5rem; }
.ring { position: absolute; inset: .7rem; border-radius: 50%; border: 2px solid transparent; border-bottom-color: var(--accent-deep); opacity: .35; transform: rotate(-35deg); }
@keyframes bob { 50% { translate: 0 -6px; } }
@media (max-width: 800px) { .anchor { left: auto; right: var(--frame); top: auto; bottom: calc(var(--frame) + 7.5rem); } .token { width: 4.25rem; height: 4.25rem; } .icon { width: 2rem; height: 2rem; } }
@media (prefers-reduced-motion: reduce) { .token { animation: none; } }
</style>
