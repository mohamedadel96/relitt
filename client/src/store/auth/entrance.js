import authServices from '../../services/auth'

export default {
  actions: {
    SIGNUP({ commit }, form) {
      return new Promise((resolve, reject) => {
        authServices.signup({
          ...(JSON.parse(sessionStorage.getItem('signup'))),
          ...form
        }).then(res => {

          if (res.data.code !== 200) return reject(res.data.errors)

          commit('saveUserData', res.data, { root: true })
          resolve('You are logged in successfully')
        })
      })
    }
  }
}
