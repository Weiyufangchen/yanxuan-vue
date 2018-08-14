// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'

import router from './router'
import store from './store'
import App from './App'
//引入mock文件
import './mock/mockServer'

// import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
