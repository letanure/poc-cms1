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
          table.table.is-striped.is-hoverable.is-fullwidth()
            thead
              tr
                th.
                  Assets Header 1
                th.
                  Assets Header 2
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
  name: 'ListAssets',
}
</script>

<style lang="stylus">
// .ListAssets
</style>
