import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login', name: 'Login', meta: { guest: true },
    component: () => import('@/views/Login')
  },
  {
    path: '/', name: 'Main',
    component: () => import('@/views/Main')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      next({
        path: '/',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next({ name: 'Main' })
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('token') == null) {
      next()
    } else {
      next({ name: 'Main' })
    }
  } else {
    next()
  }
})

export default router
