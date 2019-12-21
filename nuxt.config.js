import { getConfig } from './configs/get-config'

const environment = process.env.NODE_ENV || 'development'
const envValues = getConfig(environment)

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '@/plugins/persisted-state.js', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/apollo', '@nuxtjs/pwa'],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: `${envValues.apiDomain}/graphql`
      }
    }
  },

  axios: {
    baseURL: `${envValues.apiDomain}/api`
  },

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#21cff3',
          accent: '#FF4081',
          secondary: '#ffe18d',
          success: '#4CAF50',
          info: '#2196F3',
          warning: '#FB8C00',
          error: '#FF5252'
        },
        light: {
          primary: '#EC6D81',
          accent: '#3578AF',
          secondary: '#B365A7',
          success: '#78E07D',
          info: '#84C6FA',
          warning: '#D8E704',
          error: '#F51212'
        }
      }
    }
  },

  router: {
    middleware: ['is-logged-in']
  },

  env: envValues,

  dir: {
    pages: envValues.isMock ? 'mock' : 'pages'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
      ]
    }
  }
}
