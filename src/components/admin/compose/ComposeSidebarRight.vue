<template lang="pug">
  nav.ComposeSidebarRight
    .section.is-small
      component-edit()
</template>

<script>
import { ComponentEdit } from '@/components/admin/compose/components'

export default {
  name: 'ComposeSidebarRight',
  components: {
    ComponentEdit,
  },
}
</script>

<style lang="stylus">
.ComposeSidebarRight
  background-color #373737
  height calc(100vh - 104px)
  overflow scroll

  .section.is-small
    padding 1.5rem
</style>
