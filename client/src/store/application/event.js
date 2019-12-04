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
        }
    },
    actions: {
        EVENT({ commit }, id) {
            return new Promise((resolve, reject) => {
                appServices.event(id).then(res => {
                    if (res.data.status === 401) {
                        // we will handle logout option // call logout function
                    }
                    if (res.data.code !== 200) return reject(res.data.errors)
                    commit('saveEvent', res.data.data)
                    console.log(res.data.data)
                    resolve('done')
                })
            })
        }
    }
}
