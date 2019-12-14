import appServices from '../../services/application'

export default {
  state: {
    events: [],
    filter: {
      page: 1
    }
  },
  getters: {
    events(state) {
      return state.events
    }
  },
  mutations: {
    saveEvents(state, data) {
      state.filter.page += 1
      state.events.push(...data)
    }
  },
  actions: {
    EVENTS({ commit , state } ) {
      return new Promise((resolve, reject) => {
        appServices.events(state.filter).then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.errors)
          if (!res.data.data.length) return resolve('end')
          commit('saveEvents', res.data.data)
          resolve('done')
        })
      })
    }
  }
}
