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
- `lib/shapes.ts` — the six particle shapes (globe, flask, bottle, bulb, chain, target), computed in code.
- `lib/landMask.ts` + `public/data/land.json` — land outline used to place the globe's particles.
- `lib/scrollTravel.ts` — scroll-driven travel between topics (speed-based, settles on the nearest topic, loops).
- `lib/particleShader.ts` — the shader that blends, blurs and draws every particle.
- `components/ParticleStage.vue` — the WebGL stage: shape cloud, background field, camera, pointer physics.
- `components/` — loader, tutorial, topic rail, topic token, topic menu, content panel, topic icons.
- `composables/useSite.ts` — shared state; the open page is kept in the URL hash.
- `pages/index.vue` — puts it all together.
- `scripts/` — brand check and deploy.

`npm run check:brand` needs a local `.brand-rules.json` (not committed); the header of `scripts/check-brand.mjs` describes it.

## Third-party material

| What | Where | Licence |
|---|---|---|
| Nuxt, Vue, Three.js | `package.json` | MIT |
| Land outline (Natural Earth via world-atlas) | `public/data/land.json` | Data: public domain. Packaging: ISC — see `public/data/land.LICENSE.txt` |
| Interaction behaviour: idle turn, drag and throw, pointer push on the near side, click scatter, and their tuning values | `components/ParticleStage.vue` (`simulate()`, `turn()`), sphere distribution in `lib/shapes.ts` | Modelled on the "Particle Sphere" component (Originkit) supplied by the project owner; re-implemented here, not copied. **The owner must confirm that its licence allows this use in a public repository.** |

Everything else in this repository was written for this project.
