import appServices from '../../services/application'

export default {
  state: {
    dashboard: null
  },
  getters: {
    dashboard(state) {
      return state.dashboard
    }
  },
  mutations: {
    saveDashboard(state, data) {
      state.dashboard = data
    }
  },
  actions: {
    DASHBOARD({ commit }) {
      return new Promise((resolve, reject) => {
        appServices.dashboard().then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
          commit('saveDashboard', res.data.data)
          resolve('done')
        })
      })
    }
  }
}
