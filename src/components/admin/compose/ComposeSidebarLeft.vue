<template lang="pug">
  nav.ComposeSidebarLeft
    .section.is-small
      component-list-add()

</template>

<script>
import { ComponentListAdd } from '@/components/admin/compose/components'

export default {
  name: 'ComposeSidebarLeft',
  components: {
    ComponentListAdd,
  },
}
</script>

<style lang="stylus">
.ComposeSidebarLeft
  background-color #373737
  height calc(100vh - 104px)
  overflow scroll

  .section.is-small
    padding 1.5rem

  .menu-list
    li
      a
        color #fff
        transition background .2s linear
        &:hover
          color #373737
</style>
