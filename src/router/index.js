import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import PageRender from '@/components/PageRender'
import LayoutAdmin from '@/components/admin/LayoutAdmin'
import SignIn from '@/components/admin/login/SignIn'
import SignUp from '@/components/admin/login/SignUp'
import AdminHeader from '@/components/admin/ui/AdminHeader'
import SideMenu from '@/components/admin/ui/SideMenu'
import DashboardAdmin from '@/components/admin/DashboardAdmin'
import ListPages from '@/components/admin/ListPages'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    // Sign In
    {
      path: '/login',
      name: 'login',
      component: LayoutAdmin,
      props: {
        header: false,
        sidebar: false,
        footer: false,
      },
      meta: {
        requiresAuth: false,
      },
      children: [
        {
          path: 'sign-in',
          name: 'signIn',
          components: {
            header: AdminHeader,
            main: SignIn,
          },
          meta: {
            requiresAuth: false,
          },
        },
        {
          path: 'sign-up',
          name: 'signUp',
          component: SignUp,
          meta: {
            header: AdminHeader,
            requiresAuth: false,
          },
        },
      ],
    },
    // Admin
    {
      path: '/admin',
      component: LayoutAdmin,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: '',
          name: 'AdminDashboard',
          components: {
            header: AdminHeader,
            main: DashboardAdmin,
            sidebar: SideMenu,
          },
          meta: {
            requiresAuth: false,
          },
        },
        {
          path: 'pages',
          name: 'PagesList',
          components: {
            header: AdminHeader,
            main: ListPages,
            sidebar: SideMenu,
          },
          meta: {
            requiresAuth: false,
          },
          children: [
            {
              path: 'add',
              name: 'PagesAdd',
              // component: InfluencersForm,
              meta: {
                requiresAuth: true,
              },
            },
            {
              path: 'edit/:slug',
              name: 'PagesEdit',
              // component: CategoriesForm,
              props: true,
              meta: {
                requiresAuth: true,
              },
            },
          ],
        },
      ],
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
    next('/login/sign-in')
  } else if (requiresAuth && isLoggedIn) {
    next()
  } else {
    next()
  }
})

export default router
