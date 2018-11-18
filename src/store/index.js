import Vue from 'vue'
import Vuex from 'vuex'

/* Modules */
import ads from './ads'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ads
  }
})
