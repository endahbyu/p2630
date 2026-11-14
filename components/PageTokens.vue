<script setup lang="ts">
// Inside a topic: its pages as a row of tokens under the shape, each with its title beneath.
// Pressing one opens that page. (On phones the same pages are offered by LevelSlider instead.)
import type { ShapeName } from '~/lib/shapes';
const props = defineProps<{ icon: ShapeName; pages: { slug: string; title: string }[] }>();
defineEmits<{ pick: [slug: string] }>();
const hot = ref(-1);
const middle = computed(() => (props.pages.length - 1) / 2);
</script>

<template>
  <ul class="row" aria-label="Pages in this topic">
    <li v-for="(p, i) in pages" :key="p.slug" :style="{ '--i': i, '--dip': 1 - Math.min(1, Math.abs(i - middle)) }" @pointerenter="hot = i" @pointerleave="hot = -1">
      <span class="piece"><TokenTile :icon="icon" :label="p.title" :turn-x="hot === i ? 0 : -8" :turn-y="hot === i ? 0 : -16 - (i - middle) * 7" @press="$emit('pick', p.slug)" @focus="hot = i" @blur="hot = -1" /></span>
      <span class="name" aria-hidden="true">{{ p.title }}</span>
    </li>
  </ul>
</template>

<style scoped>
.row { position: absolute; z-index: var(--z-ui); left: 0; right: 0; top: calc(73.5% - 42px); margin: 0; padding: 0; list-style: none; display: flex; justify-content: center; gap: clamp(2.5rem, 7.5vw, 5.6rem); pointer-events: none; }
li { position: relative; width: 84px; display: grid; justify-items: center; gap: 1.6rem; translate: 0 calc(var(--dip) * 9px); perspective: 700px; animation: arrive .8s var(--ease) both; animation-delay: calc(.25s + var(--i) * 110ms); pointer-events: auto; }
.piece { display: block; filter: drop-shadow(0 18px 22px rgb(0 0 0 / .34)); transition: translate .3s var(--ease); }
li:hover .piece, li:focus-within .piece { translate: 0 -6px; }
.name { width: 11rem; text-align: center; font-size: .75rem; line-height: 1.35; color: var(--on-dark); text-wrap: balance; animation: show .5s var(--ease) both; animation-delay: calc(.7s + var(--i) * 110ms); }
@keyframes arrive { from { opacity: 0; transform: translate(-30px, -70px) scale(.6) rotate(-14deg); } 40% { opacity: 1; } }
@keyframes show { from { opacity: 0; } }
@media (prefers-reduced-motion: reduce) { li, .name { animation: none; } }
</style>
