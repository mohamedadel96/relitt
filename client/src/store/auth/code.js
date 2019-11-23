import authServices from '../../services/auth'

export default {
  state: {
    vcode: JSON.parse(sessionStorage.getItem('vcode')) ? JSON.parse(sessionStorage.getItem('vcode')) : null
  },
  mutations:
  {
    saveCode(state, data) {
      sessionStorage.setItem('vcode', JSON.stringify(data))
      state.vcode = data
    }
  },
    actions: {
      CODEVALIDATE({ rootState , commit,state }, form) {
        return new Promise((resolve, reject) => {

          authServices.codeValidate({
            ...form,
            ...rootState.resetPassword
          }).then(res => {
            if (res.data.code !== 200) return reject(res.data.errors)

            commit("saveCode", form.code)
            console.log(state.vcode)
            resolve(res.message)
          })

        })
      }
    }
  }



