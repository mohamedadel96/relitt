import Vue from 'vue'
import Vuex from 'vuex'
import entrance from './auth/entrance'
import signup from './auth/signup'
import login from './auth/login'
import logout from './auth/logout'
import resetPassword from './auth/resetPassword'
import code from './auth/code'
import changePassowrd from './auth/changePassowrd'
import userCard from './application/userCard'
import events from './application/events'
import dashboard from './application/dashboard'
import feeds from './application/feeds'
import centerCard from './application/centerCard'
import center from './application/center'
import myEvent from './application/myEvent'
import event from './application/event'
import uploadFiles from './application/uploadFiles'
import createEvent from './application/createEvent'
import PostComment from './application/PostComments';

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
    saveUserData(state, data) {
      localStorage.setItem('user', JSON.stringify(data.data))
      state.user = data.data
      state.token = data.data.token
    },
    removeAuthData(state) {
      state.user = null
      state.token = null
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
    events,
    feeds,
    dashboard,
    centerCard,
    center,
    myEvent,
    event,
    logout,
    uploadFiles,
    createEvent,
    PostComment

  }
})
