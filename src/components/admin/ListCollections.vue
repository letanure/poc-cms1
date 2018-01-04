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
          table.table.is-striped.is-hoverable.is-fullwidth()
            thead
              tr
                th.
                  Collections Header 1
                th.
                  Collections Header 2
                th.
                  Actions
            tbody
              tr
                td.
                  content 1
                td.
                  content 2
                td
                  button.button.is-info.is-small.is-outlined()
                    span.
                      Edit
                  .button.is-danger.is-small.is-outlined()
                    span.
                      Delete
</template>

<script>

export default {
  name: 'ListCollections',
}
</script>

<style lang="stylus">
// .ListCollections
</style>
