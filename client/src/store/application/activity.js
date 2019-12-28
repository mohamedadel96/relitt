import appServices from '../../services/application'

export default {

    mutations: {
        pushActivity(state, payload) {
            this.state.feeds.feeds.unshift(payload)
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
        }
    }
}
