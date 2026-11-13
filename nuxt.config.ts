// Static, client-rendered site. The base path comes from NUXT_APP_BASE_URL (set by scripts/deploy.mjs for GitHub Pages).
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: false },
  css: ['~/assets/styles/tokens.css', '~/assets/styles/base.css'],
  app: {
    head: {
      title: 'P2630', // placeholder until the brand name is decided
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'robots', content: 'noindex, nofollow' }, // review build: keep out of search engines until launch
      ],
    },
  },
});
