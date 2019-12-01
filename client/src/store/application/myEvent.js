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
  actions:{
    MYEVENT( {commit} ) {
      return new Promise((resolve, reject) => {
        appServices.myEvent().then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.errors)
          commit('saveMyEvent', res.data.data)
          resolve('done')
        })
      })
    }
  }
}
