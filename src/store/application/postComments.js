import appServices from '../../services/application'

export default {
    mutations: {
        saveComment(state, comment) {
            this.state.feeds.feeds.map(post => post.id === comment.post_id ? post.comments.unshift(comment) : post)
        },
        editComment(state, comment) {
            let commentPost = this.state.feeds.feeds.filter(post => post.id === comment.post_id)[0]
            commentPost.comments.map((c, i) => c.id === comment.id ? commentPost.comments.splice(i, 1, comment) : c)
            this.state.feeds.feeds.map(post => post.id === comment.post_id ? commentPost : post)
        },
        deleteComment(state, comment) {
            let commentPost = this.state.feeds.feeds.filter(post => post.id === comment.post_id)[0]
            commentPost.comments.map((c, i) => c.id === comment.id ? commentPost.comments.splice(i, 1) : c)
            this.state.feeds.feeds.map(post => post.id === comment.post_id ? commentPost : post)
        }
    },
    actions: {
        ADDCOMMENT({ commit , dispatch }, payload) {
            return new Promise((resolve, reject) => {
                appServices.addComment(payload).then(res => {
                    if (res.data.status === 401) {
                        dispatch("LOGOUT")
                        // we will handle logout option // call logout function
                    }
                    if (res.data.code !== 200) return reject(res.data.message)
                    commit('saveComment', res.data.data)
                    resolve('commented')
                })
            })
        },
        EDITCOMMENT({ commit , dispatch}, payload) {
            return new Promise((resolve, reject) => {
                appServices.editComment(payload).then(res => {
                    if (res.data.status === 401) {
                        dispatch("LOGOUT")
                        // we will handle logout option // call logout function
                    }
                    if (res.data.code !== 200) return reject(res.data.message)
                    commit('editComment', res.data.data)
                    resolve('edited')
                })
            })
        },
        DELETECOMMENT({ commit , dispatch }, comment) {
            return new Promise((resolve, reject) => {
                appServices.deleteComment(comment.id).then(res => {
                    if (res.data.status === 401) {
                        dispatch("LOGOUT")
                        // we will handle logout option // call logout function
                    }
                    if (res.data.code !== 200) return reject(res.data.message)
                    commit('deleteComment', comment)
                    resolve('Deleted')
                })
            })
        }
    }
}
