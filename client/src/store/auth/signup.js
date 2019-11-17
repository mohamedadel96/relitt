import authServices from '../../services/auth'

export default {
  state: {
    user: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null
  },
  mutations: {
    saveAuthData(state, data) {
      localStorage.setItem('user', JSON.stringify(data))
      state.user = data
    }
  },
  actions: {
    SIGNUP({ rootState, commit }, form) {
      return new Promise((resolve, reject) => {

        authServices.signup({
          ...form,
          ...rootState.entrance.info
        }).then(res => {

          if (res.data.code !== 200) return reject(res.data.errors)

          commit('saveAuthData', res.data)
          resolve('done')
        })
      })

    }
  }
}
