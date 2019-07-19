/**
 * 我们推荐将路由所需的所有组件都放到中一个文件中管理
 * 如果你需要使用路由懒加载的功能，可以使用动态import
 * 举个栗子: const view = () => import('../view.vue');
 */
/* eslint-disable */
import example from './example';

export const constantRouterMap = [
  {
    // 主页
    path: '/',
    name: 'homeView',
    component: () =>
      import(/* webpackChunkName: "basicLayout" */ '@views/skeleton/index.vue'),
    hidden: true,
    children: [example]
  },
  { path: '*', redirect: '/', hidden: true }
];
