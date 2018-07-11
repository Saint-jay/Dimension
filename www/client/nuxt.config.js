module.exports = {
  // cache: true,
  cache: {
    max: 1000,
    maxAge: 900000
  },
  // router
  router: {
    middleware: ['layout']
  },
  // plugins
  plugins: [
    { src: '~/plugins/marked.js' },
    { src: '~/plugins/highlight.js' },
    { src: '~/plugins/element-ui.js', ssr: true },
    { src: '~/plugins/vue-lazyload.js', ssr: true },
    { src: '~/plugins/filter.js' }
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: { allChunks: true },
    // 将重复引用的(第三方/自有)模块添加到vendor.bundle.js
    vendor: [
      'axios',
      'marked',
      'highlight.js',
      'element-ui',
      'vue-lazyload'
    ],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '秋水儿',
    titleTemplate: '%s | 为了世界和平',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { 'http-equiv': 'Cache-Control' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '秋水儿的兴趣实验室，发现一些好玩有趣的东西。' },
      { hid: 'keywords', name: 'keywords', content: '秋水儿, zsjfish, 前端, 开发，技术, javascript, Node, Vue，nuxt' },
      { name: 'author', content: 'saintjay0309@gmail.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//unpkg.com/element-ui/lib/theme-chalk/index.css' },
      { rel: 'stylesheet', href: '//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/scss/base/reset.scss', lang: 'scss' },
    { src: '~assets/scss/common/section.scss', lang: 'scss' },
    { src: 'highlight.js/styles/atom-one-dark.css', lang: 'scss' },
    
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: { '/api/': { target: 'http://127.0.0.1:3000', pathRewrite: {'^/api/': ''} } },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#2d8cf0' },

}

