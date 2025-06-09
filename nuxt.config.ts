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
      title: "fufu's website",
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Hewwo! I am a 15 years old self taught developer! And this is my personal website!' },
        { name: 'keywords', content: 'furry, furries, portfolio, self taught' },
        { name: 'author', content: 'fufu-girl-meow' },
        { property: 'og:title', content: "fufu's website" },
        { property: 'og:description', content: 'Hewwo! I am a 15 years old self taught developer! And this is my personal website!' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://fufu.transdev.pw' },
        { property: 'og:image', content: 'https://yourwebsite.com/image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: "fufu's website" },
        { name: 'twitter:description', content: 'Hewwo! I am a 15 years old self taught developer! And this is my personal website!' },
        { name: 'twitter:image', content: 'https://yourwebsite.com/image.jpg' },
        { name: 'twitter:site', content: '@user_mcproxy' },
        { name: 'theme-color', content: '#5BCEFA' }
      ],
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