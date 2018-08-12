/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入一级路由
import Home from '../pages/Home/Home'
import Shiwu from '../pages/Shiwu/Shiwu'
import Category from '../pages/Category/Category'
import Cart from '../pages/Cart/Cart'
import Profile from '../pages/Profile/Profile'

// 声明使用路由器
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/shiwu',
      component: Shiwu
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/',
      component: Home
    }
  ]
})
