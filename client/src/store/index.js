import Vue from 'vue'
import Vuex from 'vuex'
import entrance from './auth/entrance'
import signup from './auth/signup'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
