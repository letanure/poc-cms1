import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import PageRender from '@/components/PageRender'
import LayoutAdmin from '@/components/admin/LayoutAdmin'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    // Admin
    {
      path: '/admin',
      component: LayoutAdmin,
      meta: {
        requiresAuth: true,
      },
    },
    // Public site
    {
      path: '/:url*',
      name: 'PageRender',
      component: PageRender,
      props: true,
      meta: {
        requiresAuth: false,
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters.isLoggedIn
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !isLoggedIn) {
    // go to login page
  } else if (requiresAuth && isLoggedIn) {
    next()
  } else {
    next()
  }
})

export default router
