import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const GA_TRACKING_CODE = 'UA-109767818-4'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/apply',
    name: 'Apply',
    component: () => import(/* webpackChunkName: "apply" */ '../views/Apply.vue')
  }
]

const router = new VueRouter({
  base: process.env.NODE_ENV === 'production' ? '/frontend-role/' : '/',
  mode: 'history',
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

Vue.use(VueAnalytics, {
  id: GA_TRACKING_CODE,
  router
})

export default router
