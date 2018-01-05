<template lang="pug">
  .LanguagesAdmin

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
  name: 'LanguagesAdmin',
  data () {
    return {
      subtitle: 'Languages description',
      title: 'Languages',
    }
  },
}
</script>

<style lang="stylus">
// .LanguagesAdmin
</style>
