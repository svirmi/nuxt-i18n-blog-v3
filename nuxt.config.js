export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-i18n-blog-v3',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  publicRuntimeConfig: {
    nuxtLocale: process.env.NUXT_LOCALE || 'ru'
  },

  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    [
      'nuxt-i18n',
       {
         locales: [
            {
              code: 'ru',
              iso: 'ru-RU',
              name: 'Russian',
            },
            {
              code: 'en',
              iso: 'en-US',
              name: 'English',
            },
            {
              code: 'es',
              iso: 'en-ES',
              name: 'Español',
            },
         ],
         defaultLocale: 'ru',
         noPrefixDefaultLocale: true,
         vueI18n: {
          fallbackLocale: 'ru',
          messages: {
            ru: require('./locales/ru-ru.json'),
            en: require('./locales/en-us.json'),
            es: require('./locales/es-es.json'),            
          },
        },
       }
    ]
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
