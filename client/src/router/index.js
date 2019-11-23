import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import App from '../views/app.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/registration',
    component: () => import('../views/registration.vue'),
    meta: {
      requiresVisitor: true
    },
    children: [
      {
        path: '',
        name: 'registration',
        component: () => import('../components/registration/entrance.vue'),
        meta: {
          requiresVisitor: true
        }
      },
      {
        path: 'signup',
        name: 'signup',
        component: () => import('../components/registration/signup.vue'),
        meta: {
          requiresVisitor: true
        }
      },
      {
        path: 'reset-password',
        name: 'resetPassword',
        component: () => import('../components/registration/resetPassword.vue'),
        meta: {
          requiresVisitor: true
        }
      },
      {
        path: 'code',
        name: 'code',
        component: () => import('../components/registration/code.vue'),
        meta: {
          requiresVisitor: true
        }
      },
      {
        path: 'change-password',
        name: 'changePassword',
        component: () => import('../components/registration/changePassword.vue'),
        meta: {
          requiresVisitor: true
        }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../components/registration/login.vue'),
        meta: {
          requiresVisitor: true
        }
      }
    ]
  },
  {
    path: '/app',
    component: App,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        component: () => import('../views/feeds-dashboard.vue'),
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: '',
            name: 'app',
            component: () => import('../components/app/feeds.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'dashboard',
            name: 'dashboard',
            component: () => import('../components/app/dashboard.vue'),
            meta: {
              requiresAuth: true
            }
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
