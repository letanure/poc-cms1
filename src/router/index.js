import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import PageRender from '@/components/PageRender'
import {
  AdminHeader,
  DashboardAdmin,
  LayoutAdmin,
  SettingsAdmin,
  SideMenu,
  SignIn,
  SignUp,
  PagesAdmin,
  PagesForm,
  PagesTable,
  AssetsAdmin,
  AssetsForm,
  AssetsTable,
  ChannelsAdmin,
  ChannelsForm,
  ChannelsTable,
  CollectionsAdmin,
  CollectionsForm,
  CollectionsTable,
  FormsAdmin,
  FormsForm,
  FormsTable,
  LanguagesAdmin,
  LanguagesForm,
  LanguagesTable,
  UsersAdmin,
  UsersForm,
  UsersTable
} from '@/components/admin/'

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
          name: 'DashboardAdmin',
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
          components: {
            header: AdminHeader,
            main: PagesAdmin,
            sidebar: SideMenu,
          },
          meta: {
            requiresAuth: false,
          },
          children: [
            {
              path: '',
              name: 'PagesList',
              component: PagesTable,
              meta: {
                requiresAuth: true,
              },
            },
            {
              path: 'add',
              name: 'PagesAdd',
              component: PagesForm,
              meta: {
                requiresAuth: true,
              },
            },
            {
              path: 'edit/:slug',
              name: 'PagesEdit',
              component: PagesForm,
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
          components: {
            header: AdminHeader,
            main: AssetsAdmin,
            sidebar: SideMenu,
          },
          meta: {
            requiresAuth: false,
          },
          children: [
            {
              path: '',
              name: 'AssetsList',
              component: AssetsTable,
              meta: {
                requiresAuth: true,
              },
            },
            {
              path: 'add',
              name: 'AssetsAdd',
              component: AssetsForm,
              meta: {
                requiresAuth: true,
              },
            },
            {
              path: 'edit/:slug',
              name: 'AssetsEdit',
              component: AssetsForm,
              props: true,
              meta: {
                requiresAuth: true,
              },
            },
          ],
        },

        // Collections
        {
          path: 'collections',
          components: {
            header: AdminHeader,
            main: CollectionsAdmin,
            sidebar: SideMenu,
          },
          meta: {
            requiresAuth: false,
          },
          children: [
            {
              path: '',
              name: 'CollectionsList',
              component: CollectionsTable,
              meta: {
                requiresAuth: true,
              },
            },
            {
              path: 'add',
              name: 'CollectionsAdd',
              component: CollectionsForm,
              meta: {
                requiresAuth: true,
              },
            },
            {
              path: 'edit/:slug',
              name: 'CollectionsEdit',
              component: CollectionsForm,
              props: true,
              meta: {
                requiresAuth: true,
              },
            },
          ],
        },

        // Forms
        {
          path: 'forms',
          components: {
            header: AdminHeader,
            main: FormsAdmin,
            sidebar: SideMenu,
          },
          meta: {
            requiresAuth: false,
          },
          children: [
            {
              path: '',
              name: 'FormsList',
              component: FormsTable,
              meta: {
                requiresAuth: true,
              },
            },
            {
              path: 'add',
              name: 'FormsAdd',
              component: FormsForm,
              meta: {
                requiresAuth: true,
              },
            },
            {
              path: 'edit/:slug',
              name: 'FormsEdit',
              component: FormsForm,
              props: true,
              meta: {
                requiresAuth: true,
              },
            },
          ],
        },

        // Users
        {
          path: 'users',
          components: {
            header: AdminHeader,
            main: UsersAdmin,
            sidebar: SideMenu,
          },
          meta: {
            requiresAuth: false,
          },
          children: [
            {
              path: '',
              name: 'UsersList',
              component: UsersTable,
              meta: {
                requiresAuth: true,
              },
            },
            {
              path: 'add',
              name: 'UsersAdd',
              component: UsersForm,
              meta: {
                requiresAuth: true,
              },
            },
            {
              path: 'edit/:slug',
              name: 'UsersEdit',
              component: UsersForm,
              props: true,
              meta: {
                requiresAuth: true,
              },
            },
          ],
        },

        // Settings
        {
          path: 'settings',
          components: {
            header: AdminHeader,
            main: SettingsAdmin,
            sidebar: SideMenu,
          },
          meta: {
            requiresAuth: true,
          },
          children: [
            // Languages
            {
              path: '',
              name: 'SettingsList',
              component: SettingsAdmin,
              meta: {
                requiresAuth: true,
              },
            },
            {
              path: 'languages',
              component: LanguagesAdmin,
              meta: {
                requiresAuth: false,
              },
              children: [
                {
                  path: '',
                  name: 'LanguagesList',
                  component: LanguagesTable,
                  meta: {
                    requiresAuth: true,
                  },
                },
                {
                  path: 'add',
                  name: 'LanguagesAdd',
                  component: LanguagesForm,
                  meta: {
                    requiresAuth: true,
                  },
                },
                {
                  path: 'edit/:slug',
                  name: 'LanguagesEdit',
                  component: LanguagesForm,
                  props: true,
                  meta: {
                    requiresAuth: true,
                  },
                },
              ],
            },
            // Channels
            {
              path: 'channels',
              component: ChannelsAdmin,
              meta: {
                requiresAuth: false,
              },
              children: [
                {
                  path: '',
                  name: 'ChannelsList',
                  component: ChannelsTable,
                  meta: {
                    requiresAuth: true,
                  },
                },
                {
                  path: 'add',
                  name: 'ChannelsAdd',
                  component: ChannelsForm,
                  meta: {
                    requiresAuth: true,
                  },
                },
                {
                  path: 'edit/:slug',
                  name: 'ChannelsEdit',
                  component: LanguagesForm,
                  props: true,
                  meta: {
                    requiresAuth: true,
                  },
                },
              ],
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
