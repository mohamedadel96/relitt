import authServices from '../../services/auth'

export default {
  mutations: {
    saveAuthData(state, payload) {
      sessionStorage.setItem('signup', JSON.stringify(payload))
    }
  },
  actions: {
    VALIDATEEMAIL({ commit }, form) {
      return new Promise((resolve, reject) => {

        commit('saveAuthData', form)
        authServices.validateEmail(form).then(res => {
          if (res.data.code !== 200) return reject(res.data.message)
          resolve(true)
        })

      })
    }
  }
}
