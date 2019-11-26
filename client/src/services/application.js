import Api from './api'

export default {
    userCard() {
      return Api().get('profile')
   },
    events() {
      return Api().get(`events?lat=&lng=&page=`)
   }

}