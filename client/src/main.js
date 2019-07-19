import Vue from 'vue';
import Router from '@components/Router';
import Store from './store';
import ElementUIInit from './utils/elementUI-init';
import './styles/main.scss';
import 'element-ui/lib/theme-chalk/index.css';
ElementUIInit();

new Vue({
  router: Router,
  store: Store,
  render: h => {
    return (
      <div id="app">
        <router-view />
      </div>
    );
  }
}).$mount('#app');
