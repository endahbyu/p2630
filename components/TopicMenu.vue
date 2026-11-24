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
      <button type="button" class="close" :aria-label="closeLabel" @click="emit('close')"><span aria-hidden="true">×</span></button>
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
.menu { position: absolute; z-index: var(--z-menu); top: .5rem; right: .5rem; bottom: .5rem; width: calc(50% - .5rem); border-radius: var(--radius); background: var(--feature-paper); color: var(--text); box-shadow: 0 30px 90px rgb(0 0 0 / .35); }
.close { position: absolute; right: calc(100% + .75rem); top: 50%; translate: 0 -50%; width: var(--button-lg-height); height: var(--button-lg-height); display: grid; place-items: center; border: 0; border-radius: .6rem; background: var(--surface); color: var(--text); font-size: var(--icon-size); line-height: 1; cursor: pointer; transition: transform .25s var(--ease), background .25s var(--ease), color .25s var(--ease); }
.close:hover { background: var(--accent-deep); color: var(--on-dark); transform: rotate(90deg); }
.grid { list-style: none; margin: 0; padding: 0; height: 100%; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: repeat(var(--rows), 1fr); border: 1px solid var(--feature-line); border-radius: inherit; overflow: hidden; }
.cell { position: relative; display: grid; border-bottom: 1px solid var(--feature-line); animation: appear .6s var(--ease) both; animation-delay: calc(.28s + var(--i) * 70ms); }
.cell:nth-child(odd) { border-right: 1px solid var(--feature-line); }
.cell:nth-last-child(-n + 2) { border-bottom: 0; }
.face { grid-area: 1 / 1; display: grid; place-content: center; justify-items: center; gap: 0; padding: 1rem; padding-top: clamp(1rem, 2vw, 2.5rem); border: 0; background: none; color: inherit; cursor: pointer; }
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
.name { font-size: var(--type-feature-label); line-height: normal; font-weight: var(--font-weight-regular); color: var(--feature-caption); text-align: center; text-wrap: balance; }
.bar { display: block; margin: 8px 0 clamp(1rem, 2.1vw, 30px); } /* the brand's three colours under every icon, as in the design */
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
  .face { padding: .75rem .5rem; padding-top: 1rem; }
  .icon { margin-block: -18px; } /* the 100 px slot, drawn at .64: it takes 64 px of room */
  .icon img { scale: .64; } /* the design's icons at about two thirds, so two fit side by side */
  .bar { width: 64px; height: auto; margin: 6px 0 .9rem; }
  .name { font-size: var(--type-feature-body); }
  .menu-enter-from, .menu-leave-to { transform: translateY(1rem); opacity: 0; }
  .menu-enter-active, .menu-leave-active { transition: transform .4s var(--ease), opacity .3s var(--ease); }
}
@media (prefers-reduced-motion: reduce) { .cell { animation: none; } .close:hover { transform: none; } .menu-enter-active, .menu-leave-active { transition: opacity .2s; } .menu-enter-from, .menu-leave-to { transform: none; opacity: 0; } }
</style>
