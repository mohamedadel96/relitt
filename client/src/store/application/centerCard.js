import appServices from '../../services/application'

export default {
  state: {
    centercard: null
  },
  getters: {
    getCenterCard(state) {
      return state.centercard
    }
  },
  mutations: {
    saveCenterCard(state, data) {
      state.centercard = data
    }
  },
  actions:{
    CENTERCARD( { commit } ) {
      return new Promise((resolve, reject) => {
        appServices.centerCard().then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.errors)
          commit('saveCenterCard', res.data.data)
          resolve('done')
        })
      })
    }
  }
}
