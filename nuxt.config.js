import { getConfig } from './configs/get-config'

const environment = process.env.NODE_ENV || 'development'
const envValues = getConfig(environment)

export default {
  ssr: false,
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
   ** ステートを管理する
   */
  loading: '@/components/loading/loading.js',
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '@/plugins/persisted-state.js', mode: 'client' }],
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
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: `${envValues.apiDomain}/graphql`
      }
    },
    errorHandler: '@/plugins/apollo/error-handler.js',
    watchLoading: '@/plugins/apollo/loading-handler.js'
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
          primary: '#EC6D81',
          accent: '#3578AF',
          secondary: '#B365A7',
          success: '#78E07D',
          info: '#84C6FA',
          warning: '#FF9800',
          error: '#F51212'
        },
        light: {
          primary: '#EC6D81',
          accent: '#3578AF',
          secondary: '#B365A7',
          success: '#78E07D',
          info: '#84C6FA',
          warning: '#FF9800',
          error: '#F51212'
        }
      }
    }
  },

  router: {
    middleware: [
      'initialize-form-data',
      'is-logged-in',
      'check-scope'
    ]
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
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      },
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
      ]
    }
  }
}
