import authServices from '../../services/auth'

export default {
  state: {
  },
  mutations: {
  },
  actions: {
    SIGNUP({commit}, form) {
        authServices.signup(form).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
        
    }
  }
}
