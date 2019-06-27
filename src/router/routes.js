import Vue from 'vue'
import Router from 'vue-router'
import Guard from './guard'

/* Viewes */
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Registration from '../pages/Registration.vue'
import Orders from '../pages/Orders.vue'
import NewAd from '../pages/NewAd.vue'
import MyAds from '../pages/MyAds.vue'
import Ad from '../pages/Ad.vue'

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
