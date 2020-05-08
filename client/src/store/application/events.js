import appServices from '../../services/application'

export default {
  state: {
    events: [],
    filter: {
      page: 1
    }
  },
  getters: {
    events(state) {
      return state.events
    }
  },
  mutations: {
    saveEvents(state, data) {
      state.filter.page += 1
      state.events.push(...data)
    },
    pushEvent(state, data) {
      state.events.unshift(data)
    },
    deleteEvent(state, eventId) {
      state.events.map((event, i) => event.id === eventId ? state.events.splice(i, 1) : event)
    },
  },
  actions: {
    EVENTS({ commit, state , dispatch }) {
      return new Promise((resolve, reject) => {
        appServices.events(state.filter).then(res => {
          if (res.data.status === 401) {
            dispatch("LOGOUT")
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
          if (!res.data.data.length) return resolve('end')
          commit('saveEvents', res.data.data)
          resolve('done')
        })
      })
    },
    CREATEEVENT({ commit , dispatch }, form) {
      return new Promise((resolve, reject) => {
        appServices.createEvent(form).then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
          commit('pushEvent', res.data.data)
          resolve(res.message)
        })
      })
    },
    EDITEVENT({ commit,dispatch }, form) {
      return new Promise((resolve, reject) => {
        appServices.editEvent(form).then(res => {
          if (res.data.status === 401) {
            dispatch("LOGOUT")
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
          commit('deleteEvent', res.data.data.id)
          commit('pushEvent', res.data.data)
          resolve(res.message)
        })
      })
    },
    DELETEEVENT({ commit , dispatch }, eventId) {
      return new Promise((resolve, reject) => {
        appServices.deleteEvent(eventId).then(res => {
          if (res.data.status === 401) {
            dispatch("LOGOUT")
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.message)
          commit('deleteEvent', eventId)
          resolve("deleted")
        })
      })
    },
  }
}
