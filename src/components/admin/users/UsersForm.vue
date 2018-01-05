<template lang="pug">
  .UsersForm
    h1 UsersForm {{ slug }}
</template>

<script>

export default {
  name: 'UsersForm',
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
// .UsersForm
</style>
