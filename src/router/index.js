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
import AssetsAdmin from '@/components/admin/AssetsAdmin'
import CollectionsAdmin from '@/components/admin/CollectionsAdmin'
import FormsAdmin from '@/components/admin/FormsAdmin'
import ListUsers from '@/components/admin/ListUsers'
import ListSettings from '@/components/admin/ListSettings'
import LanguagesAdmin from '@/components/admin/LanguagesAdmin'
import ChannelsAdmin from '@/components/admin/ChannelsAdmin'

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
        // pages
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
        // Assets
        {
          path: 'assets',
          name: 'AdminAssets',
          components: {
            header: AdminHeader,
            main: AssetsAdmin,
            sidebar: SideMenu,
          },
          meta: {
            requiresAuth: true,
          },
        },
        // Collections
        {
          path: 'collections',
          name: 'AdminCollections',
          components: {
            header: AdminHeader,
            main: CollectionsAdmin,
            sidebar: SideMenu,
          },
          meta: {
            requiresAuth: true,
          },
        },
        // Forms
        {
          path: 'forms',
          name: 'AdminForms',
          components: {
            header: AdminHeader,
            main: FormsAdmin,
            sidebar: SideMenu,
          },
          meta: {
            requiresAuth: true,
          },
        },
        // Users
        {
          path: 'users',
          name: 'AdminUsers',
          components: {
            header: AdminHeader,
            main: ListUsers,
            sidebar: SideMenu,
          },
          meta: {
            requiresAuth: true,
          },
        },
        // Settings
        {
          path: 'settings',
          name: 'AdminSettings',
          components: {
            header: AdminHeader,
            main: ListSettings,
            sidebar: SideMenu,
          },
          meta: {
            requiresAuth: true,
          },
          children: [
            {
              path: 'languages',
              name: 'AdminLanguages',
              component: LanguagesAdmin,
              meta: {
                requiresAuth: true,
              },
            },
            {
              path: 'channels',
              name: 'AdminChannels',
              component: ChannelsAdmin,
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
