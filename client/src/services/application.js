import Api from './api'

export default {

   userCard() {
      return Api().get('profile')
   },
   events(payload) {
<<<<<<< HEAD
      return Api().get(`events?page=${payload.page}`)
||||||| 3149f09
      return Api().get(`events?lat=29.9490403&lng=31.2916668&page=${payload.page}`)
=======
      return Api().get(`events?lat=&lng=&page=${payload.page}`)
>>>>>>> 62bb3320a060e7b159cbf295bf028b5c62920220
   },
   feeds(payload) {
      return Api().get(`home/feed?page=${payload.page}`)
   },
   dashboard() {
      return Api().get('dashboard')
   },
   centerCard(payload) {
      return Api().get(`centers?lat=29.9490403&lng=31.2916668&page=${payload.page}`)
   },
   center(id) {
      return Api().get(`centers/${id}`)
   },
   myEvent() {
      return Api().get("my_events")
   },
   event(id) {
      return Api().get(`events/${id}`)
   }

}