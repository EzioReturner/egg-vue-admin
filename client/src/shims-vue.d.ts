declare module '*.vue' {
  import VueRouter, { Route } from 'vue-router';
  interface Vue {
    $router: VueRouter;
    $route: Route;
    $Message: any;
    $Modal: any;
  }
  export default Vue;
}

declare module '*.scss' {
  const scss: any;
  export default scss;
}

declare module '@config/routes' {
  export const constantRouterMap: any;
}
