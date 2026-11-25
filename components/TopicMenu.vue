<script setup lang="ts">
// Topic overview. A light panel slides in from the right and covers half the screen; the stage stays
// visible on the left, softened. The panel is a grid with one cell per topic: a large icon and the
// topic's name. Picking a cell goes straight to that topic, as in the design (no list of pages in between).
// On phones the same grid sits on a white sheet that covers the screen, framed by a thin rule, with a square close
// button centred below it (the reference's phone menu); its icons are drawn smaller to fit two columns.
// The grid's pictures follow the design's layout (icon, three-colour bar, name) in medium weight: the numbered topics
// show their numeral in Host Grotesk 500, the others the project's line icons (lib/icons.ts) with a stroke as thick
// as the numerals' stems, so all six read as one family.
import type { Zone } from '~/composables/useSite';
import { NUMERALS, type ShapeName } from '~/lib/shapes';
// how far each glyph's box runs below its ink (px, at full size): measured from the rendered icons (the line icons'
// padding inside their 24-unit grid, the numerals' room below the baseline). Each glyph is pulled down by this much,
// so every icon's ink ends on the slot's floor and the bar below keeps the same gap under all six.
const SINK: Record<ShapeName, number> = { globe: 9.8, target: 9.8, chain: 5.3, flask: 18, bottle: 16, bulb: 16 };
const baseURL = useRuntimeConfig().app.baseURL;

const props = defineProps<{ zones: Zone[]; extras: { slug: string; title: string }[]; open: boolean; active: number; closeLabel: string; menuLabel: string }>(); // menuLabel: the menu's name for screen readers, in the page's language
const emit = defineEmits<{ page: [slug: string]; zone: [index: number]; close: [] }>();
// keyboard focus: onto the current topic's cell when the menu opens, kept inside the menu, back to the menu button when it closes
const menu = ref<HTMLElement>();
useFocusTrap(menu, toRef(props, 'open'), () => menu.value?.querySelector<HTMLElement>('.cell.current .face') ?? menu.value?.querySelector<HTMLElement>('.face'));

</script>

<template>
  <Transition name="veil">
    <div v-if="open" class="veil" @click="emit('close')" />
  </Transition>
  <Transition name="menu">
    <div v-if="open" ref="menu" class="menu" role="dialog" aria-modal="true" :aria-label="menuLabel" tabindex="-1">
      <button type="button" class="close" :aria-label="closeLabel" @click="emit('close')"><svg class="icon-12" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 3l6 6M9 3l-6 6" /></svg></button>
      <ul class="grid" :style="{ '--rows': Math.ceil(zones.length / 2) }">
        <li v-for="(z, i) in zones" :key="z.id" class="cell" :class="{ current: i === active }" :style="{ '--i': i }">
          <button type="button" class="face" :aria-current="i === active ? 'true' : undefined" @click="emit('zone', i)">
            <span class="icon" aria-hidden="true" :style="{ '--sink': `${SINK[z.shape]}px` }"><span v-if="NUMERALS[z.shape]" class="numeral">{{ NUMERALS[z.shape] }}</span><TopicIcon v-else :name="z.shape" class="line" /></span>
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
.menu:focus { outline: none; }
.menu { --edge: 25.76%; position: absolute; z-index: var(--z-menu); top: 8px; right: 8px; bottom: 8px; left: var(--edge); padding: 12px; border-radius: 0 20px; background: var(--feature-paper); color: var(--text); box-shadow: 0 30px 90px rgb(0 0 0 / .35); }
.close { position: absolute; right: calc(100% + 8px); top: 50%; translate: 0 -50%; width: var(--button-lg-height); height: var(--button-lg-height); display: grid; place-items: center; border: 0; border-radius: 0 10px; background: var(--feature-paper); color: var(--accent-deep); cursor: pointer; transition: transform .2s var(--ease-out), background-color .2s var(--ease-out), color .2s var(--ease-out); }
.close svg { fill: none; stroke: currentColor; stroke-width: var(--icon-stroke); stroke-linecap: round; }
@media (hover: hover) and (pointer: fine) { .close:hover { background: var(--accent-deep); color: var(--on-dark); } }
@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) { .close:hover { transform: rotate(90deg); } }
.grid { list-style: none; margin: 0; padding: 0; height: 100%; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: repeat(var(--rows), 1fr); border: 1px solid var(--feature-line); overflow: hidden; }
.cell { position: relative; display: grid; border-bottom: 1px solid var(--feature-line); animation: appear .4s var(--ease-out) both; animation-delay: calc(.12s + var(--i) * 45ms); } /* the cells settle in just after the sheet, a short non-uniform-feeling stagger */
.cell:nth-child(odd) { border-right: 1px solid var(--feature-line); }
.cell:nth-last-child(-n + 2) { border-bottom: 0; }
/* each cell: the icon and its bar in the middle, the name near the foot (as on the reference) */
.face { position: relative; grid-area: 1 / 1; display: grid; place-content: center; justify-items: center; gap: 0; padding: 1rem 1rem 3.5rem; border: 0; background: none; color: inherit; cursor: pointer; }
/* every icon stands on the floor of a slot as tall as the tallest one; its ink ends on that floor (see SINK) */
.icon { display: flex; align-items: flex-end; justify-content: center; height: 100px; }
.icon > * { display: block; flex: none; margin-bottom: calc(-1 * var(--sink)); transform-origin: 50% calc(100% - var(--sink)); transition: transform .2s var(--ease-out); }
/* the numeral: Host Grotesk 500, its figures about 88 px tall as in the design */
.numeral { font-family: var(--font-display); font-size: 120px; line-height: 1; font-weight: var(--font-weight-medium); letter-spacing: -.02em; color: var(--feature-blue); }
/* the line icons, 110 px on a 24-unit grid (their drawing about as tall as the numerals): a 1.7-unit stroke draws
   about 7.8 px, the stem of the 500 numerals */
