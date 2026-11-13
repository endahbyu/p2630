// Static, client-rendered site. The base path comes from NUXT_APP_BASE_URL and the site address from
// NUXT_PUBLIC_SITE_URL (both set by scripts/deploy.mjs for GitHub Pages).
const base = process.env.NUXT_APP_BASE_URL || '/';
const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || '') + base;
const description = 'Demo site description. One sentence that says what this experience is about.'; // keep in step with ui.description in the content file

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: false },
  css: ['~/assets/styles/tokens.css', '~/assets/styles/base.css'],
  app: {
    head: {
      title: 'MCMC P2630',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'robots', content: 'noindex, nofollow' }, // review build: keep out of search engines until launch
        { name: 'description', content: description },
        // link previews (these are read from the static page, so they are site-wide, not per page)
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'MCMC P2630' },
        { property: 'og:description', content: description },
        { property: 'og:image', content: `${siteUrl}share.jpg` },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    },
  },
});
