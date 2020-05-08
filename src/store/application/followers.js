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
        removeFriends(state, data) {
            state.friends = []
        },
        toggleFollowing(state, payload) {
            state.friends.map(friend => {
                if (friend.id == payload.id) {
                    friend.is_following = !friend.is_following
                }
                return friend
            })
        }
    },
    actions: {
        SUGESTEDFOLLWERS({ commit , dispatch}) {
            return new Promise((resolve, reject) => {
                appServices.suggestedFollowers().then(res => {
                    if (res.data.status === 401) {
                        dispatch("LOGOUT")
                        // we will handle logout option // call logout function
                    }
                    if (res.data.code !== 200) return reject(res.data.message)
                    commit('saveSuggestedFollowers', res.data.data)
                    resolve('done')
                })
            })
        },
        FRIENDS({ commit , dispatch }, query) {
            return new Promise((resolve, reject) => {
                if (query == null || query == '') {
                    commit('removeFriends')
                    return resolve('done')
                }
                appServices.friends(query).then(res => {
                    if (res.data.status === 401) {
                        dispatch("LOGOUT")
                        // we will handle logout option // call logout function
                    }
                    if (res.data.code !== 200) return reject(res.data.message)
                    commit('saveFriends', res.data.data)
                    resolve('done')
                })
            })
        },
        TOGGLEFOLLOWING({ commit, dispatch }, payload) {
            return new Promise((resolve, reject) => {
                appServices.toggleFollowing(payload).then(res => {
                    if (res.data.status === 401) {
                        dispatch("LOGOUT")
                        // we will handle logout option // call logout function
                    }
                    if (res.data.code !== 200) return reject(res.data.message)
                    commit('toggleFollowing', payload)
                    dispatch('PROFILE')
                    dispatch('SUGESTEDFOLLWERS')
                    dispatch('FEEDS')
                    resolve('done')
                })
            })
        }

    }
}
