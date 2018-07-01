import Vue from 'vue';
import Router from 'vue-router';
import iView from 'iview';

Vue.use(iView)
Vue.use(Router)

const indexChildren = [
  {
    path: '/', // 文章
    component: () => import(/* webpackChunkName: 'home' */'@/pages/article/article'),
  },
  {
    path: '/comic', // 番剧
    component: () => import(/* webpackChunkName: 'section' */'@/pages/comic/comic'),
  },
  {
    path: '/live', // 直播
    component: () => import(/* webpackChunkName: 'section' */'@/pages/live/live'),
  },
  {
    path: '/memobird', // 咕咕机~小纸条
    component: () => import(/* webpackChunkName: 'section' */'@/pages/memobird/memobird'),
  },
  {
    path: '/apply', // 小工具
    component: () => import(/* webpackChunkName: 'section' */'@/pages/apply/apply'),
  },
  {
    path: '/link', // 友情链接
    component: () => import(/* webpackChunkName: 'section' */'@/pages/link/link'),
  },

]

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: 'home' */'@/pages/home'),
      children: indexChildren
    }
  ]
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});

export default router
