<template lang="pug">
  div.HelloWorld
    h1.title
      | {{ msg }}

    .columns
      .column
        h2.subtitle
          | Complex component TabsUi

    .columns
      .column
        tabs-ui(:items='tabItems', :active='activeTab' appearance='boxed', @changeTab='updateTab')
    .columns
      .column
        button.button(@click='changeTab') change to 3 tab

    .columns
      .column
        h2.subtitle
          | Simple component MessageUi

    .columns
      .column
        p Content with props
        message-ui(header='Header', body='Body', @close='showClosedText()')
        p.has-text-danger(v-if='closedText')
          | You closed the message
      .column
        p Content with props, only Body
        message-ui(body='Body only', )
      .column
        p Content with props, body and color
        message-ui(body='Body success', color='success', )
    .columns
      .column
        p Content with props, size small
        message-ui(header='Header without close', body='Body small', size='small', :hasClose='false', )
      .column
        p Message starts hidden
        message-ui(header='Header', body='Body danger', color='danger', :visible='messageIsVisible', @close='messageIsVisible = false')
        button.button(@click='showHiddenMessage()', v-if='!messageIsVisible') Show message hidden
      .column
        p Content with slots
        message-ui()
          template(slot='header')
            | Header
          template(slot='body')
            | Body with
            strong
              |  HTML
            |  inside

    .columns
      .column
        h2.subtitle
        | Counter Vuex
    .columns
      .column
          p
            | Counter:
            span.count__value {{ currentCount }}
          p
            button.button.count__action__increment(@click='increment') +
            button.button.count__action__decrement(@click='decrement') -
            button.button.count__action__add(@click='addToCounter(10)') +10
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MessageUi from '@/components/ui/MessageUi'
import TabsUi from '@/components/ui/TabsUi'

export default {
  name: 'HelloWorld',
  components: {
    MessageUi,
    TabsUi,
  },
  data () {
    return {
      msg: 'Start App',
      closedText: false,
      messageIsVisible: false,
      tabItems: [
        { text: 'Pictures' },
        { text: 'Music' },
        { text: 'Videos' },
        { text: 'Documents' },
      ],
      activeTab: 1,
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

    changeTab () {
      this.activeTab = 3
    },

    showClosedText () {
      this.closedText = true
    },

    showHiddenMessage () {
      this.messageIsVisible = true
    },

    updateTab (index) {
      this.activeTab = index
    },
  },
}
</script>

<style lang="stylus">
// .HelloWorld
</style>
