import appServices from '../../services/application'

export default {
  state: {
    userCard: null
  },
  getters: {
    userCard(state) {
      return state.userCard
    }
  },
  mutations: {
    saveUserCard(state, data) {
      state.userCard = data
    }
  },
  actions:{
    USERCARD( { commit } ) {
      return new Promise((resolve, reject) => {
        appServices.userCard().then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.errors)
          commit('saveUserCard', res.data.data)
          resolve('done')
        })
      })
    }
  }
}
