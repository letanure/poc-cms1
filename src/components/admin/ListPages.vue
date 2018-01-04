<template lang="pug">
  .ListPages

    .columns
      .column
        h1.title.
          Pages
        h2.subtitle.
          Pages description

    .columns
      .column
        .box
          template(v-if='pagesList')
            table.table.is-striped.is-hoverable.is-fullwidth()
              thead
                tr
                  th.
                    Name
                  th.
                    URL
                  th.
                    Actions
              tbody
                tr(v-for='page in pagesList', )
                  td.
                    {{ page.name }}
                  td.
                    {{ page.url }}
                  td
                    router-link.button.is-info.is-small.is-outlined(:to='{ name: "PagesEdit", params: { slug: page.slug }}', )
                      icon-ui(type='pencil')
                      span.
                        Edit
                    .button.is-danger.is-small.is-outlined(v-on:click='confirmRemove(page)',)
                      icon-ui(type='trash')
                      span.
                        Delete

          template(v-else)
            h5.title.is-4
              span.
                No Pages yet.
              router-link.button.is-info(:to='{ name: "PagesForm" }', ).
                Add your first page
</template>

<script>
import { mapGetters } from 'vuex'
import { IconUi } from '@/components/ui'

export default {
  name: 'ListPages',
  components: {
    IconUi,
  },
  computed: {
    ...mapGetters([
      'pagesList',
    ]),
  },
}
</script>

<style lang="stylus">
.ListPages
  .button
    margin-right 5px

    &:last-children
      margin-right 0
</style>
