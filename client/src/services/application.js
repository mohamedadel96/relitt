import Api from './api'

export default {
    userCard() {
      return Api().get('profile')
   }

}