<script setup lang="ts">
// The tile itself: a thick, tile-shaped piece carrying a topic's icon. It is built from stacked layers,
// so it has real depth and shows its edge when it is turned. Used for the topic's token and for the
// page tokens inside a topic.
import type { ShapeName } from '~/lib/shapes';
defineProps<{ icon: ShapeName; label: string; turnX: number; turnY: number; reachable?: boolean }>();
defineEmits<{ press: [] }>();
const LAYERS = 9; // thickness, in stacked slices
</script>

<template>
  <button type="button" class="token" :style="{ transform: `rotateX(${turnX}deg) rotateY(${turnY}deg)` }" :aria-label="label" :tabindex="reachable === false ? -1 : 0" @click="$emit('press')">
    <span v-for="i in LAYERS" :key="i" class="slice" :style="{ transform: `translateZ(${-i * 1.6}px)` }" aria-hidden="true" />
    <span class="face">
      <TopicIcon :name="icon" class="icon" />
      <svg class="arc" viewBox="0 0 40 40" aria-hidden="true"><path d="M35 22a15 15 0 0 1-9.5 12" /></svg>
    </span>
  </button>
</template>

<style scoped>
.token { --shape: path('M16 0H48Q64 0 67.7 15.6L80.3 68.4Q84 84 68 84H16Q0 84 0 68V16Q0 0 16 0Z'); position: relative; display: block; width: 84px; height: 84px; padding: 0; border: 0; background: none; color: var(--accent-deep); cursor: pointer; transform-style: preserve-3d; transition: transform .3s var(--ease); }
.slice, .face { position: absolute; inset: 0; clip-path: var(--shape); }
.slice { background: color-mix(in srgb, var(--surface) 62%, var(--brand-deep)); }           /* the edge: the same outline, repeated backwards */
.slice:last-of-type { background: color-mix(in srgb, var(--surface) 40%, var(--brand-deep)); }
.face { display: grid; place-items: center; background: linear-gradient(150deg, #fff 0%, var(--surface) 45%, color-mix(in srgb, var(--surface) 82%, var(--brand)) 100%); transition: filter .25s var(--ease); }
.token:hover .face { filter: brightness(1.04); }
.token:focus-visible { outline: none; }
.token:focus-visible .face { box-shadow: inset 0 0 0 3px var(--accent); }
.icon { width: 44px; height: 44px; margin-right: 6px; stroke-width: 1.25; }
.arc { position: absolute; left: 18px; top: 20px; width: 44px; height: 44px; fill: none; stroke: color-mix(in srgb, var(--accent) 55%, var(--brand)); stroke-width: 3.6; stroke-linecap: round; }
</style>
