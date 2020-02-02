import appServices from '../../services/application'

export default {
  state: {
    profile: null,
    notifications: null
  },
  getters: {
    profile(state) {
      return state.profile
    },
    notifications(state) {
      return state.notifications
    },
  },
  mutations: {
    saveProfile(state, data) {
      state.profile = data
    },
    saveNotifications(state, data) {
      state.notifications = data
    }
  },
  actions: {
    PROFILE({ commit }) {
      return new Promise((resolve, reject) => {
        appServices.profile().then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
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
          if (res.data.code !== 200) return reject(res.data.message)
        })
        await appServices.editProfile(form).then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
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
    },
    NOTIFICATIONS({ commit }) {
      return new Promise((resolve, reject) => {
        appServices.notifications().then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
          commit('saveNotifications', res.data.data)
          resolve('done')
        })

      })
    },
    NOTIFICATIONSETTINGS({ commit }, form) {
      return new Promise((resolve, reject) => {
        appServices.notificationSettings(form).then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
          commit('saveProfile', res.data.data)
          resolve('done')
        })

      })
    }

  }
}
