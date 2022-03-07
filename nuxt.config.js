export default {
  mode: 'universal',
  // Target: https://go.nuxtjs.dev/config-target
  //  壓縮圖片 https://squoosh.app/editor
  target: 'static',
  router: {
    base: '/faceDK/',
    middleware: ['auth'],
  },
  head: {
    titleTemplate: '%s',
    title: 'faceDK',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:title'  , property: 'og:title'  , content: 'faceDK'},
      { hid: 'og:image' , property: 'og:image' , content: 'icon.png'},
      { hid: 'og:type' , property: 'og:type' , content: 'website'},
      // { hid: 'og:url' , property: 'og:url' , content: ''},
      { hid: 'description', name: 'description', content: 'faceDK' },
      { hid: 'og:description' , property: 'og:description' , content: 'faceDK'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/faceDK/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/global.css',
    '~assets/styles/global.scss',
    '~assets/fonts/sfpro/sfpro.css',
    // 'swiper/swiper-bundle.css',
    'swiper/css/swiper.css',
    'animate.css/animate.css',
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-awesome-swiper',
    { src: '~/plugins/vue-lazyload', ssr: true },
    '~plugins/element-ui',
    '~/plugins/echarts',
    '~/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  axios: {
    baseUEL: process.env.API_URL
  },

  auth: {
    strategies: {
      // cookie 作法
      // cookie:{
      //   cookie: {
      //     name: 'facedk',
      //   },
      //   endpoints: {
      //     login: {
      //       url: '/auth/login',
      //       method: 'post'
      //     },
      //     logout: {
      //       url: '/auth/logout',
      //       method: 'get'
      //     },
      //     user: {
      //       url: '/users',
      //       method: 'get',
      //       property: 'data'
      //     }
      //   },
      // },
    
      // local 作法
      local: {
        token: {
          required: false,
          type: false
        },
        cookie: {
          name: 'facedk',
        },
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post'
          },
          logout: {
            url: '/auth/logout',
            method: 'get'
          },
          user: {
            url: '/users',
            method: 'get'
          }
        },
      },
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: false
    },
    localStorage: false
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isDev, isClient }) {
      if (!isDev) {
          config.output.publicPath = './_nuxt/'
      }
      return config;
    },
    transpile: ['resize-detector'],
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
    postcss: {
      'postcss-px2rem-exclude': {
          emUnit: 75,
          exclude: '/node_modules|vant/'
      },
      'autoprefixer': {
        flexbox: true,
        grid: true,
        overrideBrowserslist: ['last 3 versions', '> 1%', 'ie 8', 'ie 7'],
      },
      order: 'cssnanoLast'
    },
    vendor: ['vue-lazyload', 'element-ui'],
    html:{
      minify:{
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      }
    }
  }
}
