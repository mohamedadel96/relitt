import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import App from '../views/application.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
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
        redirect: 'signup'
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
        path: 'entrance',
        name: 'entrance',
        component: () => import('../components/registration/entrance.vue'),
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
        component: () => import('../views/sub-views/app-layout.vue'),
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: '',
            name: 'app',
            component: () => import('../components/application/feeds/feeds.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'dashboard',
            name: 'dashboard',
            component: () => import('../components/application/dashboard/dashboard.vue'),
            meta: {
              requiresAuth: true
            }
          }
        ]
      },
      {
        path: 'events',
        name: 'events',
        component: () => import('../views/sub-views/events.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'events/:id',
        name: 'event',
        component: () => import('../views/sub-views/event.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'centers',
        name: 'centers',
        component: () => import('../views/sub-views/centers.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'centers/:id',
        name: 'center',
        component: () => import('../views/sub-views/center.vue'),
        meta: {
          requiresAuth: true
        }
      },     
      {
        path: 'spots',
        name: 'spots',
        component: () => import('../views/sub-views/spots.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'spots/:id',
        name: 'spot',
        component: () => import('../views/sub-views/spot.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
