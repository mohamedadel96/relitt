import appServices from '../../services/application'

export default {
    state: {
        center: null
    },
    getters: {
        center(state) {
            return state.center
        }
    },
    mutations: {
        saveCenter(state, data) {
            state.center = data
        }
    },
    actions: {
        CENTER({ commit , dispatch }, id) {
            return new Promise((resolve, reject) => {
                appServices.center(id).then(res => {
                    if (res.data.status === 401) {
                        dispatch("LOGOUT")
                        // we will handle logout option // call logout function
                    }
                    if (res.data.code !== 200) return reject(res.data.message)
                    commit('saveCenter', res.data.data)
                    resolve('done')
                })
            })
        }
    }
}
