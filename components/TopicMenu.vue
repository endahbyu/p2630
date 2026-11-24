<script setup lang="ts">
// Topic overview. A light panel slides in from the right and covers half the screen; the stage stays
// visible on the left, softened. The panel is a grid with one cell per topic: a large icon and the
// topic's name. Picking a cell goes straight to that topic, as in the design (no list of pages in between).
// On phones the same grid sits on a white sheet that covers the screen, framed by a thin rule, with a square close
// button centred below it (the reference's phone menu); its icons are drawn smaller to fit two columns.
// The grid's pictures are the solid blue icons from the design (public/images/topics/), each at its own size.
import type { Zone } from '~/composables/useSite';
import type { ShapeName } from '~/lib/shapes';
const baseURL = useRuntimeConfig().app.baseURL;
const MENU_ICONS: Record<ShapeName, { src: string; w: number; h: number }> = {
  globe: { src: 'globe.svg', w: 100, h: 100 },
  flask: { src: 'two.svg', w: 60, h: 88 },
  bottle: { src: 'six.svg', w: 68, h: 92 },
  bulb: { src: 'thirty.svg', w: 141.31, h: 88 },
  target: { src: 'target.svg', w: 90, h: 90 },
  chain: { src: 'book.svg', w: 80, h: 88 },
};

defineProps<{ zones: Zone[]; extras: { slug: string; title: string }[]; open: boolean; active: number; closeLabel: string }>();
const emit = defineEmits<{ page: [slug: string]; zone: [index: number]; close: [] }>();

</script>

<template>
  <Transition name="veil">
    <div v-if="open" class="veil" @click="emit('close')" />
  </Transition>
  <Transition name="menu">
    <div v-if="open" class="menu" role="dialog" aria-modal="true" aria-label="All topics">
      <button type="button" class="close" :aria-label="closeLabel" @click="emit('close')"><svg class="icon-12" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 3l6 6M9 3l-6 6" /></svg></button>
      <ul class="grid" :style="{ '--rows': Math.ceil(zones.length / 2) }">
        <li v-for="(z, i) in zones" :key="z.id" class="cell" :class="{ current: i === active }" :style="{ '--i': i }">
          <button type="button" class="face" :aria-current="i === active ? 'true' : undefined" @click="emit('zone', i)">
            <span class="icon" aria-hidden="true"><img :src="`${baseURL}images/topics/${MENU_ICONS[z.shape].src}`" alt="" :width="MENU_ICONS[z.shape].w" :height="MENU_ICONS[z.shape].h" /></span>
            <img class="bar" :src="`${baseURL}images/topics/underline.svg`" alt="" width="91" height="12" />
            <span class="name">{{ z.title }}</span>
          </button>
        </li>
      </ul>
    </div>
  </Transition>
</template>

<style scoped>
.veil { position: absolute; inset: 0; z-index: var(--z-menu); background: color-mix(in srgb, var(--stage-to) 28%, transparent); backdrop-filter: blur(7px); cursor: pointer; }
/* wide screens: the same sheet as a content page (the reference's): from 25.76% of the width to 8 px from the other edges, corners 0 20px,
   with the grid inside a thin frame 12 px in */
