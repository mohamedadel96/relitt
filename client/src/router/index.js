import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import App from '../views/app.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/registration',
    component: () => import('../views/registration.vue'),
    children: [
      {
        path: '',
        name: 'registration',
        component: () => import('../components/registration/entrance.vue')
      },
      {
        path: 'signup',
        name: 'signup',
        component: () => import('../components/registration/signup.vue')
      },
      {
        path: 'reset-password',
        name: 'resetPassword',
        component: () => import('../components/registration/resetPassword.vue')
      },
      {
        path: 'code',
        name: 'code',
        component: () => import('../components/registration/code.vue')
      },
      {
        path: 'change-password',
        name: 'changePassword',
        component: () => import('../components/registration/changePassword.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../components/registration/login.vue')
      }
    ]
  },
  {
    path: '/app',
    component: App,
    children: [
      {
        path: '',
        component: () => import('../views/feeds-dashboard.vue'),
        children: [
          {
            path: '',
            name: 'app',
            component: () => import('../components/app/feeds.vue'),
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
