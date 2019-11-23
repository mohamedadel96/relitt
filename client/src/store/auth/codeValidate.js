import authServices from '../../services/auth'

export default {
 
  actions: {
    CODEVALIDATE({rootState}, form) {
      return new Promise((resolve, reject) => {

        authServices.codeValidate(
          ...form,
          ...rootState.resetPassword.email
          ).then(res => {
          if (res.data.code !== 200) return reject(res.data.errors)

          resolve(res.message)
        })
        
      })
    }
  }
}



