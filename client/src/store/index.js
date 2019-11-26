import Vue from 'vue'
import Vuex from 'vuex'
import entrance from './auth/entrance'
import signup from './auth/signup'
import login from './auth/login'
import resetPassword from './auth/resetPassword'
import code from './auth/code'
import changePassowrd from './auth/changePassowrd'
import userCard from './application/userCard'
import events from './application/events'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null,
    token: JSON.parse(localStorage.getItem('token')) ? (JSON.parse(localStorage.getItem('token'))) : null
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
      localStorage.setItem('token', JSON.stringify(data.data.token))
      state.token = data.data.token
    }
  },
  modules: {
    entrance,
    signup,
    login,
    resetPassword,
    code,
    changePassowrd,
    userCard,
    events
  }
})
