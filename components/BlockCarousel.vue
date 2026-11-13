<script setup lang="ts">
// Carousel block: slides you can swipe, scroll or step through with the arrows. Built on native scroll snapping.
const props = defineProps<{ slides: { caption: string; src?: string }[] }>();
const track = ref<HTMLElement>();
const index = ref(0);
function onScroll() { const el = track.value; if (el) index.value = Math.round(el.scrollLeft / el.clientWidth); }
function go(i: number) { const el = track.value; if (el) el.scrollTo({ left: Math.max(0, Math.min(props.slides.length - 1, i)) * el.clientWidth, behavior: 'smooth' }); }
</script>

<template>
  <div class="carousel">
    <ul ref="track" class="track" tabindex="0" aria-label="Image carousel" @scroll.passive="onScroll">
      <li v-for="(s, i) in slides" :key="i">
        <figure>
          <img v-if="s.src" :src="s.src" :alt="s.caption" loading="lazy" />
          <div v-else class="blank" aria-hidden="true" />
          <figcaption>{{ s.caption }}</figcaption>
        </figure>
      </li>
    </ul>
    <div class="controls">
      <button type="button" aria-label="Previous slide" :disabled="index === 0" @click="go(index - 1)">←</button>
      <span class="count">{{ index + 1 }} / {{ slides.length }}</span>
      <button type="button" aria-label="Next slide" :disabled="index === slides.length - 1" @click="go(index + 1)">→</button>
    </div>
  </div>
</template>

<style scoped>
.carousel { display: grid; gap: .6rem; min-width: 0; }
.track { list-style: none; margin: 0; padding: 0; display: flex; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; border-radius: calc(var(--radius) / 2); }
.track::-webkit-scrollbar { display: none; }
.track:focus-visible { outline: 2px solid var(--accent-deep); outline-offset: 3px; }
li { flex: 0 0 100%; scroll-snap-align: start; }
figure { margin: 0; display: grid; gap: .5rem; }
img, .blank { width: 100%; aspect-ratio: 16 / 10; object-fit: cover; border-radius: calc(var(--radius) / 2); }
.blank { background: repeating-linear-gradient(135deg, color-mix(in srgb, var(--text) 6%, transparent) 0 10px, transparent 10px 20px), color-mix(in srgb, var(--text) 5%, transparent); }
figcaption { font-size: .8125rem; color: var(--text-muted); }
.controls { display: flex; align-items: center; gap: .75rem; }
.controls button { width: 2.25rem; height: 2.25rem; border-radius: 50%; border: 1px solid color-mix(in srgb, var(--text) 18%, transparent); background: none; color: var(--text); cursor: pointer; transition: background .2s var(--ease), color .2s var(--ease), opacity .2s; }
.controls button:hover:not(:disabled) { background: var(--accent-deep); color: var(--on-dark); border-color: transparent; }
.controls button:disabled { opacity: .3; cursor: default; }
.controls button:focus-visible { outline: 2px solid var(--accent-deep); outline-offset: 2px; }
.count { font-size: .8125rem; color: var(--text-muted); font-variant-numeric: tabular-nums; }
</style>
