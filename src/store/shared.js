export default {
  state: {
    loading: false,
    error: null
  },

  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },

  actions: {
    toSetLoading ({commit}, payload) {
      commit('setLoading', payload)
    },
    toSetError ({commit}, payload) {
      commit('setError', payload)
    },
    toClearError ({commit}) {
      commit('clearError')
    }
  },

  getters: {
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
}
