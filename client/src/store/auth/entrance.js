
export default {
  state: {
    entrance: JSON.parse(sessionStorage.getItem('entranceData')) ? JSON.parse(sessionStorage.getItem('entranceData')) : null
  },
  mutations: {
    saveEntranceData(state, data) {
        sessionStorage.setItem('entranceData', JSON.stringify(data))
        state.entrance = data
    }
  },
  actions: {
    ENTRANCE({commit}, form) {
        return new Promise((resolve, reject) => {
            commit('saveEntranceData', form)       
            resolve('saved')
        })
    }
  }
}
