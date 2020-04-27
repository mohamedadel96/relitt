import authServices from '../../services/auth'

export default {
  mutations: {
    removeAuthData() {
      localStorage.clear();
      location.reload()
    }
  },
  actions: {
    LOGOUT({ commit }) {
      return new Promise((resolve, reject) => {
        // authServices.logout().then(res => {
        //   if (res.data.code !== 200) return reject(res.data.message)
        // })
        commit('removeAuthData')
        resolve('done')

      })
    }
  }
}
