import appServices from '../../services/application'

export default {
    actions: {
        UPLOADFILES({ dispatch}, payload) {
            return new Promise((resolve, reject) => {
                appServices.uploadFiles(payload).then(res => {
                    if (res.data.status === 401) {
                        dispatch("LOGOUT")

                        // we will handle logout option // call logout function
                    }
                    if (res.data.code !== 200) return reject(res.data.message)
                    resolve(res.data.data)
                })
            })
        }
    }
}
