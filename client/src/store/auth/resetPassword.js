import authServices from '../../services/auth'

export default {
  actions: {
    SIGNUP({ rootState, commit }, form) {
      return new Promise((resolve, reject) => {

        authServices.signup({
          ...form,
          ...rootState.entrance.info
        }).then(res => {
          if (res.data.code !== 200) return reject(res.data.errors)

          commit('saveAuthData', res.data, { root: true })
          resolve('done')
        })
        
      })
    }
  }
}
