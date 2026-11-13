<script setup lang="ts">
// Opening screen: a ring fills while content loads, then the screen opens up from the centre to reveal the stage.
const props = defineProps<{ progress: number; label: string; done: boolean }>();
const R = 46, LENGTH = 2 * Math.PI * R;
const dash = computed(() => LENGTH * (1 - Math.min(1, props.progress)));
</script>

<template>
  <div class="loader" :class="{ done }" role="status" :aria-hidden="done">
    <div class="mark">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle class="track" cx="50" cy="50" :r="R" />
        <circle class="fill" cx="50" cy="50" :r="R" :stroke-dasharray="LENGTH" :stroke-dashoffset="dash" />
      </svg>
      <span class="count">{{ Math.round(Math.min(1, progress) * 100) }}</span>
    </div>
    <p class="label">{{ label }}</p>
  </div>
</template>

<style scoped>
.loader { position: absolute; inset: 0; z-index: var(--z-loader); display: grid; place-content: center; justify-items: center; gap: 1.25rem; background: var(--surface); color: var(--text);
  clip-path: circle(150% at 50% 50%); transition: clip-path 1.1s var(--ease), visibility 0s 1.1s; }
.loader.done { clip-path: circle(0% at 50% 50%); visibility: hidden; pointer-events: none; }
.loader.done .mark, .loader.done .label { opacity: 0; transition: opacity .3s var(--ease); }
.mark { position: relative; width: 7.5rem; height: 7.5rem; display: grid; place-items: center; }
svg { position: absolute; inset: 0; transform: rotate(-90deg); }
circle { fill: none; stroke-width: 1.5; }
.track { stroke: color-mix(in srgb, var(--text) 12%, transparent); }
.fill { stroke: var(--accent-deep); stroke-linecap: round; transition: stroke-dashoffset .4s var(--ease); }
.count { font-family: var(--font-display); font-size: 1.5rem; font-variant-numeric: tabular-nums; }
.label { font-size: .75rem; letter-spacing: .14em; text-transform: uppercase; color: var(--text-muted); }
@media (prefers-reduced-motion: reduce) { .loader { transition: opacity .3s, visibility 0s .3s; } .loader.done { clip-path: none; opacity: 0; } }
</style>
