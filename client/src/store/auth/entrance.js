import authServices from '../../services/auth'

export default {
  state: {
    entrance: null
  },
  mutations: {
    saveEntranceData(state, data) {
        state.entrance = data
    }
  },
  actions: {
    ENTRANCE({commit}, form) {
        commit('saveEntranceData', form)       
    }
  }
}
