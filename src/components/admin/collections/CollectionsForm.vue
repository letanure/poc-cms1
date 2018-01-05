<template lang="pug">
  .CollectionsForm
    h1 CollectionsForm {{ slug }}
</template>

<script>

export default {
  name: 'CollectionsForm',
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
// .CollectionsForm
</style>
