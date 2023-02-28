import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';
axios.defaults.withCredentials = true
axios.defaults.baseURL="http://127.0.0.1:3001/"
// 引入axios，并加到原型链中
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

import { get, post } from "./util/index";
Vue.prototype.$http = {
  get,
  post
};

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
