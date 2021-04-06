const DRUPAL_BASE_URL = process.env.DRUPAL_BASE_URL || 'http://example.d9playground.localdev.space'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Lupus Nuxt.js Drupal Stack - Example',
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
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxtjs-drupal-ce'
  ],

  'nuxtjs-drupal-ce': {
    baseURL: DRUPAL_BASE_URL,
    addRequestFormat: false,
    useProxy: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // Enable axios debugging when useful.
  axios: {
    debug: false
  }
}
