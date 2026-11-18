<script setup lang="ts">
// The whole experience on one screen: loader → tutorial → explore.
// Scrolling (or swiping, or the arrow keys) travels between topics in a loop; the particles re-form into each topic's shape on the way.
import { createScrollTravel } from '~/lib/scrollTravel';
import { sound } from '~/lib/sound';

const { site, locales, locale, phase, zones, zone, zoneIndex, menuOpen, page, focused, fromMenu, load, setLocale, goToZone, openPage, closePage } = useSite();
// the logo leads home: closes whatever is open and goes back to the first topic (a real link, so it also opens in a new tab)
// the centre button opens the topic's first page straight away (the book's token still opens its row of pages)
function openTopic() { const first = zone.value?.pages[0]; if (first) openPage(first.slug); }
function goHome() { if (page.value) { fromMenu.value = false; closePage(); } menuOpen.value = false; focused.value = false; if (phase.value === 'explore') goToZone(0); }
const base = useRuntimeConfig().app.baseURL;

// ---- loading: real content load plus a short minimum, so the opening never flashes by ----
const progress = ref(0);
const loaded = ref(false);
onMounted(async () => {
  const started = performance.now(), MIN = 1400;
  const tick = setInterval(() => { progress.value = Math.min(loaded.value ? 1 : 0.9, (performance.now() - started) / MIN); }, 60); // the opening screen traces this
  await load();
  loaded.value = true;
  await new Promise((r) => setTimeout(r, Math.max(0, MIN - (performance.now() - started)) + 250));
  clearInterval(tick); progress.value = 1;
});
// the opening screen says when its opening has played; then the experience starts behind it while it opens up
function onLoaderReady() { phase.value = page.value ? 'explore' : 'tutorial'; } // a direct link to a page skips the introduction
const loaderGone = ref(false), revealed = ref(false); // revealed: the opening has spread far enough for the welcome card to come in

// ---- moving between topics: scrolling adds speed, the journey settles on the nearest topic ----
const exploring = computed(() => phase.value === 'explore' && !menuOpen.value && !page.value && !focused.value);
const points = computed(() => (focused.value && zone.value ? zone.value.pages.map((p) => ({ slug: p.slug, title: p.title, at: p.at, image: p.image })) : []));
// inside a topic: on the globe the pages are points on its surface; on every other shape they are tokens below it (wide screens) or points on it (phones)
watch(zoneIndex, () => { if (!page.value) focused.value = false; }); // going to another topic leaves the entered one
const settled = ref(true);

// ---- sound: cues for buttons and travel, the background music once the visitor has entered ----
const soundOff = ref(false);
onMounted(() => {
  sound.init(`${base}audio/ambient`); soundOff.value = sound.muted;
  const isControl = (e: Event) => (e.target as Element | null)?.closest?.('button, a');
  document.addEventListener('click', (e) => { if (isControl(e)) sound.click(); if (phase.value === 'explore' && !soundOff.value) sound.startAmbient(); }); // a browser may refuse to start the music without a click: any click starts it
  document.addEventListener('pointerover', (e) => { if ((e as PointerEvent).pointerType === 'mouse' && isControl(e)) sound.hover(); });
});
function toggleSound() { soundOff.value = !soundOff.value; sound.setMuted(soundOff.value); if (!soundOff.value) sound.startAmbient(); }
watch(phase, (p) => { if (p === 'explore') sound.startAmbient(); });
const travel = createScrollTravel(6, (i) => { zoneIndex.value = i; sound.travel(); }, (s) => { settled.value = s; });
watch(() => zones.value.length, (n) => { if (n) travel.stops = n; });
watch(exploring, (on) => travel.setEnabled(on), { immediate: true });
watch(zoneIndex, (i) => { if (travel.nearest() !== i) travel.goTo(i); }); // rail, menu and page links

// the "scroll to explore" companion is a one-time hint, as on the reference: it goes for good once the visitor has scrolled
const scrolled = ref(false);
function onWheel(e: WheelEvent) { travel.impulse(e.deltaY); if (exploring.value && Math.abs(e.deltaY) > 2) scrolled.value = true; }
let touchY: number | null = null;
function onTouchStart(e: TouchEvent) { touchY = e.touches[0].clientY; }
function onTouchMove(e: TouchEvent) { if (touchY === null) return; const y = e.touches[0].clientY; travel.impulse((touchY - y) * 4); touchY = y; if (exploring.value) scrolled.value = true; }
function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') { if (page.value) closePage(); else if (menuOpen.value) menuOpen.value = false; else focused.value = false; }
  else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') travel.step(1);
  else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') travel.step(-1);
}
onMounted(() => window.addEventListener('keydown', onKey));
onBeforeUnmount(() => window.removeEventListener('keydown', onKey));

