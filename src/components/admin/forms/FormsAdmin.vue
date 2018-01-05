<template lang="pug">
  .FormsAdmin

    .columns
      .column
        h1.title.
          {{ title }}
        h2.subtitle.
          {{ subtitle }}

    .columns
      .column
        .box

          router-view
</template>

<script>

export default {
  name: 'FormsAdmin',
  data () {
    return {
      subtitle: 'Forms description',
      title: 'Forms',
    }
  },
}
</script>

<style lang="stylus">
// .FormsAdmin
</style>
