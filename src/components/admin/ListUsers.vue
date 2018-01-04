<template lang="pug">
  .ListUsers

    .columns
      .column
        h1.title.
          Users
        h2.subtitle.
          Users description

    .columns
      .column
        .box
          table.table.is-striped.is-hoverable.is-fullwidth()
            thead
              tr
                th.
                  Users Header 1
                th.
                  Users Header 2
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
  name: 'ListUsers',
}
</script>

<style lang="stylus">
// .ListUsers
</style>