const wide = ref(true);
onMounted(() => { const q = window.matchMedia('(min-width: 801px)'); wide.value = q.matches; q.addEventListener('change', (e) => { wide.value = e.matches; }); });
const tokenHover = ref(false), tileHover = ref(-1);
// only the book topic has 3D tokens (its own token, and its pages as tokens inside); every other topic shows its pages as points on the shape
const hasToken = computed(() => zone.value?.shape === 'chain');
const asTokens = computed(() => wide.value && hasToken.value);
const shift = computed(() => (!wide.value ? 0 : page.value ? 0.37 : menuOpen.value ? 0.25 : 0)); // slide the picture aside while a page or the menu is open (with a page, into the strip left of the sheet)
const count = computed(() => (wide.value ? 42000 : 15000));
const shapes = computed(() => (zones.value.length ? zones.value.map((z) => z.shape) : (['globe'] as const).slice()));

// tab title and description follow the open page (the tags in nuxt.config.ts are the site-wide defaults)
useHead(() => {
  const brand = site.value?.ui.brand ?? 'MCMC P2630', description = page.value?.lead ?? site.value?.ui.description ?? '';
  return { title: page.value ? `${page.value.title} · ${brand}` : brand, meta: [{ name: 'description', content: description }, { property: 'og:description', content: description }] };
});
</script>

