<template lang="pug">
  .PagesAdmin

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
  name: 'PagesAdmin',
  data () {
    return {
      subtitle: 'Pages description',
      title: 'Pages',
    }
  },
}
</script>

<style lang="stylus">
// .PagesAdmin
</style>
