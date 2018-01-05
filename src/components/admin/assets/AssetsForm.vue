<template lang="pug">
  .AssetsForm
    h1 AssetsForm {{ slug }}
</template>

<script>

export default {
  name: 'AssetsForm',
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
// .AssetsForm
</style>
