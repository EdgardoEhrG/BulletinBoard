import Vue from 'vue'
import Router from 'vue-router'
import Guard from './guard'

/* Viewes */
import Home from '../view/Home.vue'
import Login from '../view/Login.vue'
import Registration from '../view/Registration.vue'
import Orders from '../view/Orders.vue'
import NewAd from '../view/NewAd.vue'
import MyAds from '../view/MyAds.vue'
import Ad from '../view/Ad.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/ad/:id',
      name: 'ad',
      props: true,
      component: Ad
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      beforeEnter: Guard
    },
    {
      path: '/new',
      name: 'newAd',
      component: NewAd,
      beforeEnter: Guard
    },
    {
      path: '/my',
      name: 'myAds',
      component: MyAds,
      beforeEnter: Guard
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    }
  ],
  mode: 'history'
})
