<script setup lang="ts">
// The whole experience on one screen: loader → tutorial → explore.
// Scrolling (or swiping, or the arrow keys) travels between topics in a loop; the particles re-form into each topic's shape on the way.
import { createScrollTravel } from '~/lib/scrollTravel';

const { site, phase, zones, zone, zoneIndex, menuOpen, page, focused, load, goToZone, openPage, closePage } = useSite();
const base = useRuntimeConfig().app.baseURL;

// ---- loading: real content load plus a short minimum, so the opening never flashes by ----
const progress = ref(0);
const loaded = ref(false);
onMounted(async () => {
  const started = performance.now(), MIN = 1400;
  const tick = setInterval(() => { progress.value = Math.min(loaded.value ? 1 : 0.9, (performance.now() - started) / MIN); }, 60);
  await load();
  loaded.value = true;
  await new Promise((r) => setTimeout(r, Math.max(0, MIN - (performance.now() - started)) + 250));
  clearInterval(tick); progress.value = 1;
  phase.value = page.value ? 'explore' : 'tutorial'; // a direct link to a page skips the introduction
});

// ---- moving between topics: scrolling adds speed, the journey settles on the nearest topic ----
const exploring = computed(() => phase.value === 'explore' && !menuOpen.value && !page.value && !focused.value);
const points = computed(() => (focused.value && zone.value ? zone.value.pages.map((p) => ({ slug: p.slug, title: p.title })) : []));
watch(zoneIndex, () => { if (!page.value) focused.value = false; }); // going to another topic leaves the entered one
const settled = ref(true);
const travel = createScrollTravel(6, (i) => { zoneIndex.value = i; }, (s) => { settled.value = s; });
watch(() => zones.value.length, (n) => { if (n) travel.stops = n; });
watch(exploring, (on) => travel.setEnabled(on), { immediate: true });
watch(zoneIndex, (i) => { if (travel.nearest() !== i) travel.goTo(i); }); // rail, menu and page links

function onWheel(e: WheelEvent) { travel.impulse(e.deltaY); }
let touchY: number | null = null;
function onTouchStart(e: TouchEvent) { touchY = e.touches[0].clientY; }
function onTouchMove(e: TouchEvent) { if (touchY === null) return; const y = e.touches[0].clientY; travel.impulse((touchY - y) * 4); touchY = y; }
function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') { if (page.value) closePage(); else if (menuOpen.value) menuOpen.value = false; else focused.value = false; }
  else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') travel.step(1);
  else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') travel.step(-1);
}
onMounted(() => window.addEventListener('keydown', onKey));
onBeforeUnmount(() => window.removeEventListener('keydown', onKey));

const wide = ref(true);
onMounted(() => { const q = window.matchMedia('(min-width: 801px)'); wide.value = q.matches; q.addEventListener('change', (e) => { wide.value = e.matches; }); });
const shift = computed(() => (!wide.value ? 0 : page.value ? 0.2 : menuOpen.value ? 0.25 : 0)); // slide the picture aside while a page or the menu is open
const count = computed(() => (wide.value ? 10000 : 5000));
const shapes = computed(() => (zones.value.length ? zones.value.map((z) => z.shape) : (['globe'] as const).slice()));

// tab title and description follow the open page (the tags in nuxt.config.ts are the site-wide defaults)
useHead(() => {
  const brand = site.value?.ui.brand ?? 'P2630', description = page.value?.lead ?? site.value?.ui.description ?? '';
  return { title: page.value ? `${page.value.title} · ${brand}` : brand, meta: [{ name: 'description', content: description }, { property: 'og:description', content: description }] };
});
</script>

