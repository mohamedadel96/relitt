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
      },
      {
        path: '/registration/code',
        name: 'code',
        component: () => import('../components/registration/code.vue')
      },
      {
        path: '/registration/change-password',
        name: 'changePassword',
        component: () => import('../components/registration/changePassword.vue')
      },
      {
        path: '/registration/login',
        name: 'login',
        component: () => import('../components/registration/login.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
