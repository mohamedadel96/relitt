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
            state.history.push(data)
            state.event = data
        },
        removeEvent(state, data) {
            state.event = null
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
        }
    }
}