<template>
  <main class="page" @wheel.passive="onWheel" @touchstart.passive="onTouchStart" @touchmove.passive="onTouchMove">
    <ParticleStage :shapes="shapes" :travel="travel" :active="phase !== 'loading'" :shift="shift" :count="count" :land-url="`${base}data/land.json`" :focused="focused" :points="points" @pick="openPage" />

    <template v-if="site">
      <header class="bar">
        <p class="brand">{{ site.ui.brand }}</p>
        <button v-show="phase === 'explore' && !page && !menuOpen" type="button" class="pill" aria-haspopup="dialog" @click="menuOpen = true">{{ site.ui.menu }}</button>
      </header>

      <Transition name="fade">
        <div v-if="phase === 'explore'" class="explore">
          <ZoneRail :zones="zones" :active="zoneIndex" :travel="travel" class="fades" :class="{ gone: focused || menuOpen }" @select="goToZone" />
          <TopicToken :icon="zone.shape" :label="`${site.ui.open}: ${zone.title}`" :visible="!page && !menuOpen && !focused" :travel="travel" @open="focused = true" />
          <Transition name="fade"><p v-if="focused && !menuOpen" class="focus-title">{{ zone.title }}</p></Transition>
          <Transition name="title" mode="out-in">
            <div :key="zoneIndex" class="headline" :class="{ aside: !!page || menuOpen || focused }">
              <p class="index">{{ String(zoneIndex + 1).padStart(2, '0') }} / {{ String(zones.length).padStart(2, '0') }}</p>
              <h1>{{ zone.title }}</h1>
              <p class="summary">{{ zone.summary }}</p>
            </div>
          </Transition>
          <footer class="foot">
            <p class="hint">{{ focused ? site.ui.hintFocus : site.ui.hintScroll }}<span v-if="!focused" class="extra"> · {{ site.ui.hintPointer }}</span></p>
            <button v-show="!page && !menuOpen" type="button" class="enter" :class="{ small: focused }" :aria-label="focused ? site.ui.close : `${site.ui.open}: ${zone.title}`" @click="focused = !focused">
              <span class="knob" aria-hidden="true" /><span class="text">{{ focused ? site.ui.close : zone.title }}</span>
            </button>
          </footer>
        </div>
      </Transition>

      <TopicMenu :zones="zones" :open="menuOpen" :active="zoneIndex" :close-label="site.ui.close" @page="openPage" @zone="(i) => { goToZone(i); menuOpen = false; }" @close="menuOpen = false" />
      <ContentPanel :page="page" :topic="zone?.title" :close-label="site.ui.close" @close="closePage" @go="openPage" />
      <Transition name="fade"><AppTutorial v-if="phase === 'tutorial'" :steps="site.ui.tutorial" @done="phase = 'explore'" /></Transition>
    </template>

    <AppCursor v-if="site" :hint="focused ? site.ui.cursorFocus : site.ui.cursorExplore" :enabled="phase === 'explore' && !menuOpen" />
    <AppLoader :progress="progress" :label="site?.ui.loading ?? 'Loading'" :done="phase !== 'loading'" />
  </main>
</template>

