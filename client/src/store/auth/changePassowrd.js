import authServices from '../../services/auth'

export default {

  actions: {
    CHANGEPASSWORD({ rootState }, form) {
      return new Promise((resolve, reject) => {
        authServices.changePassword({
          ...form,
          ...rootState.code,
          ...rootState.resetPassword
        }).then(res => {
          if (res.data.code !== 200) return reject(res.data.errors)
          resolve(res.message)
        })

      })
    }
  }
}



