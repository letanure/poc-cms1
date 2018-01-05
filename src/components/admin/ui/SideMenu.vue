<template lang="pug">
  nav.SideMenu
    menu-ui(:groups='menuGroups')

    //- .menu.animated.slideInLeft
</template>

<script>
import { MenuUi } from '@/components/ui'

export default {
  name: 'SideMenu',
  components: {
    MenuUi,
  },
  data () {
    return {
      menuGroups: [
        {
          label: 'General',
          items: [
            {
              text: 'Dashboard',
              icon: 'tachometer',
              link: {
                type: 'router',
                name: 'AdminDashboard',
              },
            },
            {
              text: 'Pages',
              icon: 'files-o',
              link: {
                type: 'router',
                name: 'PagesList',
              },
            },
            {
              text: 'Assets',
              icon: 'picture-o',
              link: {
                type: 'router',
                name: 'AdminAssets',
              },
            },
            {
              text: 'Collections',
              icon: 'list',
              link: {
                type: 'router',
                name: 'AdminCollections',
              },
            },
            {
              text: 'Forms',
              icon: 'wpforms',
              link: {
                type: 'router',
                name: 'AdminForms',
              },
            },
          ],
        },
        {
          label: 'Administration',
          items: [
            {
              text: 'Users',
              icon: 'users',
              link: {
                type: 'router',
                name: 'AdminUsers',
              },
            },
            {
              text: 'Settings',
              icon: 'cog',
              link: {
                type: 'router',
                name: 'AdminSettings',
              },
              subitems: [
                {
                  text: 'Languages',
                  icon: 'language',
                  link: {
                    type: 'router',
                    name: 'AdminLanguages',
                  },
                },
                {
                  text: 'Channels',
                  icon: 'bullseye',
                  link: {
                    type: 'router',
                    name: 'AdminChannels',
                  },
                },
              ],
            },
          ],
        },
      ],
    }
  },
  methods: {
  },
}
</script>

<style lang="stylus">
.SideMenu
  background-color #fff
</style>