<style scoped>
.page { position: relative; height: 100dvh; overflow: hidden; }
.bar { position: absolute; z-index: var(--z-bar); top: var(--frame); left: var(--frame); right: var(--frame); display: flex; justify-content: space-between; align-items: center; min-height: 2.5rem; pointer-events: none; }
.bar > * { pointer-events: auto; }
.brand { font-family: var(--font-display); font-weight: 700; letter-spacing: .08em; }
.pill { display: inline-flex; align-items: center; gap: .6rem; padding: .6rem 1.2rem; border-radius: 999px; border: 1px solid var(--glass-line); background: var(--glass); backdrop-filter: blur(12px); font-size: .8125rem; cursor: pointer; transition: background .25s var(--ease), color .25s var(--ease), gap .25s var(--ease); }
.pill:hover { background: color-mix(in srgb, var(--on-dark) 18%, transparent); }
.pill.solid { background: var(--on-dark); color: var(--accent-deep); border-color: transparent; font-weight: 600; }
.pill.solid:hover { gap: 1rem; background: var(--on-dark); }
.pill:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.explore { position: absolute; inset: 0; pointer-events: none; }
.explore :deep(nav), .explore button { pointer-events: auto; }
.fades { transition: opacity .45s var(--ease), visibility 0s; }
.fades.gone { opacity: 0; visibility: hidden; transition: opacity .45s var(--ease), visibility 0s .45s; }
.focus-title { position: absolute; z-index: var(--z-ui); top: calc(var(--frame) + .55rem); left: 50%; translate: -50% 0; font-family: var(--font-display); font-weight: 700; font-size: .9375rem; letter-spacing: .01em; white-space: nowrap; }
/* centre button: enters the topic; once inside it shrinks into "Close" */
.enter { position: absolute; left: 50%; bottom: 0; translate: -50% 0; display: inline-flex; align-items: center; gap: .9rem; height: 3.25rem; padding: .3rem 1.6rem .3rem .3rem; border: 0; border-radius: 999px; background: var(--on-dark); color: var(--text); font-size: .8125rem; font-weight: 600; cursor: pointer; box-shadow: 0 12px 34px rgb(0 0 0 / .28); transition: padding .4s var(--ease), background .4s var(--ease), color .4s var(--ease), box-shadow .3s var(--ease); }
.enter:hover { box-shadow: 0 16px 44px rgb(0 0 0 / .4); }
.enter:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.knob { position: relative; flex: none; width: 2.65rem; height: 2.65rem; border-radius: 50%; background: var(--accent-deep); transition: rotate .45s var(--ease), background .3s var(--ease); }
.knob::before, .knob::after { content: ''; position: absolute; left: 50%; top: 50%; width: .8rem; height: 1.5px; margin: -.75px 0 0 -.4rem; border-radius: 2px; background: var(--on-dark); }
.knob::after { rotate: 90deg; }
.enter:hover .knob { rotate: 90deg; }
.enter.small { flex-direction: row-reverse; padding: .3rem .3rem .3rem 1.4rem; background: var(--glass); color: var(--on-dark); backdrop-filter: blur(12px); border: 1px solid var(--glass-line); box-shadow: none; }
.enter.small .knob { rotate: 45deg; }
.enter.small:hover .knob { rotate: 135deg; }
.text { white-space: nowrap; }
.explore :deep(.anchor:not(.visible)) { pointer-events: none; }
.headline { position: absolute; z-index: var(--z-ui); right: var(--frame); bottom: calc(var(--frame) + 5rem); width: min(22rem, 60%); text-align: right; display: grid; gap: .5rem; transition: opacity .4s var(--ease); }
.headline.aside { opacity: 0; }
.index { font-size: .75rem; letter-spacing: .14em; color: var(--on-dark-muted); font-variant-numeric: tabular-nums; }
h1 { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1; font-weight: 600; text-wrap: balance; }
.summary { color: var(--on-dark-muted); font-size: .9375rem; }
.foot { position: absolute; z-index: var(--z-ui); left: var(--frame); right: var(--frame); bottom: var(--frame); display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
.hint { font-size: .75rem; letter-spacing: .06em; color: var(--on-dark-muted); }
@media (hover: hover) and (pointer: fine) { .hint { visibility: hidden; } } /* with a mouse, the cursor companion carries the hint */
.fade-enter-active, .fade-leave-active { transition: opacity .5s var(--ease); }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.title-enter-active, .title-leave-active { transition: opacity .35s var(--ease), transform .35s var(--ease); }
.title-enter-from { opacity: 0; transform: translateY(14px); }
.title-leave-to { opacity: 0; transform: translateY(-14px); }
@media (max-width: 800px) {
  .headline { left: var(--frame); right: var(--frame); top: 4.5rem; bottom: auto; width: auto; text-align: left; }
  .extra, .hint { display: none; }
  .foot { min-height: 3.25rem; }
}
</style>
