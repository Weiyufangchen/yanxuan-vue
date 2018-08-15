// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
// import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 引入自定义模块
import router from './router'
import store from './store'
import App from './App'
//引入分割层
import Split from './components/Split/Split'
//引入mock文件
import './mock/mockServer'
// 注册全局组件标签
Vue.component('Split', Split) // 第一个参数为字符串名
Vue.config.productionTip = false


Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
