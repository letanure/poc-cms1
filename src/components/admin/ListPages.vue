<template lang="pug">
  .ListPages

    //- .columns
      .column
        router-link.button.is-info.is-outlined(:to='{ name: "InfluencersForm"}', )
          icon-ui(type='plus')
          span.
            Add Influencer

    //- router-view

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
                router-link.button.is-info.is-small.is-outlined(:to='{ name: "PagesEdit", params: { slug: page.url }}', )
                  //- icon-ui(type='pencil')
                  span.
                    Edit
                .button.is-danger.is-small.is-outlined(v-on:click='confirmRemove(page)',)
                  //- icon-ui(type='trash')
                  span.
                    Remove

      template(v-else)

        h5.title.is-4
          span.
            No Pages yet.
        router-link.button.is-info(:to='{ name: "PagesForm" }', ).
          Add your first page

    //- confirm-modal(@close='checkAnswer($event)',
      :active='activeModal',
      answer-no='No, keep the influencer',
      answer-yes='Yes, delete influencer',
      message='Deleting a influencer will remove it from your list.',
      title='Delete Influencer?', )
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ListPages',
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
