<template lang="pug">
  .ListLanguages

    .columns
      .column
        h1.title.
          Languages
        h2.subtitle.
          Languages description

    .columns
      .column
        .box
          table.table.is-striped.is-hoverable.is-fullwidth()
            thead
              tr
                th.
                  Languages Header 1
                th.
                  Languages Header 2
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
  name: 'ListLanguages',
}
</script>

<style lang="stylus">
// .ListLanguages
</style>
