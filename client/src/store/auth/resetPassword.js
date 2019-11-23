import authServices from '../../services/auth'

export default {
  state: {
    email: JSON.parse(sessionStorage.getItem('email')) ? JSON.parse(sessionStorage.getItem('email')) : null
  },
  mutations:
  {
    saveEmail(state, data) {
      sessionStorage.setItem('email', JSON.stringify(data))
      state.email = data
    }
  },
  actions: {
    RESETPASSWORD({ commit }, form) {
      return new Promise((resolve, reject) => {

        authServices.resetPassword(form).then(res => {
          if (res.data.code !== 200) return reject(res.data.errors)
          commit("saveEmail", form.email)

          resolve(res.message)
        })

      })
    }
  }
}
