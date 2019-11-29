import appServices from '../../services/application'

export default {
  state: {
    feeds: null
  },
  getters: {
    getFeed(state) {
      return state.feeds
    }
  },
  mutations: {
    saveFeed(state, data) {
      state.feeds = data
    }
  },
  actions:{
    FEED({ commit }) {
      return new Promise((resolve, reject) => {
        appServices.feed().then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.errors)
          commit('saveFeed', res.data.data)
          resolve('done')
        })
      })
    }
  }
}
