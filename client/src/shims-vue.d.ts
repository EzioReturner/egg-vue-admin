declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
import VueRouter, { Route } from 'vue-router';

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter;
    $route: Route;
    $Message: any;
    $Modal: any;
    $notify: any;
  }
}

declare module '*.scss' {
  const scss: any;
  export default scss;
}
