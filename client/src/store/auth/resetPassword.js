import authServices from '../../services/auth'

export default {
  state: {
    email: JSON.parse(sessionStorage.getItem('email')) ? JSON.parse(sessionStorage.getItem('email')) : null
  },
  mutations:
  {
    saveResetData(state, data) {
      sessionStorage.setItem('email', JSON.stringify(data))
      state.email = data
    }    
  },
  actions: {
    RESETPASSWORD({commit , state}, form) {
      return new Promise((resolve, reject) => {

        
        authServices.resetPassword(form).then(res => {
          if (res.data.code !== 200) return reject(res.data.errors)
          commit("saveResetData", form)
          console.log(state.email)

          resolve(res.message)
        })
        
      })
    }
  }
}
