import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import WebView from '../views/WebView.vue'
import DashboardView from '../views/DashboardView.vue'

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
          name: 'IPv4-IPv6',
          component: () => import('../views/front/IPv4-IPv6/IPv4-IPv6.vue')
        }
      ],
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      redirect: "/dashboard/dashboardHome",
      children: [
        {
          path: 'dashboardHome',
          name: 'dashboardHome',
          component: () => import('../views/dashboard/home/home.vue')
        },
      ],
    },
  ]
})

export default router
