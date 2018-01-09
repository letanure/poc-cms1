<template lang="pug">
  .SectionHome

    .columns
      .column
        h1.title.
          {{ title }}
        h2.subtitle.
          {{ subtitle }}

    .columns
      .column
        .box
          transition(name='fade', mode='out-in', appear)
            router-view
</template>

<script>

export default {
  name: 'SectionHome',
  data () {
    return {
      subtitle: 'Section description',
      title: 'Section',
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
