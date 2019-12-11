import authServices from '../../services/auth'

export default {
    getters:{
        getToken(state, getters, rootState){
            return rootState
        }

    },

  actions: {
    LOGOUT({ commit }) {
      return new Promise((resolve, reject) => {

        authServices.login(form).then(res => {
          if (res.data.code !== 200) return reject(res.data.errors)

          commit('saveAuthData', res.data, { root: true })
          resolve('done')
        })
        
      })
    }
  }
}
