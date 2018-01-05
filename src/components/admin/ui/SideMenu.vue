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
                name: 'DashboardAdmin',
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
                name: 'AssetsList',
              },
            },
            {
              text: 'Collections',
              icon: 'list',
              link: {
                type: 'router',
                name: 'CollectionsList',
              },
            },
            {
              text: 'Forms',
              icon: 'wpforms',
              link: {
                type: 'router',
                name: 'FormsList',
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
                name: 'UsersList',
              },
            },
            {
              text: 'Settings',
              icon: 'cog',
              link: {
                type: 'router',
                name: 'SettingsList',
              },
              subitems: [
                {
                  text: 'Languages',
                  icon: 'language',
                  link: {
                    type: 'router',
                    name: 'LanguagesList',
                  },
                },
                {
                  text: 'Channels',
                  icon: 'bullseye',
                  link: {
                    type: 'router',
                    name: 'ChannelsList',
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
