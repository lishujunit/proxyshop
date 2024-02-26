import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import WebView from '../views/WebView.vue'
import DashboardView from '../views/DashboardView.vue'

import { useStore } from '@/stores/user';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: "/web/home"
    },
    {
      path: '/web',
      name: 'web',
      component: WebView,
      redirect: "/web/home",
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/front/home/home.vue')
        },
        {
          path: 'signup',
          name: 'signup',
          component: () => import('../views/front/signup/signup.vue')
        },
        {
          path: 'signin',
          name: 'signin',
          component: () => import('../views/front/signin/signin.vue')
        },
        {
          path: 'feedback',
          name: 'feedback',
          component: () => import('../views/front/feedback/feedback.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/front/contact/contact.vue')
        },
        {
          path: 'documentation',
          name: 'documentation',
          component: () => import('../views/front/documentation/documentation.vue')
        },
        {
          path: 'IPv4-IPv6',
          name: 'web-IPv4-IPv6',
          component: () => import('../views/front/IPv4-IPv6/IPv4-IPv6.vue')
        },
        {
          path: 'forgot-password',
          name: 'forgot-password',
          component: () => import('../views/front/forgot-password/forgot-password.vue'),
          redirect: "forgot-password/password-reset",
          children: [
            {
              path: 'password-reset',
              name: 'password-reset',
              component: () => import('../views/front/forgot-password/view/password-reset/password-reset.vue')
            },
            {
              path: 'done',
              name: 'password-reset-done',
              component: () => import('../views/front/forgot-password/view/done/done.vue')
            },
            {
              path: 'set-password',
              name: 'set-password',
              component: () => import('../views/front/forgot-password/view/set-password/set-password.vue')
            },
            
            {
              path: 'password-reset-complete',
              name: 'password-reset-complete',
              component: () => import('../views/front/forgot-password/view/password-reset-complete/password-reset-complete.vue')
            }
          ]
        },

        { path: '/:pathMatch(.*)', component: () => import('../views/404/404.vue') }
      ],
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      redirect: "/dashboard/proxies",
      children: [
        {
          path: 'proxies',
          name: 'proxies',
          component: () => import('../views/dashboard/home/home.vue')
        },
        {
          path: 'IPv4-IPv6',
          name: 'dashboard-IPv4-IPv6',
          component: () => import('../views/dashboard/IPv4-IPv6/IPv4-IPv6.vue')
        },
        {
          path: 'Add-funds',
          name: 'Add-funds',
          component: () => import('../views/dashboard/Add-funds/Add-funds.vue')
        },
        {
          path: 'affiliate',
          name: 'affiliate',
          component: () => import('../views/dashboard/affiliate/affiliate.vue')
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('../views/dashboard/settings/settings.vue')
        },
        {
          path: 'api',
          name: 'api',
          component: () => import('../views/dashboard/api/api.vue')
        },
      ],
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const user = useStore();
  const isAuthenticated = user.userData?.access_token;
  const toPath = to.path;
  if(toPath.startsWith('/dashboard')) {
    if(isAuthenticated) {
      next();
    } else {
      next({
        path: '/web/signin',
        query: {
          next: toPath
        }
      })
    }
  } else {
    next();
  }
})

export default router
