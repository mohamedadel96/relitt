import Api from './api'

export default {

   userCard() {
      return Api().get('profile')
   },
   events() {
      return Api().get(`events?lat=&lng=&page=`)
   },
   feed() {
      return Api().get('home/feed?page=1&page_size=10')
   },
   expCard() {
      return Api().get('dashboard')
   }
   
}