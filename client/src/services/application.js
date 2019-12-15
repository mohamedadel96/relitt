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
   },
   uploadFiles(payload) {
      return Api().post('upload_multiple', payload)
   },
   post(payload) {
      return Api().post('posts', payload)
   },
   createEvent(form){
      return Api().post('events' , form)
   }

}