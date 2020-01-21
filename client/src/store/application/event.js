import appServices from '../../services/application'

export default {
    state: {
        event: null
    },
    getters: {
        event(state) {
            return state.event
        }
    },
    mutations: {
        saveEvent(state, data) {
            state.event = data
        },
        removeEvent(state, data) {
            state.event = null
        },
        saveEventComment(state, comment) {
            state.event.comments.push(comment)
        },
        saveAttendingStatus(state) {
            state.event.is_attending = !state.event.is_attending
        }
    },
    actions: {
        EVENT({ commit, state }, id) {
            return new Promise((resolve, reject) => {
                commit('removeEvent')
                appServices.event(id).then(res => {
                    if (res.data.status === 401) {
                        // we will handle logout option // call logout function
                    }
                    if (res.data.code !== 200) return reject(res.data.errors)
                    commit('saveEvent', res.data.data)
                    resolve('done')
                })
            })
        },
        ADDEVENTCOMMENT({ commit }, payload) {
            return new Promise((resolve, reject) => {
                appServices.addEventComment(payload).then(res => {
                    if (res.data.status === 401) {
                        // we will handle logout option // call logout function
                    }
                    if (res.data.code !== 200) return reject(res.data.errors)
                    commit('saveEventComment', res.data.data)
                    resolve('commented')
                })
            })
        },
        TOGGLEJOINMEETING({ commit }, payload) {
            return new Promise((resolve, reject) => {
                appServices.toggleJoinMeeting(payload).then(res => {
                    console.log(res.data)
                    if (res.data.status === 401) {
                        // we will handle logout option // call logout function
                    }
                    if (res.data.code !== 200) return reject(res.data.errors)
                    commit('saveAttendingStatus')
                    resolve(payload.is_attending ? 'Cancled' : 'Joined')
                })
            })
        },
    }
}
