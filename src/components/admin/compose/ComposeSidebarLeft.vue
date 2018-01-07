<template lang="pug">
  nav.ComposeSidebarLeft
    .section
      menu-ui(:groups='menuGroups')

    //- .menu.animated.slideInLeft
</template>

<script>
import { MenuUi } from '@/components/ui'

export default {
  name: 'ComposeSidebarLeft',
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
.ComposeSidebarLeft
  background-color #373737
  .menu-list
    li
      a
        transition background .2s linear
</style>
