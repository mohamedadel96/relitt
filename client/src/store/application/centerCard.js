import appServices from '../../services/application'

export default {
  state: {
    centercard: [],
    myReviews: [],
    filter: {
      page: 1
    }

  },
  getters: {
    getCenterCard(state) {
      return state.centercard
    },
    myReviews(state) {
      return state.myReviews
    }
  },
  mutations: {
    saveCenterCard(state, data) {
      state.filter.page += 1
      state.centercard.push(...data)
    },
    saveMyReviews(state, data) {
      state.myReviews = data
    }
  },
  actions: {
    CENTERCARD({ commit, state, dispatch }) {
      return new Promise((resolve, reject) => {
        appServices.centerCard(state.filter).then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
            dispatch("LOGOUT")
          }
          if (res.data.code !== 200) return reject(res.data.message)
          if (!res.data.data.length) { return resolve('end') }

          commit('saveCenterCard', res.data.data)
          resolve('done')
        })
      })
    },
    MYREVIEWS({ commit , dispatch }) {
      return new Promise((resolve, reject) => {
        appServices.myReviews().then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
            dispatch("LOGOUT")

          }
          if (res.data.code !== 200) return reject(res.data.message)

          commit('saveMyReviews', res.data.data)
          resolve('done')
        })
      })
    }
  }
}
