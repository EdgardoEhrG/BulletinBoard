import Vue from 'vue'

/* Vue Modules */
import router from './router/routes'
import store from './store'

/* Other Modules */
import * as fb from 'firebase'

/* Main Component */
import App from './App'

/* ~ Vuetrap */
import Vuetify from 'vuetify'

Vue.use(Vuetify, { theme: {
  primary: '#ee44aa',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyB3JioSyFFT0bXRcCRwwxg_3Nd2CDGlO2w',
      authDomain: 'bulletin-board-ep.firebaseapp.com',
      databaseURL: 'https://bulletin-board-ep.firebaseio.com',
      projectId: 'bulletin-board-ep',
      storageBucket: 'bulletin-board-ep.appspot.com',
      messagingSenderId: '221098756212'
    })

    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('toAutoLogin', user)
      }
    })

    // this.$store.dispatch('toFetchAds')
  }
})
