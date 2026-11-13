<script setup lang="ts">
// The whole experience on one screen: loader → tutorial → explore.
// Scrolling (or swiping, or the arrow keys) moves between topics; each topic gives the particles a new shape.
const { site, phase, zones, zone, zoneIndex, menuOpen, page, load, goToZone, openPage, closePage } = useSite();

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

// ---- moving between topics ----
const exploring = computed(() => phase.value === 'explore' && !menuOpen.value && !page.value);
let locked = false, travelled = 0;
function step(direction: number) {
  if (locked || !exploring.value) return;
  const next = zoneIndex.value + direction;
  if (next < 0 || next >= zones.value.length) return;
  goToZone(next); locked = true; travelled = 0;
  setTimeout(() => { locked = false; }, 900);
}
function onWheel(e: WheelEvent) {
  if (!exploring.value) return;
  travelled += e.deltaY;
  if (Math.abs(travelled) > 60) step(Math.sign(travelled));
}
let touchY: number | null = null;
function onTouchStart(e: TouchEvent) { touchY = e.touches[0].clientY; }
function onTouchEnd(e: TouchEvent) {
  if (touchY === null) return;
  const d = touchY - e.changedTouches[0].clientY; touchY = null;
  if (Math.abs(d) > 50) step(Math.sign(d));
}
function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') { if (page.value) closePage(); else menuOpen.value = false; }
  else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') step(1);
  else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') step(-1);
}
onMounted(() => window.addEventListener('keydown', onKey));
onBeforeUnmount(() => window.removeEventListener('keydown', onKey));

const wide = ref(true);
onMounted(() => { const q = window.matchMedia('(min-width: 801px)'); wide.value = q.matches; q.addEventListener('change', (e) => { wide.value = e.matches; }); });
const shift = computed(() => (page.value && wide.value ? -0.75 : 0)); // slide the shape aside while a page is open
const count = computed(() => (wide.value ? 10000 : 5000));

useHead(() => ({ title: page.value ? `${page.value.title} · ${site.value?.ui.brand}` : site.value?.ui.brand ?? 'P2630' }));
</script>

<template>
  <main class="page" @wheel.passive="onWheel" @touchstart.passive="onTouchStart" @touchend.passive="onTouchEnd">
    <ParticleStage :shape="zone?.shape ?? 'sphere'" :shift="shift" :count="count" />

    <template v-if="site">
      <header class="bar">
        <p class="brand">{{ site.ui.brand }}</p>
        <button v-show="phase === 'explore' && !page" type="button" class="pill" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">
          {{ menuOpen ? site.ui.close : site.ui.menu }}
        </button>
      </header>

      <Transition name="fade">
        <div v-if="phase === 'explore'" class="explore">
          <ZoneRail :zones="zones" :active="zoneIndex" @select="goToZone" />
          <Transition name="title" mode="out-in">
            <div :key="zoneIndex" class="headline" :class="{ aside: !!page }">
              <p class="index">{{ String(zoneIndex + 1).padStart(2, '0') }} / {{ String(zones.length).padStart(2, '0') }}</p>
              <h1>{{ zone.title }}</h1>
              <p class="summary">{{ zone.summary }}</p>
            </div>
          </Transition>
          <footer class="foot">
            <p class="hint">{{ site.ui.hintScroll }}<span class="extra"> · {{ site.ui.hintPointer }}</span></p>
            <button type="button" class="pill solid" @click="openPage(zone.pages[0].slug)">{{ site.ui.open }}<span aria-hidden="true">→</span></button>
          </footer>
        </div>
      </Transition>

      <TopicMenu :zones="zones" :open="menuOpen" :active="zoneIndex" @page="openPage" @zone="(i) => { goToZone(i); menuOpen = false; }" />
      <ContentPanel :page="page" :topic="zone?.title" :close-label="site.ui.close" @close="closePage" @go="openPage" />
      <Transition name="fade"><AppTutorial v-if="phase === 'tutorial'" :steps="site.ui.tutorial" @done="phase = 'explore'" /></Transition>
    </template>

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
.pill.solid { background: var(--on-dark); color: var(--stage-to); border-color: transparent; font-weight: 600; }
.pill.solid:hover { gap: 1rem; background: var(--on-dark); }
.pill:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.explore { position: absolute; inset: 0; pointer-events: none; }
.explore :deep(nav), .explore button { pointer-events: auto; }
.headline { position: absolute; z-index: var(--z-ui); right: var(--frame); bottom: calc(var(--frame) + 5rem); width: min(22rem, 60%); text-align: right; display: grid; gap: .5rem; transition: opacity .4s var(--ease); }
.headline.aside { opacity: 0; }
.index { font-size: .75rem; letter-spacing: .14em; color: var(--on-dark-muted); font-variant-numeric: tabular-nums; }
h1 { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1; font-weight: 600; text-wrap: balance; }
.summary { color: var(--on-dark-muted); font-size: .9375rem; }
.foot { position: absolute; z-index: var(--z-ui); left: var(--frame); right: var(--frame); bottom: var(--frame); display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
.hint { font-size: .75rem; letter-spacing: .06em; color: var(--on-dark-muted); }
.fade-enter-active, .fade-leave-active { transition: opacity .5s var(--ease); }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.title-enter-active, .title-leave-active { transition: opacity .35s var(--ease), transform .35s var(--ease); }
.title-enter-from { opacity: 0; transform: translateY(14px); }
.title-leave-to { opacity: 0; transform: translateY(-14px); }
@media (max-width: 800px) {
  .headline { left: var(--frame); right: var(--frame); top: 4.5rem; bottom: auto; width: auto; text-align: left; }
  .extra { display: none; }
}
</style>
