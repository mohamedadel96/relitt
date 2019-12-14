import appServices from '../../services/application'

export default {
    actions: {
        UPLOADFILES({ }, payload) {
            return new Promise((resolve, reject) => {
                appServices.uploadFiles(payload).then(res => {
                    if (res.data.status === 401) {
                        // we will handle logout option // call logout function
                    }
                    if (res.data.code !== 200) return reject(res.data.errors)
                    resolve(res.data.data)
                })
            })
        }
    }
}
