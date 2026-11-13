<script setup lang="ts">
// Cursor companion: a ring and a short hint that trail the pointer over the stage.
// It hides over buttons, panels and menus, and never appears on touch screens.
const props = defineProps<{ hint: string; enabled: boolean }>();

const el = ref<HTMLElement>();
const shown = ref(false);
let x = 0, y = 0, tx = 0, ty = 0, frame = 0, seen = false;

function onMove(e: PointerEvent) {
  if (e.pointerType !== 'mouse') return;
  tx = e.clientX; ty = e.clientY;
  if (!seen) { seen = true; x = tx; y = ty; }
  const over = e.target as Element | null;
  shown.value = !!over && over.tagName === 'CANVAS'; // only over the stage itself
}
const onLeave = () => { shown.value = false; };

onMounted(() => {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  window.addEventListener('pointermove', onMove, { passive: true });
  document.documentElement.addEventListener('pointerleave', onLeave);
  const tick = () => {
    x += (tx - x) * 0.16; y += (ty - y) * 0.16; // trail behind the pointer
    if (el.value) el.value.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
    frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);
});
onBeforeUnmount(() => { cancelAnimationFrame(frame); window.removeEventListener('pointermove', onMove); document.documentElement.removeEventListener('pointerleave', onLeave); });
</script>

<template>
  <div ref="el" class="cursor" :class="{ shown: shown && props.enabled }" aria-hidden="true">
    <span class="ring" />
    <Transition name="swap" mode="out-in"><span :key="hint" class="hint">{{ hint }}</span></Transition>
  </div>
</template>

<style scoped>
.cursor { position: fixed; left: 0; top: 0; z-index: var(--z-bar); pointer-events: none; opacity: 0; transition: opacity .3s var(--ease); }
.cursor.shown { opacity: 1; }
.ring { position: absolute; left: -1.5rem; top: -1.5rem; width: 3rem; height: 3rem; border-radius: 50%; border: 1px solid color-mix(in srgb, var(--on-dark) 55%, transparent); scale: .6; transition: scale .4s var(--ease); }
.cursor.shown .ring { scale: 1; }
.hint { position: absolute; left: 2rem; top: -.6rem; font-size: .6875rem; line-height: 1.25; letter-spacing: .04em; color: var(--on-dark); white-space: pre-line; width: max-content; max-width: 9rem; }
.swap-enter-active, .swap-leave-active { transition: opacity .2s var(--ease); }
.swap-enter-from, .swap-leave-to { opacity: 0; }
</style>
