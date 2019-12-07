import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import InfiniteLoading from 'vue-infinite-loading';
import Vuelidate from 'vuelidate';
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

Vue.use(require('vue-moment'));
Vue.use(InfiniteLoading, {
  props: {
    spinner: 'bubbles',
  },
  slots: {
    noMore: 'No more Posts'
  },
});

Vue.use(Vuelidate);

// router Guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.getToken) {
      next({
        name: 'login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.getToken) {
      next({
        name: 'app'
      })
    } else {
      next()
    }
  } else {
    next(); // make sure to always call next()!
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
