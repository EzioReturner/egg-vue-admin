import Vue from 'vue';
import VueRouter from 'vue-router';
import { constantRouterMap } from '@/config/routes';
import NProgress from 'nprogress';

const router = new VueRouter({
  mode: 'hash',
  routes: constantRouterMap
});

Vue.use(VueRouter);

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    NProgress.done();
  }, 1000);
});

export default router;