.line { width: 110px; height: 110px; color: var(--feature-blue); stroke-width: 1.7; }
.face { transition: background-color .15s var(--ease-out); }
@media (hover: hover) and (pointer: fine) {
  .face:hover { background: color-mix(in srgb, var(--feature-sky) 55%, var(--feature-paper)); }
}
@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .face:hover .icon > * { transform: scale(1.06); }
}
.name { position: absolute; left: 1rem; right: 1rem; bottom: clamp(1.25rem, 4vh, 2.25rem); font-size: var(--type-feature-label); line-height: normal; font-weight: var(--font-weight-regular); color: var(--feature-caption); text-align: center; text-wrap: balance; }
.bar { display: block; margin-top: 12px; } /* the same gap under every icon's ink */ /* the brand's three colours under every icon, as in the design */
button:focus-visible { outline: 2px solid var(--accent-deep); outline-offset: 3px; border-radius: 4px; }
.face:focus-visible { outline-offset: -6px; } /* drawn inside the cell: the grid clips anything outside it */

.menu-enter-active { transition: transform .5s var(--ease-drawer); }
.menu-leave-active { transition: transform .3s var(--ease-drawer); } /* leaving answers a close: quicker than arriving */
.menu-enter-from, .menu-leave-to { transform: translateX(calc(100% + 1rem)); }
.veil-enter-active { transition: opacity .4s var(--ease-out); }
.veil-leave-active { transition: opacity .25s var(--ease-out); }
.veil-enter-from, .veil-leave-to { opacity: 0; }
@keyframes appear { from { opacity: 0; transform: translateY(10px); } }

/* phones: a white sheet over the whole screen (header included), the grid inside a thin frame, the close button centred below */
@media (max-width: 800px) {
  .veil { z-index: var(--z-panel); }
  .menu:focus { outline: none; }
.menu { z-index: var(--z-panel); top: .75rem; left: .75rem; right: .75rem; bottom: calc(1.5rem + var(--button-lg-height)); width: auto; padding: .75rem; border-radius: 0 0 0 var(--radius); }
  .grid { border-radius: 0; }
  .close { right: auto; left: 50%; top: calc(100% + .75rem); translate: -50% 0; width: var(--button-lg-height); height: var(--button-lg-height); border-radius: 0 10px; background: var(--feature-paper); }
  .face { padding: 1rem .5rem .75rem; }
  .name { position: static; margin-top: .9rem; }
  .icon { margin-top: -36px; } /* the 100 px slot, drawn at .64 from its floor: it takes 64 px of room */
  .icon > * { scale: .64; } /* the icons at about two thirds, so two fit side by side; scaled about the ink's foot (transform-origin above) */
  .bar { width: 64px; height: auto; margin-top: 8px; }
  .name { font-size: var(--type-feature-body); }
  .menu-enter-from, .menu-leave-to { transform: translateY(1rem); opacity: 0; }
  .menu-enter-active { transition: transform .35s var(--ease-out), opacity .25s var(--ease-out); }
  .menu-leave-active { transition: transform .2s var(--ease-out), opacity .2s var(--ease-out); }
}
@media (prefers-reduced-motion: reduce) { .cell { animation: none; }  .menu-enter-active, .menu-leave-active { transition: opacity .2s; } .menu-enter-from, .menu-leave-to { transform: none; opacity: 0; } }
</style>