<template>
  <main class="page" @wheel.passive="onWheel" @touchstart.passive="onTouchStart" @touchmove.passive="onTouchMove">
    <ParticleStage :shapes="shapes" :travel="travel" :active="phase === 'explore'" :gallery="phase === 'tutorial'" :shift="shift" :count="count" :land-url="`${base}data/land.json`" :focused="focused" :points="asTokens ? [] : points" :card="wide" :token="hasToken && !page && !menuOpen && !focused && phase === 'explore'" :token-hover="tokenHover" :tiles="focused && asTokens && !page && !menuOpen ? points.length : 0" :tile-hover="tileHover" @pick="openPage" />

    <template v-if="site">
      <header class="bar">
        <a v-show="phase === 'explore'" class="brand" :href="base" @click.prevent="goHome"><img :src="`${base}logo-badge.png`" :alt="site.ui.brand" width="286" height="106" decoding="async"></a>
        <span class="bar-end">
        <template v-if="!wide">
        <LanguageSwitch v-show="phase === 'explore' && !menuOpen && !page && locales.length > 1" :locales="locales" :current="locale" :label="site.ui.language" @pick="setLocale" />
        <button v-show="phase === 'explore' && !menuOpen" type="button" class="glass square" :aria-label="soundOff ? site.ui.soundOn : site.ui.soundOff" :aria-pressed="!soundOff" @click="toggleSound">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.5v5h3.5L12 18V6L7.5 9.5H4z" /><path v-if="soundOff" d="M16 9.5l5 5M21 9.5l-5 5" /><path v-else d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11" /></svg>
        </button>
        </template>
        <button v-show="phase === 'explore' && !page && !menuOpen" type="button" class="glass topics" :class="{ square: !wide }" :aria-label="wide ? undefined : site.ui.menuShort" aria-haspopup="dialog" @click="menuOpen = true">
          <svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="1.5" r="1" /><circle cx="6" cy="10.5" r="1" /><circle cx="1.5" cy="6" r="1" /><circle cx="10.5" cy="6" r="1" /><circle cx="2.8" cy="2.8" r=".7" /><circle cx="9.2" cy="9.2" r=".7" /></svg><span v-if="wide">{{ site.ui.menu }}</span>
        </button>
        </span>
      </header>

      <Transition name="fade">
        <div v-if="phase === 'explore'" class="explore">
          <ZoneRail :zones="zones" :active="zoneIndex" :travel="travel" class="fades" :class="{ gone: focused || menuOpen }" @select="goToZone" />
          <TopicToken :icon="zone.shape" :label="`${site.ui.open}: ${zone.title}`" :visible="hasToken && !page && !menuOpen && !focused" @open="focused = true; tokenHover = false" @hover="(on) => { tokenHover = on; }" />
          <Transition name="fade"><RiseText v-if="focused && !menuOpen" :key="zone.title" tag="p" class="focus-title" :text="zone.title" :delay="300" /></Transition>
          <Transition name="fade"><PageTokens v-if="focused && asTokens && !page && !menuOpen" :pages="points" @pick="openPage" @hover="(i) => { tileHover = i; }" /></Transition>
          <LevelSlider v-if="focused && !page && !menuOpen && !wide" :pages="points" @pick="openPage" />
          <Transition name="title" mode="out-in">
            <div :key="zoneIndex" class="headline" :class="{ aside: !!page || menuOpen || focused }">
              <p class="index">{{ String(zoneIndex + 1).padStart(2, '0') }} / {{ String(zones.length).padStart(2, '0') }}</p>
              <h1>{{ zone.title }}</h1>
              <p class="summary">{{ zone.summary }}</p>
            </div>
          </Transition>
          <footer class="foot">
            <p class="hint">{{ focused ? site.ui.hintFocus : site.ui.hintScroll }}<span v-if="!focused" class="extra"> · {{ site.ui.hintPointer }}</span></p>
                        <div v-if="wide" v-show="!page && !menuOpen" class="foot-end">
              <nav v-if="site.extras?.length" class="legal" aria-label="Legal">
                <button v-for="p in site.extras" :key="p.slug" type="button" @click="openPage(p.slug)">{{ p.title }}</button>
              </nav>
              <LanguageSwitch v-if="locales.length > 1" class="lang-foot" :locales="locales" :current="locale" :label="site.ui.language" plain @pick="setLocale" />
              <button v-show="true" type="button" class="glass square" :aria-label="soundOff ? site.ui.soundOn : site.ui.soundOff" :aria-pressed="!soundOff" @click="toggleSound">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.5v5h3.5L12 18V6L7.5 9.5H4z" /><path v-if="soundOff" d="M16 9.5l5 5M21 9.5l-5 5" /><path v-else d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11" /></svg>
        </button>
            </div>
            <button v-show="!page && !menuOpen" type="button" class="enter fill-btn" :class="{ small: focused, end: focused }" :aria-label="focused ? site.ui.close : `${site.ui.open}: ${zone.title}`" @click="focused ? (focused = false) : openTopic()">
              <span class="fill" aria-hidden="true" /><span class="knob" aria-hidden="true" /><span class="text label">{{ focused ? site.ui.close : zone.title }}</span>
            </button>
          </footer>
        </div>
      </Transition>

      <TopicMenu :zones="zones" :extras="site.extras ?? []" :open="menuOpen" :active="zoneIndex" :close-label="site.ui.close" @page="(slug) => openPage(slug, true, true)" @zone="(i) => { goToZone(i); menuOpen = false; }" @close="menuOpen = false" />
      <ContentPanel :page="page" :topic="site.extras?.some((p) => p.slug === page?.slug) ? site.ui.brand : zone?.title" :close-label="site.ui.close" @close="closePage" @go="(slug) => openPage(slug, true, fromMenu)" />
      <Transition name="fade"><footer v-if="phase === 'tutorial' && revealed && wide" class="foot tutorial-foot"><div class="foot-end">              <nav v-if="site.extras?.length" class="legal" aria-label="Legal">
                <button v-for="p in site.extras" :key="p.slug" type="button" @click="openPage(p.slug)">{{ p.title }}</button>
              </nav>
              <LanguageSwitch v-if="locales.length > 1" class="lang-foot" :locales="locales" :current="locale" :label="site.ui.language" plain @pick="setLocale" />
              <button v-show="true" type="button" class="glass square" :aria-label="soundOff ? site.ui.soundOn : site.ui.soundOff" :aria-pressed="!soundOff" @click="toggleSound">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.5v5h3.5L12 18V6L7.5 9.5H4z" /><path v-if="soundOff" d="M16 9.5l5 5M21 9.5l-5 5" /><path v-else d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11" /></svg>
        </button>
            </div></footer></Transition>
      <Transition name="fade"><AppTutorial v-if="phase === 'tutorial' && revealed" :steps="site.ui.tutorial" @done="phase = 'explore'" /></Transition>
    </template>

    <AppCursor v-if="site" :hint="focused ? site.ui.cursorFocus : site.ui.cursorExplore" :enabled="phase === 'explore' && !menuOpen && (focused || (!scrolled && zoneIndex === 0))" />
    <AppLoader v-if="!loaderGone" :progress="progress" :label="site?.ui.loading ?? 'Loading'" :brand="site?.ui.brand ?? 'MCMC P2630'" :done="phase !== 'loading'" @ready="onLoaderReady" @reveal="revealed = true" @gone="loaderGone = true; revealed = true" />
  </main>
