import Vue from 'vue'
import Vuex from 'vuex'
import entrance from './auth/entrance'
import signup from './auth/signup'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: JSON.parse(localStorage.getItem('user')) ? (JSON.parse(localStorage.getItem('user'))).data.token : null
  },
  getters: {
    getToken(state) {
      return state.token
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    entrance,
    signup
  }
})
