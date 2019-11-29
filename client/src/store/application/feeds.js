import appServices from '../../services/application'

export default {
  state: {
    feeds: null
  },
  getters: {
    feeds(state) {
      return state.feeds
    }
  },
  mutations: {
    saveFeed(state, data) {
      state.feeds = data
    }
  },
  actions: {
    FEEDS({ commit }) {
      return new Promise((resolve, reject) => {
        appServices.feeds().then(res => {
          console.log(res)
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
