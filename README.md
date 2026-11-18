# MCMC P2630

Interactive particle experience built with Nuxt 3 and Three.js. Work in progress.

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Run locally at http://localhost:3000 |
| `npm run check:brand` | Verify no reference material is left in the project |
| `npm run deploy` | Check, build and publish to GitHub Pages (also runs automatically on every push to `main`, see `.github/workflows/deploy.yml`; needs the `BRAND_RULES` secret) |

## Design system

All design values live in `assets/styles/tokens.css`. Components use **role tokens** only, so a change in one place carries through the whole site.

**Type.** A fluid scale (`--step-n2` … `--step-5`) grows each size smoothly with `clamp()` from a 360 px to a 1440 px wide screen. The roles map onto it, largest to smallest:

| Role | Size (360 → 1440 px) | Used for |
| --- | --- | --- |
| `--type-display` | 32 → 56 | page title in the content sheet |
| `--type-title` | 28 → 44 | location titles, large figures |
| `--type-heading` | 24 → 32 | section headings in a page |
| `--type-callout` | 24 → 32 | call-to-action heading at the end of a page |
| `--type-lockup` | 24 → 32 | brand name on the opening screen |
| `--type-subheading` | 20 → 25 | welcome card title, open topic's name |
| `--type-lead` | 18 → 21 | lead paragraphs |
| `--type-body` | 16 → 18 | running text |
| `--button-font-size` | 16 → 18 | every button label (weight `--button-font-weight`, medium) |
| `--type-small` | 14 → 15 | figure and slide captions, welcome card text |
| `--type-caption` | 12 → 13 | hints, labels on pictures |

Line heights: `--leading-display` (1), `--leading-heading` (1.15), `--leading-ui` (1.25, buttons and labels), `--leading-body` (1.5). Weights by role: `--weight-display` (600, page titles and the opening screen's brand name), `--weight-heading` and `--weight-subheading` (500), `--weight-label` (500); buttons `--button-font-weight` (500). Nothing on screen is bold (700); the current item among buttons uses `--button-font-weight-current` so it is marked by weight as well as colour.

**Buttons.** Three sizes, set by a class on the pill button (`.fill-btn`): `.btn-sm` (40 px tall, 32 px circle, 16 px icon, 14–15 px label) for buttons inside small cards, `.btn-md` (48 / 40 / 20 px, 16–18 px label, the default) for buttons in content, `.btn-lg` (56 / 48 / 24 px, 16–18 px label) for the one main action on the stage. Values: `--button-{sm,md,lg}-*` in `tokens.css`.

**Icons.** Control icons are `--icon-size` (24 px) with a `--icon-stroke` (1.5 px) line. **Focus.** `--focus-ring-*`.

To change a size: edit the step (all roles on it follow) or point a role at another step. Avoid writing pixel or rem font sizes in components.

## Structure

- `assets/styles/tokens.css` — colours, fonts, motion and layout values. Change the brand here.
- `public/content/<language>.json` — all text for one language: interface labels, topics, their pages, footer pages. `locales.json` lists the languages: `code` (the language code, e.g. `ms`), `label` (its full name) `short` (what the language button shows, e.g. `BM`) and optionally `param` (the address form, e.g. `?lang=bm`; the page is still marked with `code`, since `bm` is the standard code for Bambara). Currently placeholder copy.
- `public/share.jpg` — the image shown in link previews (1200×630: "P2630" drawn as lit particles on the site backdrop, with the client logo). After replacing it, bump `?v=` on `og:image` in `nuxt.config.ts`.
- `lib/shapes.ts` — the six particle shapes (globe, flask, bottle, bulb, chain, target), computed in code.
- `lib/landMask.ts` + `public/data/land.json` — land outline used to place the globe's particles.
- `lib/scrollTravel.ts` — scroll-driven travel between topics (speed-based, settles on the nearest topic, loops).
- `lib/particleShader.ts` — the shader for the background field.
- `lib/sound.ts` — the background music (`public/audio/ambient.webm`, with `ambient.m4a` (AAC 128 kbps) for browsers that can't play WebM, looping, starts once the visitor enters and follows the sound button) and short cues made in the browser.
- `components/ParticleStage.vue` — the WebGL stage: the shape's particles, lighting, background field, camera, pointer physics, points on the shape.
- `components/` — loader, tutorial, topic rail, topic token, topic menu (grid on wide screens, drop-down on phones), content panel and its blocks (carousel, video), page slider for phones, cursor companion, language switch, topic icons.
- `composables/useSite.ts` — shared state: content, language, active topic, entered topic, open page (kept in the URL hash).
- `pages/index.vue` — puts it all together.
- `scripts/` — brand check and deploy.

`npm run check:brand` needs a local `.brand-rules.json` (not committed); the header of `scripts/check-brand.mjs` describes it.

## Writing content

A page is a list of blocks. Block types: `heading`, `text`, `columns` (left, right), `figure` (caption, src), `carousel` (slides: caption, src), `video` (caption, src, poster), `button` (label, to = another page's slug), `spacer` (size: s, m or l), `rule` (a thin line), `stat` (value, text: a large figure with a short line under it). A page with `at` (a place on the globe) opens on its title, with `lead` as a small subtitle such as the country, and its first figure underneath. A carousel with `"vertical": true` stacks its slides in a tall frame and lists their captions beside it; picking a caption shows its slide.
A page in the globe topic can have `"at": [longitude, latitude]`; its point then sits at that place on the globe. Pages without it get a point placed automatically on the front of the shape. Add `"image": "/path.jpg"` to give that point's hover card a picture (270×175 or larger, landscape); without it the card shows a placeholder.
Pages under `extras` belong to no topic and are linked from the footer.

## Third-party material

| What | Where | Licence |
|---|---|---|
| Nuxt, Vue, Three.js | `package.json` | MIT |
| Host Grotesk typeface | `public/fonts/` | SIL Open Font License 1.1 — see `public/fonts/LICENSE.txt` |
| Land outline (Natural Earth via world-atlas) | `public/data/land.json` | Data: public domain. Packaging: ISC — see `public/data/land.LICENSE.txt` |
