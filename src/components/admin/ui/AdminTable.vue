<template lang="pug">
  .AdminTable

    .columns
      .column
        h1.title.
          {{ title }}
        h2.subtitle.
          {{ subtitle }}

    .columns
      .column
        .box
          template(v-if='hasList')
            table.table.is-striped.is-hoverable.is-fullwidth()
              thead
                tr
                  template(v-for='(col, index) in tableCols')
                    th.
                      {{ col.label }}
                  th.
                    Actions
              tbody(is='transition-group', name='tableRowSlide')
                tr(v-for='(itemRow, key) in storeList', :key='key')
                  template(v-for='(col, index) in tableCols')
                    td.
                      {{ itemRow[col.prop] }}
                  td
                    router-link.button.is-info.is-small.is-outlined(:to='{ name: routeEditName, params: { slug: itemRow.slug }}', )
                      icon-ui(type='pencil')
                      span.
                        Edit
                    .button.is-danger.is-small.is-outlined(@click='confirmRemove(key)',)
                      icon-ui(type='trash')
                      span.
                        Delete

          template(v-else)
            h5.title.is-5
              span.
                No {{ itemPlural }} yet.
            router-link.button.is-info(:to='{ name: routeAddName }', ).
              Add your first {{ itemSingular }}

    transition(name='fade', appear)
      confirm-ui(v-show='activeModal'
        @close='checkAnswer($event)',
        :active='activeModal',
        :answer-no='confirmAnswerNo',
        :answer-yes='confirmAnswerYes',
        :message='confirmMessage',
        :title='confirmTitle',
      )
</template>

<script>
import { ConfirmUi, IconUi } from '@/components/ui'

export default {
  name: 'AdminTable',
  components: {
    ConfirmUi,
    IconUi,
  },
  props: {
    itemPlural: {
      default: 'Items',
      type: String,
      required: false,
    },
    itemSingular: {
      default: 'Item',
      type: String,
      required: false,
    },
    routeAddName: {
      default: '',
      type: String,
      required: true,
    },
    routeEditName: {
      default: '',
      type: String,
      required: true,
    },
    storeGetter: {
      default: '',
      type: String,
      required: true,
    },
    storeRemove: {
      default: '',
      type: String,
      required: true,
    },
    subtitle: {
      default: '',
      type: String,
      required: false,
    },
    tableCols: {
      default: () => [],
      type: Array,
      required: true,
    },
    title: {
      default: '',
      type: String,
      required: false,
    },
  },
  data () {
    return {
      activeModal: false,
      collection: [],
      collectionRef: null,
      collectionTableItem: [],
      deletingItemKey: null,
      labelPlural: 'Collections',
      labelSingular: 'Item',
      routeNameAdd: 'home',
    }
  },
  computed: {
    confirmAnswerNo () {
      return `No, keep the ${this.labelSingular}`
    },

    confirmAnswerYes () {
      return `Yes, delete ${this.labelSingular}`
    },

    confirmMessage () {
      return `Deleting a ${this.labelSingular} will remove it from your list.`
    },

    confirmTitle () {
      return `Delete ${this.labelSingular}?`
    },

    hasList () {
      return Object.keys(this.storeList).length > 0
    },

    storeList () {
      return this.$store.getters[this.storeGetter]
    },
  },
  mounted () {
    this.labelSingular = this.itemSingular
    this.labelPlural = this.itemPlural
  },
  methods: {
    checkAnswer (answer) {
      this.activeModal = false
      if (answer) {
        this.remove(this.deletingItemKey)
      }
      this.deletingItemKey = null
    },

    confirmRemove (key) {
      this.deletingItemKey = key
      this.activeModal = true
    },

    remove (key) {
      this.$store.dispatch(this.storeRemove, key)
    },
  },
}
</script>

<style lang="stylus">
.AdminTable
  .button
    margin-right 5px

    &:last-children
      margin-right 0

  .tableRowSlide-enter-active, .tableRowSlide-leave-active
    transition all .3s linear
  .tableRowSlide-enter, .tableRowSlide-leave-to
    opacity 0
    transform translateX(50px)

  .fade-enter-active, .fade-leave-active
    transition opacity .3s linear
  .fade-enter, .fade-leave-to
    opacity 0
</style>
