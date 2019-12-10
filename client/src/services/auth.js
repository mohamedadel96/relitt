import Api from './api'

export default {
   validateEmail(form) {
      return Api().post('auth/validate_email', form)
   },

   signup(form) {
      return Api().post('auth/signup', form)
   },

   login(form) {
      return Api().post('auth', form)
   },

   resetPassword(form) {
      return Api().post('auth/forget_password', form)
   },

   codeValidate(form) {
      return Api().post('auth/validate_code', form)
   },
   changePassword(form) {
      return Api().post('auth/reset_password', form)
   }

}