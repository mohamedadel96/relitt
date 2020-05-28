import appServices from '../../services/application'

export default {
  state: {
    profile: null,
    notifications: null,
    interestsList: null
  },
  getters: {
    profile(state) {
      return state.profile
    },
    notifications(state) {
      return state.notifications
    },
    interestsList(state) {
      return state.interestsList
    },
  },
  mutations: {
    saveProfile(state, data) {
      state.profile = data
    },
    saveNotifications(state, data) {
      state.notifications = data
    },
    saveInterestsList(state, data) {
      state.interestsList = data
    }
  },
  actions: {
    PROFILE({ commit , dispatch }) {
      return new Promise((resolve, reject) => {
        appServices.profile().then(res => {
          if (res.data.status === 401) {
            dispatch("LOGOUT")
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
          commit('saveProfile', res.data.data)
          resolve('done')
        })
      })
    },
    EDITPROFILE({ commit , dispatch }, form) {
      return new Promise(async (resolve, reject) => {
        await appServices.basicInfo(form).then(res => {
          if (res.data.status === 401) {
            dispatch("LOGOUT")

            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
        })
        await appServices.editProfile(form).then(res => {
          if (res.data.status === 401) {
            dispatch("LOGOUT")

            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
          commit('saveProfile', res.data.data)
            resolve(true)
        })
      })
    },
    PROFILECHANGEPASSWORD({ dispatch  }, form) {
      return new Promise((resolve, reject) => {
        appServices.profileChangePassword(form).then(res => {
          if (res.data.code !== 200) return reject(res.data.message)
          resolve(res.message)
        })

      })
    },
    NOTIFICATIONS({ commit , dispatch}) {
      return new Promise((resolve, reject) => {
        appServices.notifications().then(res => {
          if (res.data.status === 401) {
            dispatch("LOGOUT")

            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
          commit('saveNotifications', res.data.data)
          resolve('done')
        })

      })
    },
    NOTIFICATIONSETTINGS({ commit , dispatch}, form) {
      return new Promise((resolve, reject) => {
        appServices.notificationSettings(form).then(res => {
          if (res.data.status === 401) {
            dispatch("LOGOUT")

            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
          commit('saveProfile', res.data.data)
          resolve('done')
        })

      })
    },
    INTERESTSLIST({ commit , dispatch }) {
      return new Promise((resolve, reject) => {
        appServices.interestsList().then(res => {
          if (res.data.status === 401) {
            dispatch("LOGOUT")
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
          commit('saveInterestsList', res.data.data)
          resolve('done')
        })

      })
    }

  }
}
