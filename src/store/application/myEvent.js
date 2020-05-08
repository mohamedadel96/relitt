import appServices from '../../services/application'

export default {
  state: {
    myevent: null
  },
  getters: {
    myEvent(state) {
      return state.myevent
    }
  },
  mutations: {
    saveMyEvent(state, data) {
      state.myevent = data
    }
  },
  actions: {
    MYEVENT({ commit , dispatch}) {
      return new Promise((resolve, reject) => {
        appServices.myEvent().then(res => {
          if (res.data.status === 401) {
            dispatch("LOGOUT")
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
          commit('saveMyEvent', res.data.data)
          resolve('done')
        })
      })
    }
  }
}
