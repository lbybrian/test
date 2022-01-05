import Vue from 'vue'
//import Vuex from 'vuex'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import './assets/css/bg.css'
import './assets/css/theme.css'
import axios from 'axios'

Vue.use(Element)
//Vue.use(Vuex)
//Vue.use(router)
//Vue.use(axios);
Vue.prototype.$axios=axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
