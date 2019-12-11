import authServices from '../../services/auth'

export default {
  //  state:{
  //    token:(JSON.stringify(localStorage.getItem('user'))).token  
  //  },
  actions: {
    LOGOUT({ commit },state ) {
      return new Promise((resolve, reject) => {
        authServices.logout().then(res => {
          if (res.data.code !== 200) return reject(res.data.errors)
          commit('removeAuthData', res.data, { root: true })
          resolve('done')
        })
        
      })
    }
  }
}
