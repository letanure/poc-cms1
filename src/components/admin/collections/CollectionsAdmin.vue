<template lang="pug">
  .CollectionsAdmin

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
  name: 'CollectionsAdmin',
  data () {
    return {
      subtitle: 'Collections description',
      title: 'Collections',
    }
  },
}
</script>

<style lang="stylus">
// .CollectionsAdmin
</style>
