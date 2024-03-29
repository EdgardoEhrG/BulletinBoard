import * as fb from "firebase";

class User {
  constructor(id) {
    this.id = id;
  }
}

export default {
  state: {
    user: null,
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },

  actions: {
    async toRegisterUser({ commit }, { email, password }) {
      commit("clearError");
      commit("setLoading", true);
      try {
        const user = await fb
          .auth()
          .createUserAndRetrieveDataWithEmailAndPassword(email, password);
        commit("setUser", new User(user.uid));
        commit("setLoading", false);
      } catch (error) {
        commit("setLoading", false);
        commit("setError", error.message);
      }
    },
    async toLoginUser({ commit }, { email, password }) {
      commit("clearError");
      commit("setLoading", true);
      try {
        const user = await fb
          .auth()
          .signInWithEmailAndPassword(email, password);
        commit("setUser", new User(user.uid));
        commit("setLoading", false);
      } catch (error) {
        commit("setLoading", false);
        commit("setError", error.message);
      }
    },
    toAutoLogin({ commit }, payload) {
      commit("setUser", new User(payload.uid));
    },
    toLogOut({ commit }) {
      fb.auth().signOut();
      commit("setUser", null);
    },
  },

  getters: {
    user(state) {
      return state.user;
    },
    isUserLoggedIn(state) {
      return state.user !== null;
    },
  },
};
