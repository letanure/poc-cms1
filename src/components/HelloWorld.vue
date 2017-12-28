<template lang="pug">
  div.hello
    h1.
      {{ msg }}

    h2.
      Counter Vuex
    div
      p
        | Counter:
        span.count__value {{ currentCount }}
      p
        button.count__action__increment(@click='increment') +
        button.count__action__decrement(@click='decrement') -
        button.count__action__add(@click='addToCounter(10)') +10
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Start App',
    }
  },
  computed: mapGetters([
    'currentCount',
    'evenOrOdd',
  ]),
  methods: {
    ...mapActions([
      'addToCounter',
      'decrement',
      'increment',
    ]),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color: #42b983;

</style>
