# P2630

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
- `public/content/en.json` — all text: interface labels, topics, pages. Currently placeholder copy.
- `lib/shapes.ts` — particle shapes, computed in code.
- `components/ParticleStage.vue` — the WebGL particle stage: the shape, the background field and the camera path.
- `lib/particleShader.ts` — the shader that moves and draws every particle.
- `components/` — loader, tutorial, topic rail, topic menu, content panel.
- `composables/useSite.ts` — shared state; the open page is kept in the URL hash.
- `pages/index.vue` — puts it all together and handles scroll, swipe and keys.
- `scripts/` — brand check and deploy.

`npm run check:brand` needs a local `.brand-rules.json` (not committed); the header of `scripts/check-brand.mjs` describes it.
