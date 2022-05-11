export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'My Project Not For Sale, Just for em',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/repositories'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/universal-storage'
  ],
  axios: {
    baseURL: 'http://128.199.211.17/api/v1/',
    browserBaseURL: 'http://128.199.211.17/api/v1/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  css: [
    '@/assets/css/index.css'
  ],

  server: {
    host: process.env.NUXT_HOST,
    port: process.env.NUXT_PORT,
  }
}
