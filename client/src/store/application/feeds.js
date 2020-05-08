import appServices from '../../services/application'

export default {
  state: {
    feeds: [],
    filter: {
      page: 1,
      myFeeds: false,
      myActivity: false
    }
  },
  getters: {
    feeds(state) {
      return state.feeds
    },
    myFeeds(state) {
      return state.filter.myFeeds
    },
    myActivity(state) {
      return state.filter.myActivity
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
    DeletePost(state, postId) {
      state.feeds.map((post, i) => post.id === postId ? state.feeds.splice(i, 1) : post)
    },
    saveToggleLike(state, data) {
      state.feeds.map(feed => {
        if (feed.id === data.id) {
          feed.liked = !data.liked
          data.liked ? feed.likes_count-- : feed.likes_count++
        }
      })
    },
    filterFeeds(state) {
      state.filter.myFeeds = !state.filter.myFeeds
    },
    filterActivity(state) {
      state.filter.myActivity = !state.filter.myActivity
    }
  },
  actions: {
    FEEDS({ state, commit , dispatch }) {
      return new Promise((resolve, reject) => {
        appServices.feeds(state.filter).then(res => {
          if (res.data.status === 401) {
            dispatch("LOGOUT")

            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
          if (!res.data.data.length) {
            return resolve('end')
          }
          commit('saveFeed', res.data.data)
          resolve('done')
        })
      })
    },
    POST({ commit , dispatch }, form) {
      return new Promise((resolve, reject) => {
        appServices.post(form).then(res => {
          if (res.data.status === 401) {
            dispatch("LOGOUT")
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
          commit('pushPost', res.data.data)
          resolve('done')
        })
      })
    },
    EDITPOST({ commit , dispatch }, form) {
      return new Promise((resolve, reject) => {
        appServices.editPost(form).then(res => {
          if (res.data.status === 401) {
            dispatch("LOGOUT")
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
          commit('DeletePost', res.data.data.id)
          commit('pushPost', res.data.data)
          resolve('Edited')
        })
      })
    },
    DELETEPOST({ commit , dispatch }, postId) {
      return new Promise((resolve, reject) => {
        appServices.deletePost(postId).then(res => {
          if (res.data.status === 401) {
            dispatch("LOGOUT")
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
          commit('DeletePost', postId)
          resolve("deleted")
        })
      })
    },
    TOGGLELIKE({ commit , dispatch}, form) {
      return new Promise((resolve, reject) => {
        appServices.toggleLike(form).then(res => {
          if (res.data.status === 401) {
            dispatch("LOGOUT")
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
          commit('saveToggleLike', form)
          resolve(form.liked)
        })
      })
    },
    FILTERFEEDS({ commit }) {
      commit('filterFeeds')
    },
    FILTERACTIVITY({ commit }) {
      commit('filterActivity')
    }
  }
}
