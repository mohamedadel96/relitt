import appServices from '../../services/application'

export default {
  state: {
    events: null
  },
  getters: {
    events(state) {
      return state.events
    }
  },
  mutations: {
    saveEvents(state, data) {
      state.events = data
    }
  },
  actions:{
    EVENTS( { commit } ) {
      return new Promise((resolve, reject) => {
        appServices.events().then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.errors)
          commit('saveEvents', res.data.data)
          resolve('done')
        })
      })
    }
  }
}
