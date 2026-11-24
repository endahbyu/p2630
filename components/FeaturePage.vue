<script setup lang="ts">
// A page with the long editorial layout (`"layout": "feature"` in the content), drawn from its design at a 1055 px wide sheet:
//   · a small label over the title, a short underline in the brand's three colours, a rule across the sheet;
//   · a wide picture with its corners cut (top-right and bottom-left rounded) and large white words over it;
//   · then its blocks: intro (label and heading beside paragraphs), quote (portrait beside a quote),
//     pillars (a tinted box with icon cards), framework (introduction beside large figures),
//     grid (three columns of points; `boxed` sets them in a grey box with large red titles),
//     mission (a numbered mission: heading, text and a bulleted list beside a picture; missions in a row are set apart by a rule).
// Spacing follows the design at full width and tightens with the sheet (container units), down to a single column on phones.
import type { Page, Block } from '~/composables/useSite';
const props = defineProps<{ page: Page }>();
const emit = defineEmits<{ go: [slug: string] }>();
const baseURL = useRuntimeConfig().app.baseURL;
const asset = (src?: string) => (src ? (/^(https?:)?\/\//.test(src) ? src : baseURL + src.replace(/^\//, '')) : '');
const hero = computed(() => { const b = props.page.blocks[0]; return b?.type === 'figure' ? b : null; });
const rest = computed<Block[]>(() => (hero.value ? props.page.blocks.slice(1) : props.page.blocks));
// where the picture sits in its box (left, top, width, height in % of the box), as placed in the design; by default slightly larger than the box, near its top
const heroFrame = computed(() => { const [l, t, w, h] = hero.value?.frame ?? [.297, -1.029, 101.386, 125.926]; return { left: `${l}%`, top: `${t}%`, width: `${w}%`, height: `${h}%` }; });

// card icons, as exported from the design; each layer keeps its own size and sits at its place in the icon's box
type Layer = { src: string; w: number; h: number; x: number; y: number };
const dir = 'images/what-is-p2630/';
const ICONS: Record<string, { w: number; h: number; layers: Layer[] }> = {
  connected: { w: 50, h: 60.4927, layers: [
    { src: 'connected-1.svg', w: 43.5699, h: 40.3322, x: 0, y: 20.16 },
    { src: 'connected-2.svg', w: 43.3438, h: 39.8334, x: 6.66, y: 0 },
    { src: 'connected-3.svg', w: 12.8509, h: 16.4563, x: 18.07, y: 29.89 },
    { src: 'connected-4.svg', w: 10.3237, h: 16.3981, x: 10.79, y: 24.92 },
    { src: 'connected-5.svg', w: 10.3972, h: 16.3184, x: 27.78, y: 24.92 },
    { src: 'connected-6.svg', w: 10.414, h: 16.5042, x: 31.58, y: 15.82 },
    { src: 'connected-7.svg', w: 10.3918, h: 16.3556, x: 7.31, y: 16.23 },
    { src: 'connected-8.svg', w: 7.94893, h: 13.5989, x: 20.71, y: 15.82 },
  ] },
  inclusive: { w: 50, h: 52.5433, layers: [{ src: 'inclusive.svg', w: 50, h: 52.5433, x: 0, y: 0 }] },
  competitive: { w: 50, h: 59.4147, layers: [{ src: 'competitive.svg', w: 50, h: 59.4147, x: 0, y: 0 }] },
  'future-ready': { w: 50, h: 64.5321, layers: [{ src: 'future-ready.svg', w: 50, h: 64.5321, x: 0, y: 0 }] },
};
</script>

<template>
  <article class="feature">
    <header class="head">
      <p class="eyebrow-top">{{ page.lead }}</p>
      <RiseText tag="h2" class="title" :text="page.title" :delay="450" />
      <span class="underline" aria-hidden="true" />
    </header>
    <hr class="sheet-rule">

    <figure v-if="hero" class="hero box">
      <img v-if="hero.src" :src="asset(hero.src)" :alt="hero.caption" :style="heroFrame" />
      <p v-if="hero.title" class="hero-title">{{ hero.title }}</p>
    </figure>

    <template v-for="(b, i) in rest" :key="i">
      <section v-if="b.type === 'intro'" class="intro inset">
        <div>
          <p class="eyebrow">{{ b.eyebrow }}</p>
          <h3 class="heading"><template v-for="(line, k) in b.heading" :key="k"><br v-if="k">{{ line }}</template></h3>
        </div>
        <div class="copy"><p v-for="(t, k) in b.text" :key="k">{{ t }}</p></div>
      </section>

      <section v-else-if="b.type === 'quote'" class="quote">
        <div class="portrait">
          <img class="backdrop" :src="asset(b.src)" alt="" loading="lazy" />
          <img class="cutout" :src="asset(b.cutout)" :alt="b.name[0]" loading="lazy" />
        </div>
        <div class="quote-body">
          <p class="eyebrow">{{ b.eyebrow }}</p>
          <blockquote class="heading">{{ b.quote }}</blockquote>
          <p class="name"><template v-for="(line, k) in b.name" :key="k"><br v-if="k">{{ line }}</template></p>
          <p class="copy">{{ b.text }}</p>
          <button v-if="b.button" type="button" class="pill" @click="emit('go', b.button.to)">{{ b.button.label }}</button>
        </div>
      </section>

      <section v-else-if="b.type === 'pillars'" class="pillars box inset">
        <p class="eyebrow">{{ b.eyebrow }}</p>
        <h3 class="heading">{{ b.heading }}</h3>
        <ul class="cards">
          <li v-for="item in b.items" :key="item.title">
            <span class="card-icon" aria-hidden="true">
              <span v-if="ICONS[item.icon]" class="glyph" :style="{ width: `${ICONS[item.icon].w}px`, height: `${ICONS[item.icon].h}px` }">
                <img v-for="l in ICONS[item.icon].layers" :key="l.src" :src="asset(dir + l.src)" alt="" :width="l.w" :height="l.h" :style="{ left: `${l.x}px`, top: `${l.y}px` }" />
              </span>
            </span>
            <p class="card-title">{{ item.title }}</p>
            <p class="copy">{{ item.text }}</p>
          </li>
        </ul>
      </section>

      <section v-else-if="b.type === 'framework'" class="framework inset">
        <p class="eyebrow">{{ b.eyebrow }}</p>
        <div class="framework-row">
          <div>
            <h3 class="heading">{{ b.heading }}</h3>
            <p class="copy framework-text">{{ b.text }}</p>
          </div>
          <ul class="figures">
            <li v-for="item in b.items" :key="item.value"><p class="figure-value">{{ item.value }}</p><p class="copy">{{ item.text }}</p></li>
          </ul>
        </div>
      </section>

      <section v-else-if="b.type === 'mission'" class="mission inset">
        <div class="mission-text">
          <p class="mission-label">{{ b.label }}</p>
          <h3 class="heading">{{ b.heading }}</h3>
          <p class="copy mission-copy">{{ b.text }}</p>
          <p class="eyebrow list-label">{{ b.listLabel }}</p>
          <ul class="focus"><li v-for="item in b.items" :key="item">{{ item }}</li></ul>
        </div>
        <div class="mission-picture">
          <img v-if="b.src" :src="asset(b.src)" :alt="b.caption ?? ''" loading="lazy" />
        </div>
      </section>

      <section v-else-if="b.type === 'grid'" class="grid inset" :class="{ box: b.boxed, boxed: b.boxed }">
        <p class="eyebrow">{{ b.eyebrow }}</p>
        <h3 class="heading">{{ b.heading }}</h3>
        <hr v-if="b.boxed" class="grid-rule">
        <ul class="points">
          <li v-for="item in b.items" :key="item.title"><p class="point-title">{{ item.title }}</p><p class="copy">{{ item.text }}</p></li>
        </ul>
      </section>
    </template>
  </article>
</template>

<style scoped>
/* measurements are the design's, at its 1055 px sheet: boxes sit 23 px in from the sheet's edges, text 82 px (59 px inside a box).
   Type hierarchy (300 / 400 / 500 only, nothing bold):
     page title 36/500 blue · large figures 36/300 navy or red · section headings 24/500 blue ·
     card and point titles 16/500 grey · section labels 16/400 · running text 14/400 */
.feature { display: block; justify-items: normal; /* the sheet centres its own article's children in a grid; this page lays itself out */ container-type: inline-size; --box-x: clamp(0px, 2.18cqi, 23px); --pad: clamp(1.25rem, 5.6cqi, 59px); --radius: clamp(1.5rem, 3.8cqi, 2.5rem); color: var(--feature-text); }
.box { border-radius: 0 var(--radius); margin-inline: var(--box-x); }
.inset { padding-inline: calc(var(--box-x) + var(--pad)) calc(var(--box-x) + 8px); } /* text runs almost to the boxes' right edge, as in the design */
.box.inset { padding-inline: var(--pad); }
/* the brand's three colours, as on the title's underline */
.feature { --brand-sweep: var(--feature-blue) 0, var(--feature-red) 54.3%, color-mix(in srgb, var(--feature-gold) 80%, transparent) 96.2%; }
.eyebrow, .eyebrow-top { font-size: var(--type-feature-label); line-height: normal; color: var(--feature-label); }
.heading { margin: 0; font-family: var(--font-display); font-size: var(--type-feature-heading); line-height: normal; font-weight: var(--font-weight-medium); color: var(--feature-blue); text-wrap: balance; }
.eyebrow + .heading, .eyebrow + div > .heading:first-child { margin-top: 10px; }
.copy { font-size: var(--type-feature-body); line-height: 1.45; color: var(--feature-text); text-wrap: pretty; } /* paragraphs run to several lines: a little more air than the design's `normal` (≈1.33) keeps them easy to read */
ul { list-style: none; margin: 0; padding: 0; }

/* header: label, title, underline, then a rule across the sheet */
.head { display: grid; justify-items: center; padding-top: 42px; text-align: center; }
.eyebrow-top { font-size: var(--type-feature-body); }
.title { margin-top: 12px; font-family: var(--font-display); font-size: var(--type-feature-display); line-height: normal; font-weight: var(--font-weight-medium); color: var(--feature-blue); text-wrap: balance; }
.underline { width: 156px; height: 3px; margin-top: 10px; background: linear-gradient(90deg, var(--brand-sweep)); }
.sheet-rule { margin: 18px -8px 0; border: 0; border-top: 1px solid var(--feature-line); }

/* the wide picture: the image is placed as in the design (slightly larger than the box, anchored near its top) */
.hero { position: relative; margin-top: 34px; aspect-ratio: 1010 / 486; overflow: hidden; background: var(--feature-placeholder); } /* grey until a picture is given, as in the design */
/* a soft shade along the foot of the picture, so the white title stays readable on any photo and on the grey placeholder */
.hero::after { content: ''; position: absolute; inset: 45% 0 0; background: linear-gradient(to bottom, transparent, rgb(0 0 0 / .5)); pointer-events: none; }
.hero img { position: absolute; max-width: none; object-fit: cover; } /* placed by heroFrame */
.hero-title { position: absolute; left: var(--pad); bottom: clamp(1rem, 4.4cqi, 46px); z-index: 1; margin: 0; font-family: var(--font-display); font-size: var(--type-feature-display); line-height: normal; font-weight: var(--font-weight-medium); color: var(--feature-paper); }

/* intro: label and heading on the left, paragraphs on the right */
.intro { display: grid; grid-template-columns: minmax(0, 415fr) minmax(0, 528fr); column-gap: 0; margin-top: clamp(2rem, 4.9cqi, 52px); }
.intro .heading { padding-right: 1rem; }
.intro .copy { display: grid; gap: 19px; padding-top: 35px; }

/* quote: the portrait (a backdrop with the person cut out over it) beside the quote */
.quote { display: grid; grid-template-columns: minmax(0, 366fr) minmax(0, 576fr); column-gap: clamp(1rem, 2.5cqi, 26px); margin: clamp(2rem, 4.6cqi, 48px) calc(var(--box-x) + 11px) 0; }
.portrait { position: relative; aspect-ratio: 366 / 415; overflow: hidden; border-radius: 0 var(--radius); }
.portrait img { position: absolute; max-width: none; object-fit: cover; }
.backdrop { left: -108.44%; top: -59.76%; width: 286.07%; height: 315.69%; }
.cutout { left: 9.016%; top: 13.735%; width: 78.689%; height: 98.07%; }
.quote-body { display: flex; flex-direction: column; align-items: flex-start; padding-top: 13px; }
.quote blockquote { margin: 19px 0 0; }
.name { margin-top: 16px; font-size: var(--type-feature-label); line-height: normal; font-weight: var(--font-weight-medium); color: var(--feature-text); }
.quote-body .copy { margin-top: 19px; max-width: 576px; }
/* the small button size (fill-button.css): 40 px tall, 14–15 px label */
.pill { margin-top: auto; min-width: 211px; height: var(--button-sm-height); padding: 0 var(--button-sm-pad); border: 0; border-radius: 999px; background: var(--feature-ink); color: var(--feature-paper); font-size: var(--button-sm-font); cursor: pointer; transition-property: background-color, scale; transition-duration: .3s, .15s; transition-timing-function: var(--ease), ease-out; }
@media (hover: hover) { .pill:hover { background: var(--feature-blue); } }
@media (prefers-reduced-motion: no-preference) { .pill:active { scale: .96; } }
.pill:focus-visible { outline: var(--focus-ring-width) solid var(--focus-ring-color-on-light); outline-offset: var(--focus-ring-offset); }

/* pillars: a tinted box with a row of icon cards */
.pillars { margin-top: clamp(2.5rem, 6.5cqi, 69px); padding-block: 29px 36px; background: var(--feature-sky); }
.pillars .heading { max-width: 910px; }
.cards { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 2rem 1rem; margin-top: 40px; }
.cards li { max-width: 182px; }
.card-icon { display: grid; place-items: center; width: 99px; height: 83px; border: 3px solid transparent; border-radius: 0 30px; background: linear-gradient(var(--feature-paper), var(--feature-paper)) padding-box, linear-gradient(135deg, var(--brand-sweep)) border-box; } /* the outline runs blue to red to gold, as rendered in the design */
.glyph { position: relative; display: block; }
.glyph img { position: absolute; display: block; max-width: none; }
.card-title, .point-title { margin-top: 15px; font-size: var(--type-feature-label); line-height: normal; font-weight: var(--font-weight-medium); color: var(--feature-text); }
.cards .copy, .points .copy { margin-top: 9px; }

/* framework: introduction beside a list of large figures */
.framework { margin-top: clamp(2.5rem, 4.4cqi, 46px); }
.framework-row { display: grid; grid-template-columns: minmax(0, 507fr) minmax(0, 436fr); margin-top: 10px; }
.framework .heading, .framework-text { max-width: 414px; padding-right: 1rem; box-sizing: content-box; }
.framework-text { margin-top: 16px; }
.figures { display: grid; gap: 37px; align-content: start; }
.figure-value { font-family: var(--font-display); font-size: var(--type-feature-display); line-height: normal; font-weight: var(--font-weight-light); color: var(--feature-navy); }
.figures .copy { margin-top: 5px; max-width: 410px; }

/* mission: the text beside a picture whose foot lines up with the list's; a rule sets one mission apart from the next */
.mission { display: grid; grid-template-columns: minmax(0, 446fr) minmax(0, 471fr); align-items: end; margin-top: clamp(3rem, 10cqi, 100px); }
.mission { padding-right: calc(var(--box-x) + clamp(8px, 3.2cqi, 33px)); } /* the picture ends a little short of the text's right edge, as in the design */
.mission + .mission { margin-top: clamp(2rem, 5.6cqi, 59px); }
.mission + .mission::before { content: ''; grid-column: 1 / -1; margin-bottom: clamp(1.5rem, 3.1cqi, 33px); border-top: 1px solid var(--feature-line); }
.mission-text { padding-right: 1.5rem; }
.mission-label { font-family: var(--font-display); font-size: var(--type-feature-display); line-height: normal; font-weight: var(--font-weight-light); color: var(--feature-navy); }
.mission .heading { max-width: 414px; margin-top: 10px; }
.mission-copy { max-width: 410px; margin-top: 18px; }
.list-label { margin-top: 38px; }
.focus { margin-top: 5px; padding-left: 24px; list-style: disc; font-size: var(--type-feature-label); line-height: normal; color: var(--feature-text); }
.mission-picture { position: relative; aspect-ratio: 471 / 409; overflow: hidden; border-radius: 0 var(--radius); background: var(--feature-placeholder); } /* grey until a picture is given, as in the design */
.mission-picture img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.mission + .grid { margin-top: clamp(3rem, 17cqi, 179px); }

/* grid: three columns of short points */
.grid { margin-top: clamp(3rem, 9.3cqi, 98px); }
.grid .heading { max-width: 730px; }
.points { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 42px 1rem; margin-top: 38px; }
.points li { max-width: 255px; padding-right: 1rem; box-sizing: content-box; }
.points .point-title { margin-top: 0; }
/* boxed: a grey box, a rule under the heading, large red titles */
.boxed { margin-top: clamp(2.5rem, 6.2cqi, 65px); padding-block: 21px 40px; background: var(--feature-mist); }
.grid-rule { margin: 22px 0 0; border: 0; border-top: 1px solid var(--feature-line); }
.boxed .points { margin-top: 16px; }
.boxed .point-title { font-family: var(--font-display); font-size: var(--type-feature-display); font-weight: var(--font-weight-light); color: var(--feature-red); }
.boxed .copy { margin-top: 10px; }

/* narrower sheets: columns fold */
@container (max-width: 760px) {
  .intro, .quote, .framework-row, .mission { grid-template-columns: 1fr; }
  .mission-picture { margin-top: 1.5rem; }
  .inset, .mission { padding-right: calc(var(--box-x) + var(--pad)); } /* one column: the same margin on both sides */
  .intro .copy { padding-top: 1.25rem; }
  .quote-body { padding-top: 1.5rem; }
  .portrait { max-width: 366px; }
  .pill { margin-top: 1.5rem; }
  .figures { margin-top: 2rem; }
  .cards { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .points { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@container (max-width: 480px) {
  .points { grid-template-columns: 1fr; gap: 1.75rem; }
  .head { padding-top: 1.5rem; }
}
</style>
