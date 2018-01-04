<template lang="pug">
  .ListCollections

    .columns
      .column
        h1.title.
          Collections
        h2.subtitle.
          Collections description

    .columns
      .column
        .box
          template(v-if='collectionsList')
            table.table.is-striped.is-hoverable.is-fullwidth()
              thead
                tr
                  th.
                    Name
                  th.
                    Actions
              tbody(is='transition-group', name='list')
                tr(v-for='(itemRow, key) in collectionsList', :key='key')
                  td.
                    {{ itemRow.name }}
                  td
                    router-link.button.is-info.is-small.is-outlined(:to='{ name: "PagesEdit", params: { slug: itemRow.slug }}', )
                      icon-ui(type='pencil')
                      span.
                        Edit
                    .button.is-danger.is-small.is-outlined(v-on:click='remove(key)',)
                      icon-ui(type='trash')
                      span.
                        Delete

          template(v-else)
            h5.title.is-4
              span.
                No CollectionsList yet.
              router-link.button.is-info(:to='{ name: "PagesForm" }', ).
                Add your first collection
</template>

<script>
import { mapGetters } from 'vuex'
import { IconUi } from '@/components/ui'

export default {
  name: 'ListCollections',
  components: {
    IconUi,
  },
  computed: {
    ...mapGetters([
      'collectionsList',
    ]),
  },
  methods: {
    remove (key) {
      this.$store.dispatch('collectiontRemove', key)
    },
  },
}
</script>

<style lang="stylus">
// .ListCollections
.list-enter-active, .list-leave-active
  transition all .3s linear
.list-enter, .list-leave-to
  opacity 0
  transform translateX(50px)
</style>
