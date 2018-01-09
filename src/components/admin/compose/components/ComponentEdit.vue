<template lang="pug">
  nav.ComponentEdit
    h1 editingComponent
    pre {{editingComponentConfig}}

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ComponentEdit',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'editingComponentConfig',
    ]),
  },
  methods: {
  },
}
</script>

<style lang="stylus">
// .ComponentEdit
</style>
