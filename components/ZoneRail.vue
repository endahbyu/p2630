<script setup lang="ts">
// Navigation rail: one marker per topic and a line that fills up to the active one.
// Vertical on the left on wide screens, horizontal along the bottom on phones.
import type { Zone } from '~/composables/useSite';
const props = defineProps<{ zones: Zone[]; active: number }>();
defineEmits<{ select: [index: number] }>();
const fill = computed(() => (props.zones.length > 1 ? props.active / (props.zones.length - 1) : 0));
</script>

<template>
  <nav class="rail" aria-label="Topics" :style="{ '--fill': fill }">
    <span class="line" aria-hidden="true"><span class="line-fill" /></span>
    <button v-for="(z, i) in zones" :key="z.id" type="button" class="stop" :class="{ active: i === active, passed: i < active }" :aria-current="i === active ? 'true' : undefined" @click="$emit('select', i)">
      <span class="dot">{{ i + 1 }}</span>
      <span class="name">{{ z.title }}</span>
    </button>
  </nav>
</template>

<style scoped>
.rail { position: absolute; z-index: var(--z-ui); left: var(--frame); top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; gap: 1.5rem; }
.line { position: absolute; left: 1rem; top: 1rem; bottom: 1rem; width: 1px; background: var(--glass-line); }
.line-fill { position: absolute; inset: 0; background: var(--on-dark); transform-origin: top; transform: scaleY(var(--fill)); transition: transform var(--duration) var(--ease); }
.stop { position: relative; display: flex; align-items: center; gap: .75rem; padding: 0; border: 0; background: none; cursor: pointer; text-align: left; }
.dot { width: 2rem; height: 2rem; border-radius: 50%; display: grid; place-items: center; font-size: .75rem; font-variant-numeric: tabular-nums; background: var(--stage-to); border: 1px solid var(--glass-line); color: var(--on-dark-muted); transition: background var(--duration) var(--ease), color var(--duration) var(--ease), border-color var(--duration) var(--ease), transform var(--duration) var(--ease); }
.name { font-size: .8125rem; color: var(--on-dark-muted); opacity: 0; transform: translateX(-6px); transition: opacity .3s var(--ease), transform .3s var(--ease); white-space: nowrap; pointer-events: none; }
.stop:hover .name, .stop:focus-visible .name, .stop.active .name { opacity: 1; transform: none; }
.stop.active .name { color: var(--on-dark); }
.stop.passed .dot { border-color: var(--on-dark); color: var(--on-dark); }
.stop.active .dot { background: var(--on-dark); color: var(--stage-to); border-color: var(--on-dark); transform: scale(1.15); }
.stop:focus-visible { outline: none; }
.stop:focus-visible .dot { outline: 2px solid var(--accent); outline-offset: 3px; }

@media (max-width: 800px) {
  .rail { left: 50%; top: auto; bottom: calc(var(--frame) + 3.75rem); transform: translateX(-50%); flex-direction: row; gap: 1rem; }
  .line { left: 1rem; right: 1rem; top: 1rem; bottom: auto; width: auto; height: 1px; }
  .line-fill { transform-origin: left; transform: scaleX(var(--fill)); }
  .name { display: none; }
}
</style>
