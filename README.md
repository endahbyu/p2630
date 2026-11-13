# MCMC P2630

Interactive particle experience built with Nuxt 3 and Three.js. Work in progress.

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Run locally at http://localhost:3000 |
| `npm run check:brand` | Verify no reference material is left in the project |
| `npm run deploy` | Check, build and publish to GitHub Pages |

## Structure

- `assets/styles/tokens.css` — colours, fonts, motion and layout values. Change the brand here.
- `public/content/<language>.json` — all text for one language: interface labels, topics, their pages, footer pages. `locales.json` lists the languages. Currently placeholder copy.
- `public/share.jpg` — the image shown in link previews (placeholder).
- `lib/shapes.ts` — the six particle shapes (globe, flask, bottle, bulb, chain, target), computed in code.
- `lib/landMask.ts` + `public/data/land.json` — land outline used to place the globe's particles.
- `lib/scrollTravel.ts` — scroll-driven travel between topics (speed-based, settles on the nearest topic, loops).
- `lib/particleShader.ts` — the shader for the background field.
- `lib/sound.ts` — sound made in the browser: ambient pad and short cues. No audio files.
- `components/ParticleStage.vue` — the WebGL stage: the shape's particles, lighting, background field, camera, pointer physics, points on the shape.
- `components/` — loader, tutorial, topic rail, topic token, topic menu (grid on wide screens, drop-down on phones), content panel and its blocks (carousel, video), page slider for phones, cursor companion, language switch, topic icons.
- `composables/useSite.ts` — shared state: content, language, active topic, entered topic, open page (kept in the URL hash).
- `pages/index.vue` — puts it all together.
- `scripts/` — brand check and deploy.

`npm run check:brand` needs a local `.brand-rules.json` (not committed); the header of `scripts/check-brand.mjs` describes it.

## Writing content

A page is a list of blocks. Block types: `heading`, `text`, `columns` (left, right), `figure` (caption, src), `carousel` (slides: caption, src), `video` (caption, src, poster), `button` (label, to = another page's slug).
A page in the globe topic can have `"at": [longitude, latitude]`; its point then sits at that place on the globe. Pages without it get a point placed automatically on the front of the shape.
Pages under `extras` belong to no topic and are linked from the footer.

## Third-party material

| What | Where | Licence |
|---|---|---|
| Nuxt, Vue, Three.js | `package.json` | MIT |
| Host Grotesk typeface | `public/fonts/` | SIL Open Font License 1.1 — see `public/fonts/LICENSE.txt` |
| Land outline (Natural Earth via world-atlas) | `public/data/land.json` | Data: public domain. Packaging: ISC — see `public/data/land.LICENSE.txt` |
