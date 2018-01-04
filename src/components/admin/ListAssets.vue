<template lang="pug">
  .ListAssets

    .columns
      .column
        h1.title.
          Assets
        h2.subtitle.
          Assets description

    .columns
      .column
        .box
          template(v-if='assetsList')
            table.table.is-striped.is-hoverable.is-fullwidth()
              thead
                tr
                  th.
                    Name
                  th.
                    URL
                  th.
                    Actions
              tbody(is='transition-group', name='list')
                tr(v-for='(itemRow, key) in assetsList', :key='key')
                  td.
                    {{ itemRow.name }}
                  td.
                    {{ itemRow.type }}
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
                No Assets yet.
              router-link.button.is-info(:to='{ name: "PagesForm" }', ).
                Add your first Asset
</template>

<script>
import { mapGetters } from 'vuex'
import { IconUi } from '@/components/ui'

export default {
  name: 'ListAssets',
  components: {
    IconUi,
  },
  computed: {
    ...mapGetters([
      'assetsList',
    ]),
  },
  methods: {
    remove (key) {
      this.$store.dispatch('assetRemove', key)
    },
  },
}
</script>

<style lang="stylus">
// .ListAssets
.list-enter-active, .list-leave-active
  transition all .3s linear
.list-enter, .list-leave-to
  opacity 0
  transform translateX(50px)
</style>
