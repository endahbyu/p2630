<script setup lang="ts">
// Short introduction shown once after loading: a few cards, the last one enters the experience.
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
        <p class="count">{{ index + 1 }} / {{ steps.length }}</p>
        <h1>{{ step.title }}</h1>
        <p class="text">{{ step.text }}</p>
        <button type="button" class="action" @click="next">{{ step.button }}</button>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.tutorial { position: absolute; inset: 0; z-index: var(--z-tutorial); display: grid; place-items: center; padding: var(--frame); background: color-mix(in srgb, var(--stage-to) 55%, transparent); backdrop-filter: blur(6px); }
.card { width: min(30rem, 100%); padding: 2rem; border-radius: var(--radius); background: var(--glass); border: 1px solid var(--glass-line); backdrop-filter: blur(18px); text-align: center; display: grid; gap: 1rem; justify-items: center; }
.count { font-size: .75rem; letter-spacing: .14em; color: var(--on-dark-muted); }
h1 { font-family: var(--font-display); font-size: clamp(1.5rem, 4vw, 2rem); line-height: 1.15; font-weight: 600; text-wrap: balance; }
.text { color: var(--on-dark-muted); text-wrap: pretty; }
.action { margin-top: .5rem; padding: .75rem 2rem; border-radius: 999px; border: 0; background: var(--on-dark); color: var(--accent-deep); font-weight: 600; cursor: pointer; transition: transform .2s var(--ease); }
.action:hover { transform: scale(1.04); }
.action:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.card-enter-active, .card-leave-active { transition: opacity .35s var(--ease), transform .35s var(--ease); }
.card-enter-from { opacity: 0; transform: translateY(12px); }
.card-leave-to { opacity: 0; transform: translateY(-12px); }
</style>
