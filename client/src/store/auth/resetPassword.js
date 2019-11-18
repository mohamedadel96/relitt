import authServices from '../../services/auth'

export default {
  actions: {
    RESETPASSWORD({}, form) {
      return new Promise((resolve, reject) => {

        authServices.resetPassword(form).then(res => {
          if (res.data.code !== 200) return reject(res.data.errors)

          resolve(res.message)
        })
        
      })
    }
  }
}
