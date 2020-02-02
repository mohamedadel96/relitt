import authServices from '../../services/auth'

export default {
  state: {
    code: JSON.parse(sessionStorage.getItem('code')) ? JSON.parse(sessionStorage.getItem('code')) : null
  },
  mutations:
  {
    saveCode(state, data) {
      sessionStorage.setItem('code', JSON.stringify(data))
      state.code = data
    }
  },
  actions: {
    CODEVALIDATE({ rootState, commit }, form) {
      return new Promise((resolve, reject) => {

        authServices.codeValidate({
          ...form,
          ...rootState.resetPassword
        }).then(res => {
          if (res.data.code !== 200) return reject(res.data.message)

          commit("saveCode", form.code)
          resolve(res.message)
        })

      })
    }
  }
}



