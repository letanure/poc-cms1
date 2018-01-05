<template lang="pug">
  .FormsForm
    h1 FormsForm {{ slug }}
</template>

<script>

export default {
  name: 'FormsForm',
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
// .FormsForm
</style>