</template>

<style scoped>
.page { position: relative; height: 100dvh; overflow: hidden; }
.bar { position: absolute; z-index: var(--z-bar); top: var(--frame); left: var(--frame); right: var(--frame); display: flex; justify-content: space-between; align-items: center; min-height: 2.5rem; pointer-events: none; }
.bar > * { pointer-events: auto; }
/* the client's logo: white line art, large and set off from the particles behind it by a soft dark halo */
.brand { display: block; flex: none; width: var(--logo-width); border-radius: 0 16px 0 16px; line-height: 0; filter: drop-shadow(0 8px 24px color-mix(in srgb, var(--stage-to) 55%, transparent)); transition: transform .3s var(--ease); } /* the client's badge: its own light fill and gradient frame carry it on the dark stage; a soft shadow lifts it off the particles */
.brand img { width: 100%; height: auto; }
.brand:hover { transform: scale(1.04); }
.brand:focus-visible { outline: var(--focus-ring-width) solid var(--focus-ring-color); outline-offset: var(--focus-ring-offset); }
/* glass: a see-through pane with a soft inner glow; two opposite corners rounded, like the token */
.glass { display: inline-flex; align-items: center; justify-content: center; gap: .65rem; height: 60px; padding: 0 1.3rem; border: 0; border-radius: 0 14px; background: color-mix(in srgb, var(--on-dark) 12%, transparent); box-shadow: 0 2px 14px rgb(0 0 0 / .04), inset 4px 4px 14px 2px color-mix(in srgb, var(--on-dark) 12%, transparent), inset 0 0 0 1px color-mix(in srgb, var(--on-dark) 14%, transparent); backdrop-filter: blur(12px); color: var(--on-dark); cursor: pointer; transition: background .3s var(--ease); }
.glass:hover { background: color-mix(in srgb, var(--on-dark) 20%, transparent); }
.glass:focus-visible { outline: var(--focus-ring-width) solid var(--focus-ring-color); outline-offset: var(--focus-ring-offset); }
.glass.square { width: 60px; padding: 0; }
.topics svg { width: var(--icon-size); height: var(--icon-size); fill: currentColor; }
.tutorial-foot { z-index: calc(var(--z-tutorial) + 1); justify-content: flex-end; }
.foot-end { display: flex; align-items: center; gap: 1.5rem; margin-left: auto; pointer-events: auto; }
.pill { display: inline-flex; align-items: center; gap: .6rem; padding: .6rem 1.2rem; border-radius: 999px; border: 1px solid var(--glass-line); background: var(--glass); backdrop-filter: blur(12px); cursor: pointer; transition: background .25s var(--ease), color .25s var(--ease), gap .25s var(--ease); }
.pill:hover { background: color-mix(in srgb, var(--on-dark) 18%, transparent); }
.bar { gap: .75rem; }
.bar-end { display: flex; align-items: center; gap: .5rem; }
.pill.square { width: 2.5rem; height: 2.5rem; padding: 0; justify-content: center; }
.pill.solid { background: var(--on-dark); color: var(--accent-deep); border-color: transparent; }
.pill.solid:hover { gap: 1rem; background: var(--on-dark); }
.pill:focus-visible { outline: var(--focus-ring-width) solid var(--focus-ring-color); outline-offset: var(--focus-ring-offset); }
.explore { position: absolute; inset: 0; pointer-events: none; }
.explore :deep(nav), .explore button { pointer-events: auto; }
.fades { transition: opacity .45s var(--ease), visibility 0s; }
.fades.gone { opacity: 0; visibility: hidden; transition: opacity .45s var(--ease), visibility 0s .45s; }
.focus-title { position: absolute; z-index: var(--z-ui); top: calc(var(--frame) + .55rem); left: 50%; translate: -50% 0; font-family: var(--font-display); font-weight: var(--weight-subheading); font-size: var(--type-subheading); letter-spacing: .01em; white-space: nowrap; }
/* centre button: enters the topic; once inside it shrinks into "Close" */
.enter { position: absolute; left: 50%; bottom: 2.75rem; /* lifted clear of the footer row, so it reads as the scene's own action */ translate: -50% 0; display: inline-flex; align-items: center; border: 0; border-radius: 999px; background: var(--on-dark); color: var(--text); /* 59 px tall, a 49 px knob; type and icon come from the button tokens */ cursor: pointer; box-shadow: 0 12px 34px rgb(0 0 0 / .28); transition: padding .4s var(--ease), background .4s var(--ease), color .4s var(--ease), box-shadow .3s var(--ease); }
.enter:hover { box-shadow: 0 16px 44px rgb(0 0 0 / .4); }
.enter:focus-visible { outline: var(--focus-ring-width) solid var(--focus-ring-color); outline-offset: var(--focus-ring-offset); }
.knob { position: relative; flex: none; width: 49px; height: 49px; border-radius: 50%; background: var(--accent-deep); transition: rotate .45s var(--ease), background .3s var(--ease); }
.knob::before, .knob::after { content: ''; position: absolute; left: 50%; top: 50%; width: var(--icon-size); height: var(--icon-stroke); margin: calc(var(--icon-stroke) / -2) 0 0 calc(var(--icon-size) / -2); border-radius: 2px; background: var(--on-dark); }
.knob::after { rotate: 90deg; }
.enter:hover .knob { rotate: 90deg; }
.enter.small { flex-direction: row-reverse; background: var(--glass); color: var(--on-dark); backdrop-filter: blur(12px); border: 1px solid var(--glass-line); box-shadow: none; }
.enter.small .knob { rotate: 45deg; }
.enter.small:hover .knob { rotate: 135deg; }
.text { white-space: nowrap; }
.legal { display: flex; gap: 1rem; }
.legal button { padding: .4rem 0; border: 0; background: none; color: var(--on-dark); font-size: var(--button-font-size); font-weight: var(--button-font-weight); cursor: pointer; transition: color .2s var(--ease); }
.legal button:hover { color: var(--on-dark); }
.legal button:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* the topic's number, title and summary are kept for screen readers and search engines only: on screen the title lives in the button at the bottom */
.headline { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
.headline.aside { opacity: 0; }
.index { font-size: var(--type-caption); letter-spacing: .14em; color: var(--on-dark-muted); font-variant-numeric: tabular-nums; }
h1 { font-family: var(--font-display); font-size: var(--type-display); line-height: var(--leading-display); font-weight: var(--weight-display); text-wrap: balance; }
.summary { color: var(--on-dark-muted); font-size: var(--type-body); }
.foot { position: absolute; z-index: var(--z-ui); left: var(--frame); right: var(--frame); bottom: var(--frame); display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
.hint { font-size: var(--type-caption); letter-spacing: .06em; color: var(--on-dark-muted); }
@media (hover: hover) and (pointer: fine) { .hint { visibility: hidden; } } /* with a mouse, the cursor companion carries the hint */
.fade-enter-active, .fade-leave-active { transition: opacity .5s var(--ease); }
/* after the welcome card: the header and rail come first, the token once the globe has formed, the centre button last (as on the reference) */
.explore.fade-enter-active { transition-duration: .9s; transition-delay: .4s; }
.explore .enter { animation: late 3s backwards; } /* .explore is created once, when the experience starts */
@media (prefers-reduced-motion: reduce) { .explore .enter { animation: none; } }
@keyframes late { 0%, 75% { opacity: 0; scale: .3; } 100% { opacity: 1; scale: 1; } }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.title-enter-active, .title-leave-active { transition: opacity .35s var(--ease), transform .35s var(--ease); }
.title-enter-from { opacity: 0; transform: translateY(14px); }
.title-leave-to { opacity: 0; transform: translateY(-14px); }
@media (max-width: 800px) {
  .extra, .hint, .legal { display: none; } /* on phones the legal links live in the menu */
  .foot { min-height: 3.25rem; }
  .brand { width: var(--logo-width-compact); }
  .focus-title { top: calc(var(--frame) + 58px); } /* below the header's buttons, not behind them */
  .glass { height: 44px; padding: 0 1rem; border-radius: 0 11px; }
  .glass.square { width: 44px; }
}
</style>
