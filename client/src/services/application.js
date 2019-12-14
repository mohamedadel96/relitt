import Api from './api'

export default {

   userCard() {
      return Api().get('profile')
   },
   events(payload) {
      return Api().get(`events?lat=&lng=&page=${payload.page}`)
   },
   feeds(payload) {
      return Api().get(`home/feed?page=${payload.page}`)
   },
   dashboard() {
      return Api().get('dashboard')
   },
   centerCard(page) {
      return Api().get(`centers?lat=29.9490403&lng=31.2916668&page=${page}`)
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