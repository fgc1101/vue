import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import axios from 'axios'


// 导入全局样式表
import './assets/css/global.css'

Vue.config.productionTip = false

Vue.use(ElementUI);

axios.defaults.baseURL = 'http://www.tp5.com/api';
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('_token');
  return config
})

Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
