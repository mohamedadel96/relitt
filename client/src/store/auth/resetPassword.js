import authServices from '../../services/auth'

export default {
  actions: {
    RESETPASSWORD({ commit }, form) {
      return new Promise((resolve, reject) => {

        authServices.resetPassword(form).then(res => {
          if (res.data.code !== 200) return reject(res.data.errors)

          commit('saveAuthData', res.data, { root: true })
          resolve('done')
        })
        
      })
    }
  }
}
