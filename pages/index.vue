<script setup lang="ts">
// Review page: shows the particle stage and lets you switch between the shapes that exist so far.
import type { ShapeName } from '~/lib/shapes';

const shape = ref<ShapeName>('sphere');
const options: { id: ShapeName; label: string }[] = [
  { id: 'sphere', label: 'Sphere' },
  { id: 'flask', label: 'Flask' },
];
</script>

<template>
  <main class="page">
    <ParticleStage :shape="shape" />
    <header class="bar">
      <p class="name">P2630</p>
      <p class="note">Preview build</p>
    </header>
    <nav class="shapes" aria-label="Shape">
      <button v-for="o in options" :key="o.id" type="button" :aria-pressed="shape === o.id" @click="shape = o.id">{{ o.label }}</button>
    </nav>
  </main>
</template>

<style scoped>
.page { position: relative; height: 100%; min-height: 100dvh; overflow: hidden; }
.bar { position: absolute; top: var(--frame); left: var(--frame); right: var(--frame); display: flex; justify-content: space-between; pointer-events: none; }
.name { font-family: var(--font-display); font-weight: 700; letter-spacing: .08em; }
.note { color: var(--text-muted); font-size: .8125rem; }
.shapes { position: absolute; left: 50%; bottom: var(--frame); transform: translateX(-50%); display: flex; gap: .25rem; padding: .25rem; background: color-mix(in srgb, var(--stage-to) 72%, transparent); backdrop-filter: blur(12px); border: 1px solid color-mix(in srgb, var(--on-dark) 18%, transparent); border-radius: 999px; }
.shapes button { border: 0; background: transparent; padding: .5rem 1rem; border-radius: 999px; font-size: .8125rem; color: color-mix(in srgb, var(--on-dark) 70%, transparent); cursor: pointer; transition: background var(--duration) var(--ease), color var(--duration) var(--ease); }
.shapes button[aria-pressed='true'] { background: color-mix(in srgb, var(--on-dark) 14%, transparent); color: var(--on-dark); }
.shapes button:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
</style>
