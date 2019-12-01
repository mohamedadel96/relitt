import appServices from '../../services/application'

export default {
  state: {
    feeds: []
  },
  getters: {
    feeds(state) {
      return state.feeds
    }
  },
  mutations: {
    saveFeed(state, data) {
      state.feeds.push(...data)
    }
  },
  actions: {
    FEEDS({ commit }, payload) {
      return new Promise((resolve, reject) => {
        appServices.feeds(payload).then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.errors)
          if (!res.data.data.length) return resolve('end')
          commit('saveFeed', res.data.data)
          resolve('done')
        })
      })
    }
  }
}
