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
        path: '/registration/entrance',
        name: 'entrance',
        component: () => import('../components/registration/entrance.vue')
      },
      {
        path: '/registration/signup',
        name: 'signup',
        component: () => import('../components/registration/signup.vue')
      },
      {
        path: '/registration/reset-password',
        name: 'resetPassword',
        component: () => import('../components/registration/resetPassword.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
