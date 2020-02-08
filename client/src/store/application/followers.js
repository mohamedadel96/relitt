import appServices from '../../services/application'

export default {
    state: {
        suggestedFollowers: [],
        friends: []
    },
    getters: {
        suggestedFollowers(state) {
            return state.suggestedFollowers
        },
        friends(state) {
            return state.friends
        }
    },
    mutations: {
        saveSuggestedFollowers(state, data) {
            state.suggestedFollowers = data
        },
        saveFriends(state, data) {
            state.friends = data
        },
    },
    actions: {
        SUGESTEDFOLLWERS({ commit }) {
            return new Promise((resolve, reject) => {
                appServices.suggestedFollowers().then(res => {
                    if (res.data.status === 401) {
                        // we will handle logout option // call logout function
                    }
                    if (res.data.code !== 200) return reject(res.data.message)
                    commit('saveSuggestedFollowers', res.data.data)
                    resolve('done')
                })
            })
        },
        FRIENDS({ commit }, query) {
            return new Promise((resolve, reject) => {
                appServices.friends(query).then(res => {
                    if (res.data.status === 401) {
                        // we will handle logout option // call logout function
                    }
                    if (res.data.code !== 200) return reject(res.data.message)
                    commit('saveFriends', res.data.data)
                    resolve('done')
                })
            })
        }

    }
}
