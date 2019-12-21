import appServices from '../../services/application'

export default {
  state: {
    feeds: [],
    filter: {
      page: 1
    }
  },
  getters: {
    feeds(state) {
      return state.feeds
    }
  },
  mutations: {
    saveFeed(state, data) {
      state.filter.page += 1;
      state.feeds.push(...data)
    },
    pushPost(state, data) {
      state.feeds.unshift(data)
    },
    saveToggleLike(state, data) {
      state.feeds.map(feed => {
        if (feed.id === data.id) {
          feed.liked = !data.liked
          data.liked ? feed.likes_count-- : feed.likes_count++
        }
      })
    }
  },
  actions: {
    FEEDS({ state, commit }) {
      return new Promise((resolve, reject) => {
        appServices.feeds(state.filter).then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.errors)
          if (!res.data.data.length) {
            return resolve('end')
          }
          commit('saveFeed', res.data.data)
          resolve('done')
        })
      })
    },
    POST({ commit }, form) {
      return new Promise((resolve, reject) => {
        appServices.post(form).then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.errors)
          commit('pushPost', res.data.data)
          resolve('done')
        })
      })
    },
    TOGGLELIKE({ commit }, form) {
      return new Promise((resolve, reject) => {
        appServices.toggleLike(form).then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.errors)
          commit('saveToggleLike', form)
          resolve(form.liked)
        })
      })
    }
  }
}
