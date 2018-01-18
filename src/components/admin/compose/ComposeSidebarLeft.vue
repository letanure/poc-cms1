<template lang="pug">
  nav.ComposeSidebarLeft.is-light
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
  height calc(100vh - 104px)
  overflow scroll
  box-shadow 2px 0px 3px rgba(10,10,10,.1)

  .section.is-small
    padding 1.5rem

  .menu-list
    li
      a
        transition background .2s linear
        &:hover
          color #373737
</style>
