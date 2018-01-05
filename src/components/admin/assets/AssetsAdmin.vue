<template lang="pug">
  .AssetsAdmin

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
  name: 'AssetsAdmin',
  data () {
    return {
      subtitle: 'Assets description',
      title: 'Assets',
    }
  },
}
</script>

<style lang="stylus">
// .AssetsAdmin
</style>
