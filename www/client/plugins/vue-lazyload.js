import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'


Vue.use(VueLazyLoad, {
    error: require('../static/img/loading.gif'), //加载错误时的显示图片
    loading: require('../static/img/loading.gif') //加载过程中的过渡图片
})