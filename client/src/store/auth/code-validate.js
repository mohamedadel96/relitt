import authServices from '../../services/auth'

export default {
  actions: {
    CODEVALIDATE({}, form) {
      return new Promise((resolve, reject) => {

        authServices.codeValidate(form).then(res => {
          if (res.data.code !== 200) return reject(res.data.errors)

          resolve(res.message)
        })
        
      })
    }
  }
}
