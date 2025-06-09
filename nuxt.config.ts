// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,    },
  ],

  app: {
    head: {
      title: "Hello World!",
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  modules: ['@nuxtjs/google-fonts', '@tailwindcss/vite'],
  googleFonts: {
    families: {
      'Signika Negative': true
    },
    display: 'swap'
  }
});