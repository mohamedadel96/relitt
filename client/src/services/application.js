import Api from './api'

export default {

   profile() {
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
   editPost(payload) {
      return Api().post(`posts/update/${payload.postId}`, payload)
   },
   deletePost(postId) {
      return Api().post(`posts/delete/${postId}`)
   },
   createEvent(form) {
      return Api().post('events', form)
   },
   toggleLike(form) {
      return Api().post(`posts/${form.liked ? 'unlike' : 'like'}/${form.id}`)
   },
   addComment(payload) {
      return Api().post(`posts/comments/${payload.postId}`, payload.form)
   },
   editComment(payload) {
      return Api().post(`posts/comments/update/${payload.id}`, payload.form)
   },
   deleteComment(commentId) {
      return Api().post(`posts/comments/delete/${commentId}`)
   },
   addActivity(payload) {
      return Api().post('activities', payload)
   },
   editActivity(payload) {
      return Api().post(`activities/${payload.activity_id}`, payload)
   },
   editProfile(payload) {
      return Api().post('profile/update', payload)
   },
   basicInfo(payload) {
      return Api().post('profile/update_basic', payload)
   },
   profileChangePassword(payload) {
      return Api().post('profile/change_password', payload)
   },
   myReviews() {
      return Api().get('centers/my_reviews')
   },
   notifications() {
      return Api().get('notifications')
   },
   notificationSettings(payload) {
      return Api().post('profile/settings', payload)
   },
   addEventComment(payload) {
      return Api().post(`events/comments/${payload.eventId}`, payload.form)
   },

}