.menu { --edge: 25.76%; position: absolute; z-index: var(--z-menu); top: 8px; right: 8px; bottom: 8px; left: var(--edge); padding: 12px; border-radius: 0 20px; background: var(--feature-paper); color: var(--text); box-shadow: 0 30px 90px rgb(0 0 0 / .35); }
.close { position: absolute; right: calc(100% + 8px); top: 50%; translate: 0 -50%; width: var(--button-lg-height); height: var(--button-lg-height); display: grid; place-items: center; border: 0; border-radius: 0 10px; background: var(--feature-paper); color: var(--accent-deep); cursor: pointer; transition: transform .25s var(--ease), background .25s var(--ease), color .25s var(--ease); }
.close svg { fill: none; stroke: currentColor; stroke-width: var(--icon-stroke); stroke-linecap: round; }
.close:hover { background: var(--accent-deep); color: var(--on-dark); transform: rotate(90deg); }
.grid { list-style: none; margin: 0; padding: 0; height: 100%; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: repeat(var(--rows), 1fr); border: 1px solid var(--feature-line); overflow: hidden; }
.cell { position: relative; display: grid; border-bottom: 1px solid var(--feature-line); animation: appear .6s var(--ease) both; animation-delay: calc(.28s + var(--i) * 70ms); }
.cell:nth-child(odd) { border-right: 1px solid var(--feature-line); }
.cell:nth-last-child(-n + 2) { border-bottom: 0; }
/* each cell: the icon and its bar in the middle, the name near the foot (as on the reference) */
.face { position: relative; grid-area: 1 / 1; display: grid; place-content: center; justify-items: center; gap: 0; padding: 1rem 1rem 3.5rem; border: 0; background: none; color: inherit; cursor: pointer; }
/* every icon sits in a slot of the tallest one's height, so the names in a row line up, as in the design */
.icon { display: grid; place-items: center; height: 100px; }
.icon img { display: block; max-width: none; transition: transform .4s var(--ease); }
.face { transition: background-color .3s var(--ease); }
@media (hover: hover) {
  .face:hover { background: color-mix(in srgb, var(--feature-sky) 55%, var(--feature-paper)); }
}
@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  .face:hover .icon img { transform: scale(1.06); }
}
.name { position: absolute; left: 1rem; right: 1rem; bottom: clamp(1.25rem, 4vh, 2.25rem); font-size: var(--type-feature-label); line-height: normal; font-weight: var(--font-weight-regular); color: var(--feature-caption); text-align: center; text-wrap: balance; }
.bar { display: block; margin-top: 8px; } /* the brand's three colours under every icon, as in the design */
button:focus-visible { outline: 2px solid var(--accent-deep); outline-offset: 3px; border-radius: 4px; }
.face:focus-visible { outline-offset: -6px; } /* drawn inside the cell: the grid clips anything outside it */

.menu-enter-active { transition: transform .75s var(--ease); }
.menu-leave-active { transition: transform .5s var(--ease); }
.menu-enter-from, .menu-leave-to { transform: translateX(calc(100% + 1rem)); }
.veil-enter-active, .veil-leave-active { transition: opacity .5s var(--ease); }
.veil-enter-from, .veil-leave-to { opacity: 0; }
@keyframes appear { from { opacity: 0; transform: translateY(14px); } }

/* phones: a white sheet over the whole screen (header included), the grid inside a thin frame, the close button centred below */
@media (max-width: 800px) {
  .veil { z-index: var(--z-panel); }
  .menu { z-index: var(--z-panel); top: .75rem; left: .75rem; right: .75rem; bottom: calc(1.5rem + var(--button-lg-height)); width: auto; padding: .75rem; border-radius: 0 0 0 var(--radius); }
  .grid { border-radius: 0; }
  .close { right: auto; left: 50%; top: calc(100% + .75rem); translate: -50% 0; width: var(--button-lg-height); height: var(--button-lg-height); border-radius: 0 10px; background: var(--feature-paper); }
  .face { padding: 1rem .5rem .75rem; }
  .name { position: static; margin-top: .9rem; }
  .icon { margin-block: -18px; } /* the 100 px slot, drawn at .64: it takes 64 px of room */
  .icon img { scale: .64; } /* the design's icons at about two thirds, so two fit side by side */
  .bar { width: 64px; height: auto; margin-top: 6px; }
  .name { font-size: var(--type-feature-body); }
  .menu-enter-from, .menu-leave-to { transform: translateY(1rem); opacity: 0; }
  .menu-enter-active, .menu-leave-active { transition: transform .4s var(--ease), opacity .3s var(--ease); }
}
@media (prefers-reduced-motion: reduce) { .cell { animation: none; } .close:hover { transform: none; } .menu-enter-active, .menu-leave-active { transition: opacity .2s; } .menu-enter-from, .menu-leave-to { transform: none; opacity: 0; } }
</style>
