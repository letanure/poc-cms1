<template lang="pug">
  .LanguagesForm
    h1 LanguagesForm {{ slug }}
</template>

<script>

export default {
  name: 'LanguagesForm',
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
// .LanguagesForm
</style>
