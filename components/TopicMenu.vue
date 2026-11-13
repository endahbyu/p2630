<script setup lang="ts">
// Full-screen overview: every topic as a card, with links to its pages.
import type { Zone } from '~/composables/useSite';
defineProps<{ zones: Zone[]; open: boolean; active: number }>();
defineEmits<{ page: [slug: string]; zone: [index: number] }>();
</script>

<template>
  <Transition name="menu">
    <div v-if="open" class="menu" role="dialog" aria-modal="true" aria-label="All topics">
      <ul class="grid">
        <li v-for="(z, i) in zones" :key="z.id" class="card" :class="{ active: i === active }" :style="{ '--i': i }">
          <button type="button" class="head" @click="$emit('zone', i)">
            <span class="num">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="title">{{ z.title }}</span>
          </button>
          <p class="summary">{{ z.summary }}</p>
          <ul class="pages">
            <li v-for="p in z.pages" :key="p.slug">
              <button type="button" @click="$emit('page', p.slug)">{{ p.title }}<span aria-hidden="true">→</span></button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </Transition>
</template>

<style scoped>
.menu { position: absolute; inset: 0; z-index: var(--z-menu); overflow-y: auto; padding: 5.5rem var(--frame) var(--frame); background: color-mix(in srgb, var(--stage-to) 82%, transparent); backdrop-filter: blur(20px); }
.grid { list-style: none; margin: 0 auto; padding: 0; max-width: 72rem; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
.card { padding: 1.25rem; border-radius: var(--radius); background: var(--glass); border: 1px solid var(--glass-line); display: grid; gap: .75rem; align-content: start; animation: rise .5s var(--ease) both; animation-delay: calc(var(--i) * 50ms); }
.card.active { border-color: color-mix(in srgb, var(--on-dark) 55%, transparent); }
.head { display: flex; align-items: baseline; gap: .75rem; padding: 0; border: 0; background: none; cursor: pointer; text-align: left; }
.num { font-size: .75rem; color: var(--on-dark-muted); font-variant-numeric: tabular-nums; }
.title { font-family: var(--font-display); font-size: 1.25rem; font-weight: 600; }
.summary { font-size: .875rem; color: var(--on-dark-muted); }
.pages { list-style: none; margin: 0; padding: 0; border-top: 1px solid var(--glass-line); }
.pages button { width: 100%; display: flex; justify-content: space-between; gap: 1rem; padding: .75rem 0; border: 0; border-bottom: 1px solid var(--glass-line); background: none; cursor: pointer; text-align: left; font-size: .875rem; transition: padding .25s var(--ease); }
.pages button:hover { padding-left: .5rem; }
.pages li:last-child button { border-bottom: 0; padding-bottom: 0; }
button:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
.menu-enter-active, .menu-leave-active { transition: opacity .35s var(--ease); }
.menu-enter-from, .menu-leave-to { opacity: 0; }
@keyframes rise { from { opacity: 0; transform: translateY(16px); } }
@media (max-width: 1024px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
@media (prefers-reduced-motion: reduce) { .card { animation: none; } }
</style>
