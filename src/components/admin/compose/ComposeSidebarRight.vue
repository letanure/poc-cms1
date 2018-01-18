<template lang="pug">
  nav.ComposeSidebarRight
    .section.is-small
      transition(name='fade', mode='out-in', appear)
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
  height calc(100vh - 104px)
  overflow scroll
  box-shadow -2px 0px 3px rgba(10,10,10,.1)

  .section.is-small
    padding 1.5rem

  .fade-enter-active, .fade-leave-active
    transition opacity .1s linear
  .fade-enter, .fade-leave-to
    opacity 0
</style>
