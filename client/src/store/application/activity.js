import appServices from '../../services/application'

export default {
    mutations: {
        pushActivity(state, payload) {
            this.state.feeds.feeds.unshift(payload)
        },
        deleteActivity(state, payload) {
            this.state.feeds.feeds.map((post, i) => post.id === payload.id ? this.state.feeds.feeds.splice(i, 1) : post)
        }
    },
    actions: {
        ADDACTIVITY({ commit }, form) {
            return new Promise((resolve, reject) => {
                appServices.addActivity(form).then(res => {
                    if (res.data.status === 401) {
                        // we will handle logout option // call logout function
                    }
                    if (res.data.code !== 200) return reject(res.data.errors)
                        commit('pushActivity', res.data.data)
                        resolve('added')
                })
            })
        },
        EDITACTIVITY({commit}, form) {
            return new Promise((resolve, reject) => {
                appServices.editActivity(form).then(res => {
                  if (res.data.status === 401) {
                    // we will handle logout option // call logout function
                  }
                  if (res.data.code !== 200) return reject(res.data.errors)
                    commit('deleteActivity', res.data.data)
                    commit('pushActivity', res.data.data)
                    resolve('Edited')
                })
              })
        }
    }
}
