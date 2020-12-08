export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'frontend',
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
    'nuxtjs-drupal-ce',
    '@nuxtjs/proxy'
  ],

  'nuxtjs-drupal-ce': {
    baseURL: 'http://example.d9playground.localdev.space:3000/api'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // Enable axios debugging when useful.
  axios: {
    debug: false
  },

  // In order to make dev-mode work, forward /api requests to our base-url
  // always. This is needed to avoid issues with CORS.
  proxy: {
    '/api': { target: process.env.PROXY_BASE_URL, pathRewrite: { '^/api': '' } }
  }
}
