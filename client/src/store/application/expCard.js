import appServices from '../../services/application'

export default {
  state: {
    expcard: null
  },
  getters: {
    expCard(state) {
      return state.expcard
    }
  },
  mutations: {
    saveExpCard(state, data) {
      state.expcard = data
    }
  },
  actions:{
    EXPCARD( { commit } ) {
      return new Promise((resolve, reject) => {
        appServices.expCard().then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.errors)
          commit('saveExpCard', res.data.data)
          resolve('done')
        })
      })
    }
  }
}
