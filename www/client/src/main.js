// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import { RequestMethod, ApiUtil } from './assets/js/utils/api-util.js';
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  error: '../static/img/loading.gif',//加载错误时的显示图片
  loading: '../static/img/loading.gif'//加载过程中的过渡图片
})


Vue.prototype.$apiUtil = ApiUtil // 将API方法绑定到全局

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
