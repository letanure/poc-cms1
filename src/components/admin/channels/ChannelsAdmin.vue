<template lang="pug">
  .ChannelsAdmin

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
  name: 'ChannelsAdmin',
  data () {
    return {
      subtitle: 'Channels description',
      title: 'Channels',
    }
  },
}
</script>

<style lang="stylus">
// .ChannelsAdmin
</style>
