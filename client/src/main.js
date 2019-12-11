import Vue from 'vue'
import InfiniteLoading from 'vue-infinite-loading';
import Vuelidate from 'vuelidate';
import Toasted from 'vue-toasted';
import Aos from 'aos'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'aos/dist/aos.css'

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
Vue.use(Toasted, {
  position: 'bottom-right',
  keepOnHover: true,
  duration: 4000
})

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
  created() {
    Aos.init(
      {
        duration: 1000,
        delay: 100,
      }
    )
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
