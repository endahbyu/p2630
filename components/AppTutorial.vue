<script setup lang="ts">
// Short introduction shown once after loading: a white card per step, the last one enters the experience.
// Like the reference, the scene behind stays clear; the card has two pictures on top, a title, a few lines and a pill button.
const props = defineProps<{ steps: { title: string; text: string; button: string }[] }>();
const emit = defineEmits<{ done: [] }>();
const index = ref(0);
const step = computed(() => props.steps[index.value]);
function next() { if (index.value < props.steps.length - 1) index.value++; else emit('done'); }
</script>

<template>
  <section class="tutorial" aria-live="polite">
    <Transition name="card" mode="out-in">
      <div :key="index" class="card">
        <div class="pictures" aria-hidden="true">
          <span class="cell"><TopicIcon :name="index === 0 ? 'globe' : 'target'" /></span>
          <span class="cell">
            <svg v-if="index === 0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="3" width="10" height="17" rx="5" /><path d="M12 6.5v3" class="wheel" /></svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 12V5a1.5 1.5 0 0 1 3 0v6M12.5 10.5V9a1.5 1.5 0 0 1 3 0v2M15.5 10.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-2.7L4 15a1.5 1.5 0 0 1 2.5-1.6L9.5 16" /></svg>
          </span>
        </div>
        <RiseText tag="h1" :text="step.title" :delay="250" />
        <p class="text">{{ step.text }}</p>
        <button type="button" class="action fill-btn" @click="next"><span class="fill" aria-hidden="true" /><span class="knob" aria-hidden="true"><svg class="arrow in" viewBox="0 0 12 12"><path d="M2 6h8M7 3l3 3-3 3" /></svg><svg class="arrow out" viewBox="0 0 12 12"><path d="M2 6h8M7 3l3 3-3 3" /></svg></span><span class="label">{{ step.button }}</span></button>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.tutorial { position: absolute; inset: 0; z-index: var(--z-tutorial); display: grid; place-items: center; padding: var(--frame); }
/* 279×288 at a 1188 px wide window, growing with the window; the lower-left corner is rounded by a third of the width */
.card { width: clamp(279px, 23.5vw, 415px); aspect-ratio: 279 / 288; padding: 7px 7px 2.2rem; border-radius: 0 0 0 32.6%; background: var(--surface); color: var(--accent-deep); text-align: center; display: grid; grid-template-rows: auto auto 1fr auto; justify-items: center; gap: .55rem; box-shadow: 0 20px 60px rgb(0 0 0 / .25); }
.pictures { justify-self: stretch; display: grid; grid-template-columns: 1fr 1fr; margin-bottom: 1rem; border-bottom: 1px solid color-mix(in srgb, var(--accent-deep) 14%, transparent); }
.cell { display: grid; place-items: center; height: clamp(72px, 6vw, 106px); color: color-mix(in srgb, var(--accent-deep) 55%, var(--surface)); }
.cell + .cell { border-left: 1px solid color-mix(in srgb, var(--accent-deep) 14%, transparent); }
.cell svg { width: 30%; max-width: 34px; }
.wheel { animation: wheel 1.6s var(--ease) infinite; }
@keyframes wheel { 50% { transform: translateY(2.5px); opacity: .4; } }
h1 { padding: 0 1rem; font-family: var(--font-display); font-size: clamp(.8125rem, 1vw, 1.0625rem); font-weight: 700; line-height: 1.3; text-wrap: balance; }
.text { padding: 0 1.4rem; font-size: clamp(.75rem, .85vw, .9375rem); line-height: 1.45; color: color-mix(in srgb, var(--accent-deep) 80%, var(--text)); text-wrap: pretty; }
.action { display: inline-flex; align-items: center; gap: .9rem; padding-inline: 5px 1.4rem; border: 0; border-radius: 999px; background: color-mix(in srgb, var(--accent-deep) 9%, var(--surface)); color: var(--accent-deep); font-size: .75rem; cursor: pointer; transition: gap 1s var(--ease), padding 1s var(--ease); }
.action:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.knob { display: grid; place-items: center; border-radius: 50%; /* size from fill-button.css */ background: var(--accent-deep); }
.knob svg { width: 10px; height: 10px; display: block; fill: none; stroke: var(--surface); stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
.card-enter-active, .card-leave-active { transition: opacity .45s var(--ease), transform .45s var(--ease); }
.card-enter-from { opacity: 0; transform: translateY(14px); }
.card-leave-to { opacity: 0; transform: translateY(-14px); }
@media (prefers-reduced-motion: reduce) { .wheel { animation: none; } }
</style>
