import Api from './api'

export default {

   userCard() {
      return Api().get('profile')
   },
   events() {
      return Api().get(`events?lat=&lng=&page=`)
   },
   feeds() {
      return Api().get('home/feed?page=1&page_size=10')
   },
   expCard() {
      return Api().get('dashboard')
   },
   centerCard() {
      return Api().get('centers?lat=29.9490403&lng=31.2916668&page=1')
   }
   
}