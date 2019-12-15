import appServices from '../../services/application'

export default {
    actions: {
        CREATEEVENT(form) {
            return new Promise((resolve, reject) => {
                appServices.createEvent({form}).then(res => {
                    if (res.data.code !== 200) return reject(res.data.errors)
                    resolve(res.message)
                })
            })
        }
    }
}



