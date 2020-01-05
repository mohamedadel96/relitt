import appServices from '../../services/application'

export default {
  state: {
    profile: null
  },
  getters: {
    profile(state) {
      return state.profile
    }
  },
  mutations: {
    saveProfile(state, data) {
      state.profile = data
    }
  },
  actions: {
    PROFILE({ commit }) {
      return new Promise((resolve, reject) => {
        appServices.profile().then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.errors)
          commit('saveProfile', res.data.data)
          resolve('done')
        })
      })
    },
    EDITPROFILE({ commit }, form) {
      return new Promise(async (resolve, reject) => {
        await appServices.basicInfo(form).then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.errors)
        })
        await appServices.editProfile(form).then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.errors)
          commit('saveProfile', res.data.data)
          resolve('done')
        })
      })
    },
    PROFILECHANGEPASSWORD({ commit }, form) {
      return new Promise((resolve, reject) => {
        appServices.profileChangePassword(form).then(res => {
          if (res.data.code !== 200) return reject(res.data.message)
          resolve(res.message)
        })

      })
    }
  }
}
