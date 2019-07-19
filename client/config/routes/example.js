/**
 * 我们建议将路由的name归纳至constans作为常量处理
 * RouterBus 为路由中介跳转组件，如有需要可自行添加
 */
/* eslint-disable */
import RouterBus from '@components/Router/RouterBus.vue';

import {
  EXAMPLE_INDEX,
  EXAMPLE_PAGE,
  EXAMPLE_BREADCRUMB,
  EXAMPLE_THIRD_INDEX,
  EXAMPLE_THIRD_TEST
} from '@constants/routes';

export default {
  name: EXAMPLE_INDEX,
  path: 'example',
  component: RouterBus,
  icon: 'goods',
  children: [
    {
      name: EXAMPLE_PAGE,
      path: 'page',
      icon: 'tickets',
      component: () => import(/* webpackChunkName: "page" */ '@views/example/page.vue')
    },
    {
      name: EXAMPLE_BREADCRUMB,
      path: 'breadcrumb',
      icon: 'news',
      component: () => import(/* webpackChunkName: "breadcrumb" */ '@views/example/breadcrumb.vue')
    },
    {
      name: EXAMPLE_THIRD_INDEX,
      path: 'thirdLevelMenu',
      component: RouterBus,
      icon: 'goods',
      children: [
        {
          name: EXAMPLE_THIRD_TEST,
          path: 'test',
          icon: 'news',
          component: () => import(/* webpackChunkName: "breadcrumb" */ '@views/example/test.vue')
        }
      ]
    }
  ]
};
