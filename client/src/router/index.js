import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/registration.vue'),
    children: [
      {
        path: '/registration/sign-in',
        name: 'signIn',
        component: () => import('../components/registration/signIn')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
