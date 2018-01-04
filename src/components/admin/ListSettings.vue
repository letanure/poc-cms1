<template lang="pug">
  .ListSettings

    .columns
      .column
        h1.title.
          Settings
        h2.subtitle.
          Settings description

    .columns
      .column
        .box
          table.table.is-striped.is-hoverable.is-fullwidth()
            thead
              tr
                th.
                  Settings Header 1
                th.
                  Settings Header 2
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
  name: 'ListSettings',
}
</script>

<style lang="stylus">
// .ListSettings
</style>
