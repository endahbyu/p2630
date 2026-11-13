<script setup lang="ts">
// Language switch: shows the current language's code; opens a short list to pick another.
const props = defineProps<{ locales: { code: string; label: string }[]; current: string; label: string }>();
const emit = defineEmits<{ pick: [code: string] }>();
const open = ref(false);
const root = ref<HTMLElement>();
const onOutside = (e: Event) => { if (root.value && !root.value.contains(e.target as Node)) open.value = false; };
onMounted(() => document.addEventListener('pointerdown', onOutside));
onBeforeUnmount(() => document.removeEventListener('pointerdown', onOutside));
function pick(code: string) { open.value = false; if (code !== props.current) emit('pick', code); }
</script>

<template>
  <div ref="root" class="lang" @keydown.esc.stop="open = false">
    <button type="button" class="toggle" :aria-label="label" aria-haspopup="listbox" :aria-expanded="open" @click="open = !open">
      {{ current.toUpperCase() }}<span class="arrow" :class="{ up: open }" aria-hidden="true" />
    </button>
    <Transition name="drop">
      <ul v-if="open" role="listbox" :aria-label="label">
        <li v-for="l in locales" :key="l.code" role="option" :aria-selected="l.code === current">
          <button type="button" :lang="l.code" @click="pick(l.code)">{{ l.label }}</button>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.lang { position: relative; }
.toggle { display: inline-flex; align-items: center; gap: .45rem; height: 2.5rem; padding: 0 .9rem; border-radius: 999px; border: 1px solid var(--glass-line); background: var(--glass); backdrop-filter: blur(12px); color: var(--on-dark); font-size: .75rem; font-weight: 600; letter-spacing: .06em; cursor: pointer; }
.toggle:hover { background: color-mix(in srgb, var(--on-dark) 18%, transparent); }
.arrow { width: 0; height: 0; border: .28rem solid transparent; border-top-color: currentColor; margin-top: .25rem; transition: rotate .3s var(--ease); transform-origin: 50% 25%; }
.arrow.up { rotate: 180deg; }
ul { position: absolute; right: 0; top: calc(100% + .4rem); margin: 0; padding: .35rem; list-style: none; min-width: 11rem; border-radius: .9rem; background: var(--surface); color: var(--text); box-shadow: 0 18px 50px rgb(0 0 0 / .35); }
li button { width: 100%; padding: .55rem .75rem; border: 0; border-radius: .6rem; background: none; color: inherit; font-size: .8125rem; text-align: left; cursor: pointer; }
li button:hover { background: color-mix(in srgb, var(--accent-deep) 9%, transparent); }
li[aria-selected='true'] button { font-weight: 700; color: var(--accent-deep); }
button:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.drop-enter-active, .drop-leave-active { transition: opacity .2s var(--ease), transform .2s var(--ease); }
.drop-enter-from, .drop-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
