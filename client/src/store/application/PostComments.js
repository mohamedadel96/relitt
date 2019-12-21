import appServices from '../../services/application'

export default {
    mutations: {
        saveComment(state, comment) {
            this.state.feeds.feeds.map(post => post.id === comment.post_id ? post.comments.push(comment) : post)
        }
    },
    actions: {
        ADDCOMMENT({ commit }, payload) {
            return new Promise((resolve, reject) => {
                appServices.addComment(payload).then(res => {
                    if (res.data.status === 401) {
                        // we will handle logout option // call logout function
                    }
                    if (res.data.code !== 200) return reject(res.data.errors)
                    commit('saveComment', res.data.data)
                    resolve('commented')
                })
            })
        }
    }
}
