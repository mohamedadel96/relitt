
export default {
  state: {
    info: JSON.parse(sessionStorage.getItem('entranceData')) ? JSON.parse(sessionStorage.getItem('entranceData')) : null
  },
  mutations: {
    saveEntranceData(state, data) {
      sessionStorage.setItem('entranceData', JSON.stringify(data))
      state.info = data
    }
  },
  actions: {
    ENTRANCE({ commit }, form) {
      return new Promise((resolve, reject) => {
        commit('saveEntranceData', form)
        resolve('done')
      })
    }
  }
}
