import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'



import routes from './routes'

import './assets/css/style.css'

Vue.config.productionTip = false; 
//Se indica a Vue las librerías de terceros a utilizar
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
