import Vue from 'vue';
import Vuex from 'vuex';
import { sync } from 'vuex-router-sync';
import Router from '@components/Router';
Vue.use(Vuex);

const Store = new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  modules: {}
});
sync(Store, Router);

export default Store;
