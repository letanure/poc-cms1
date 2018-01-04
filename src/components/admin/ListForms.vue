<template lang="pug">
  .ListForms

    .columns
      .column
        h1.title.
          Forms
        h2.subtitle.
          Forms description

    .columns
      .column
        .box
          table.table.is-striped.is-hoverable.is-fullwidth()
            thead
              tr
                th.
                  Forms Header 1
                th.
                  Forms Header 2
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
  name: 'ListForms',
}
</script>

<style lang="stylus">
// .ListForms
</style>
