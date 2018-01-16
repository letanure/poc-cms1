<template lang="pug">
  .SectionHome

    .columns
      .column
        title-ui(v-bind='header')

    .columns
      .column
        .box
          transition(name='fade', mode='out-in', appear)
            router-view
</template>

<script>
import { TitleUi } from '@/components/ui'

export default {
  name: 'SectionHome',
  components: {
    TitleUi,
  },
  data () {
    return {
      header: {
        subtitle: 'Section description',
        title: 'Section',
      },
    }
  },
}
</script>

<style lang="stylus">
.SectionHome
  .fade-enter-active, .fade-leave-active
    transition opacity .1s linear
  .fade-enter, .fade-leave-to
    opacity 0
</style>
