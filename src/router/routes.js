import Vue from 'vue'
import Router from 'vue-router'

/* Viewes */
import Home from '../view/Home.vue'
import Login from '../view/Login.vue'
import Registration from '../view/Registration.vue'
import Ads from '../view/Ads.vue'
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
      component: Ad
    },
    {
      path: '/ads',
      name: 'ads',
      component: Ads
    },
    {
      path: '/new',
      name: 'newAd',
      component: NewAd
    },
    {
      path: '/my',
      name: 'myAds',
      component: MyAds
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
