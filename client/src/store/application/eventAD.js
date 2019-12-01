import appServices from '../../services/application'

export default {
  state: {
    eventad: null
  },
  getters: {
    eventAD(state) {
       return state.eventad
    }
  },
  mutations: {
    saveEventAD(state, data) {
      state.eventad = data
    }
  },
  actions:{
    eventAD( { commit } ) {
      return new Promise((resolve, reject) => {
        appServices.eventAD().then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.errors)
          commit('saveEventAD', res.data.data)
          resolve('done')
        })
      })
    }
  }
}
