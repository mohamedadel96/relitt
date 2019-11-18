import Vue from 'vue'
import Vuex from 'vuex'
import entrance from './auth/entrance'
import signup from './auth/signup'
import login from './auth/login'
import resetPassword from './auth/resetPassword'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null,
    token: JSON.parse(localStorage.getItem('user')) ? (JSON.parse(localStorage.getItem('user'))).token : null
  },
  getters: {
    getUser(state) {
      return state.user
    },
    getToken(state) {
      return state.token
    }
  },
  mutations: {
    saveAuthData(state, data) {
      localStorage.setItem('user', JSON.stringify(data.data))
      state.user = data.data
      state.token = data.data.token
    }
  },
  actions: {
  },
  modules: {
    entrance,
    signup,
    login,
    resetPassword
  }
})
