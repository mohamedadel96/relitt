import Api from './api'

export default {
    signup(form) {
       return Api().post('auth/signup', form)
    },

    login(form) {
        return Api().post('auth', form)
     }
}