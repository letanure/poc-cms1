<template lang="pug">
  .ChannelsForm
    h1 ChannelsForm {{ slug }}
</template>

<script>

export default {
  name: 'ChannelsForm',
  props: {
    slug: {
      default: 0,
      type: Number,
      required: false,
    },
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="stylus">
// .ChannelsForm
</style>
