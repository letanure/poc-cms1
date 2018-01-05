<template lang="pug">
  .UsersAdmin

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
  name: 'UsersAdmin',
  data () {
    return {
      subtitle: 'Users description',
      title: 'Users',
    }
  },
}
</script>

<style lang="stylus">
// .UsersAdmin
</style>
