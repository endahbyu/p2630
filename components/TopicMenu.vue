<script setup lang="ts">
// Topic overview. A light panel slides in from the right and covers half the screen; the stage stays
// visible on the left, softened. The panel is a grid with one cell per topic: a large icon and the
// topic's name. Pointing at a cell (or tapping it) swaps the icon for the list of that topic's pages.
import type { Zone } from '~/composables/useSite';

const props = defineProps<{ zones: Zone[]; open: boolean; active: number; closeLabel: string }>();
const emit = defineEmits<{ page: [slug: string]; zone: [index: number]; close: [] }>();

const shown = ref<number | null>(null); // which cell shows its pages
watch(() => props.open, () => { shown.value = null; });
const canHover = () => window.matchMedia('(hover: hover)').matches;
function onCell(i: number) { // touch: first tap opens the list, a tap on the open cell goes to the topic
  if (canHover() || shown.value === i) emit('zone', i); else shown.value = i;
}
</script>

<template>
  <Transition name="veil">
    <div v-if="open" class="veil" @click="emit('close')" />
  </Transition>
  <Transition name="menu">
    <div v-if="open" class="menu" role="dialog" aria-modal="true" aria-label="All topics">
      <button type="button" class="close" :aria-label="closeLabel" @click="emit('close')"><span aria-hidden="true">×</span></button>
      <ul class="grid" :style="{ '--rows': Math.ceil(zones.length / 2) }">
        <li v-for="(z, i) in zones" :key="z.id" class="cell" :class="{ current: i === active, listing: shown === i }" :style="{ '--i': i }"
            @mouseenter="shown = i" @mouseleave="shown = null" @focusin="shown = i">
          <button type="button" class="face" :tabindex="shown === i ? -1 : 0" @click="onCell(i)">
            <TopicIcon :name="z.shape" class="icon" />
            <span class="name">{{ z.title }}</span>
          </button>
          <div class="pages" :aria-hidden="shown !== i">
            <button type="button" class="title" :tabindex="shown === i ? 0 : -1" @click="emit('zone', i)">{{ z.title }}</button>
            <ul>
              <li v-for="p in z.pages" :key="p.slug">
                <button type="button" :tabindex="shown === i ? 0 : -1" @click="emit('page', p.slug)">{{ p.title }}</button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </Transition>
</template>

<style scoped>
.veil { position: absolute; inset: 0; z-index: var(--z-menu); background: color-mix(in srgb, var(--stage-to) 28%, transparent); backdrop-filter: blur(7px); cursor: pointer; }
.menu { position: absolute; z-index: var(--z-menu); top: .5rem; right: .5rem; bottom: .5rem; width: calc(50% - .5rem); border-radius: var(--radius); background: var(--surface); color: var(--text); box-shadow: 0 30px 90px rgb(0 0 0 / .35); }
.close { position: absolute; right: calc(100% + .75rem); top: 50%; translate: 0 -50%; width: 2.75rem; height: 2.75rem; display: grid; place-items: center; border: 0; border-radius: .6rem; background: var(--surface); color: var(--text); font-size: 1.25rem; line-height: 1; cursor: pointer; transition: transform .25s var(--ease), background .25s var(--ease), color .25s var(--ease); }
.close:hover { background: var(--accent-deep); color: var(--on-dark); transform: rotate(90deg); }
.grid { list-style: none; margin: 0; padding: 0; height: 100%; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: repeat(var(--rows), 1fr); border-radius: inherit; overflow: hidden; }
.cell { position: relative; display: grid; border-bottom: 1px solid color-mix(in srgb, var(--text) 9%, transparent); animation: appear .6s var(--ease) both; animation-delay: calc(.28s + var(--i) * 70ms); }
.cell:nth-child(odd) { border-right: 1px solid color-mix(in srgb, var(--text) 9%, transparent); }
.cell:nth-last-child(-n + 2) { border-bottom: 0; }
.face, .pages { grid-area: 1 / 1; transition: opacity .3s var(--ease), transform .4s var(--ease); }
.face { display: grid; place-content: center; justify-items: center; gap: 1.1rem; padding: 1rem; border: 0; background: none; color: inherit; cursor: pointer; }
.icon { width: clamp(3rem, 6vw, 4.75rem); height: clamp(3rem, 6vw, 4.75rem); color: var(--accent-deep); stroke-width: .9; }
.name { font-size: .8125rem; font-weight: 700; letter-spacing: .01em; text-align: center; text-wrap: balance; }
.cell.current .name::after { content: ''; display: block; width: 1.25rem; height: 2px; margin: .5rem auto 0; border-radius: 2px; background: var(--accent-deep); }
.pages { display: flex; flex-direction: column; justify-content: space-between; padding: 1.25rem 1.5rem; opacity: 0; transform: translateY(8px); pointer-events: none; background: color-mix(in srgb, var(--accent-deep) 5%, var(--surface)); }
.pages .title { align-self: center; border: 0; background: none; color: var(--text); font-size: .8125rem; font-weight: 700; cursor: pointer; }
.pages ul { list-style: none; margin: 0; padding: 0; }
.pages li button { width: 100%; padding: .55rem 0; border: 0; border-top: 1px solid color-mix(in srgb, var(--text) 10%, transparent); background: none; color: var(--text-muted); font-size: .8125rem; text-align: left; cursor: pointer; transition: color .2s var(--ease), padding .25s var(--ease); }
.pages li button:hover { color: var(--accent-deep); padding-left: .4rem; }
.cell.listing .face { opacity: 0; transform: translateY(-8px); pointer-events: none; }
.cell.listing .pages { opacity: 1; transform: none; pointer-events: auto; }
button:focus-visible { outline: 2px solid var(--accent-deep); outline-offset: 3px; border-radius: 4px; }

.menu-enter-active { transition: transform .75s var(--ease); }
.menu-leave-active { transition: transform .5s var(--ease); }
.menu-enter-from, .menu-leave-to { transform: translateX(calc(100% + 1rem)); }
.veil-enter-active, .veil-leave-active { transition: opacity .5s var(--ease); }
.veil-enter-from, .veil-leave-to { opacity: 0; }
@keyframes appear { from { opacity: 0; transform: translateY(14px); } }

@media (max-width: 800px) {
  .menu { width: auto; left: .5rem; top: 3.75rem; }
  .close { right: 0; top: -3.25rem; translate: none; }
}
@media (prefers-reduced-motion: reduce) { .cell { animation: none; } .menu-enter-active, .menu-leave-active { transition: opacity .2s; } .menu-enter-from, .menu-leave-to { transform: none; opacity: 0; } }
</style>
