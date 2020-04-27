import appServices from '../../services/application'

export default {
    state: {
        spot: null
    },
    getters: {
        spot(state) {
            return state.spot
        }
    },
    mutations: {
        saveSpot(state, data) {
            state.spot = data
        }
    },
    actions: {
        SPOT({ commit }, id) {
            return new Promise((resolve, reject) => {
                appServices.spot(id).then(res => {
                    if (res.data.status === 401) {
                        // we will handle logout option // call logout function
                    }
                    if (res.data.code !== 200) return reject(res.data.errors)
                    commit('saveSpot', res.data.data)
                    resolve('done')
                })
            })
        }
    }
}
