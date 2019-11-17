import authServices from '../../services/auth'

export default {
  state: {
  },
  mutations: {
  },
  actions: {
    SIGNUP({commit}, form) {
        return new Promise((resolve, reject) => {
            authServices.signup(form).then(res => {
                console.log('correct')
                console.log(res.data)
                resolve(res)
            }).catch(err => {
                console.log(err)
                reject('error')
            })
        })
        
    }
  }
}
