import Vue from 'vue'

/* Vue Modules */
import router from './router/routes'
import store from './store'

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
  template: '<App/>'
})
