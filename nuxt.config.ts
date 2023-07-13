// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  //If you want to auto-import components based only on its name, not path, then you need to set pathPrefix option to false using extended form of the configuration object:

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/elements',
      pathPrefix: false,
    },
  ],
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  pages: true,
  css: [
    // SCSS file in the project
    '~/assets/scss/main.scss', // you should add main.scss somewhere in your app
  ],
});
