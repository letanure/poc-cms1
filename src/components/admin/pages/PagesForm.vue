<template lang="pug">
  .PagesForm
    h1 PagesForm {{ slug }}
</template>

<script>

export default {
  name: 'PagesForm',
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
// .PagesForm
</style>
