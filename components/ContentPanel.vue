<script setup lang="ts">
// Side panel that shows one page. A page is a list of simple blocks (text, heading, two columns, figure, button).
import type { Page } from '~/composables/useSite';
const props = defineProps<{ page: Page | null; topic?: string; closeLabel: string }>();
const emit = defineEmits<{ close: []; go: [slug: string] }>();
const body = ref<HTMLElement>();
watch(() => props.page?.slug, () => nextTick(() => body.value?.scrollTo({ top: 0 })));
</script>

<template>
  <Transition name="panel">
    <aside v-if="page" class="panel" role="dialog" aria-modal="false" :aria-label="page.title">
      <header class="top">
        <p class="topic">{{ topic }}</p>
        <button type="button" class="close" @click="emit('close')">{{ closeLabel }}<span aria-hidden="true">×</span></button>
      </header>
      <div ref="body" class="body">
        <Transition name="swap" mode="out-in">
          <article :key="page.slug">
            <h2>{{ page.title }}</h2>
            <p v-if="page.lead" class="lead">{{ page.lead }}</p>
            <template v-for="(b, i) in page.blocks" :key="i">
              <h3 v-if="b.type === 'heading'">{{ b.text }}</h3>
              <p v-else-if="b.type === 'text'">{{ b.text }}</p>
              <div v-else-if="b.type === 'columns'" class="columns"><p>{{ b.left }}</p><p>{{ b.right }}</p></div>
              <figure v-else-if="b.type === 'figure'">
                <img v-if="b.src" :src="b.src" :alt="b.caption" loading="lazy" />
                <div v-else class="blank" aria-hidden="true" />
                <figcaption>{{ b.caption }}</figcaption>
              </figure>
              <button v-else-if="b.type === 'button'" type="button" class="cta" @click="emit('go', b.to)">{{ b.label }}<span aria-hidden="true">→</span></button>
            </template>
          </article>
        </Transition>
      </div>
    </aside>
  </Transition>
</template>

<style scoped>
.panel { position: absolute; z-index: var(--z-panel); top: var(--frame); right: var(--frame); bottom: var(--frame); width: min(34rem, calc(100% - 2 * var(--frame))); display: flex; flex-direction: column; border-radius: var(--radius); background: var(--surface); color: var(--text); overflow: hidden; box-shadow: 0 24px 80px rgb(0 0 0 / .35); }
.top { display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding: 1rem 1.5rem; border-bottom: 1px solid color-mix(in srgb, var(--text) 10%, transparent); }
.topic { font-size: .75rem; letter-spacing: .12em; text-transform: uppercase; color: var(--text-muted); }
.close { display: inline-flex; align-items: center; gap: .5rem; padding: .4rem .9rem; border-radius: 999px; border: 1px solid color-mix(in srgb, var(--text) 18%, transparent); background: none; color: var(--text); font-size: .8125rem; cursor: pointer; transition: background .25s var(--ease), color .25s var(--ease); }
.close:hover { background: var(--text); color: var(--surface); }
.body { flex: 1; overflow-y: auto; overscroll-behavior: contain; padding: 2rem 1.5rem 3rem; }
article { display: grid; gap: 1.25rem; }
h2 { font-family: var(--font-display); font-size: clamp(1.75rem, 4vw, 2.25rem); line-height: 1.1; font-weight: 600; text-wrap: balance; }
h3 { font-family: var(--font-display); font-size: 1.25rem; font-weight: 600; margin-top: .75rem; }
.lead { font-size: 1.125rem; color: var(--text-muted); text-wrap: pretty; }
.columns { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; font-size: .9375rem; }
figure { margin: 0; display: grid; gap: .5rem; }
figure img, .blank { width: 100%; aspect-ratio: 16 / 10; object-fit: cover; border-radius: calc(var(--radius) / 2); }
.blank { background: repeating-linear-gradient(135deg, color-mix(in srgb, var(--text) 6%, transparent) 0 10px, transparent 10px 20px), color-mix(in srgb, var(--text) 5%, transparent); }
figcaption { font-size: .8125rem; color: var(--text-muted); }
.cta { justify-self: start; display: inline-flex; gap: .75rem; padding: .8rem 1.5rem; border-radius: 999px; border: 0; background: var(--accent-deep); color: var(--on-dark); font-weight: 600; cursor: pointer; transition: gap .25s var(--ease); }
.cta:hover { gap: 1.1rem; }
button:focus-visible { outline: 2px solid var(--accent-deep); outline-offset: 3px; }
.panel-enter-active, .panel-leave-active { transition: transform .6s var(--ease), opacity .4s var(--ease); }
.panel-enter-from, .panel-leave-to { transform: translateX(calc(100% + var(--frame))); opacity: 0; }
.swap-enter-active, .swap-leave-active { transition: opacity .25s var(--ease), transform .25s var(--ease); }
.swap-enter-from { opacity: 0; transform: translateY(10px); }
.swap-leave-to { opacity: 0; }
@media (max-width: 600px) { .panel { inset: 0; width: 100%; border-radius: 0; } .columns { grid-template-columns: 1fr; } }
</style>
