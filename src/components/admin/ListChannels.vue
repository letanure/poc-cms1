<template lang="pug">
  .ListChannels

    .columns
      .column
        h1.title.
          Channels
        h2.subtitle.
          Channels description

    .columns
      .column
        .box
          table.table.is-striped.is-hoverable.is-fullwidth()
            thead
              tr
                th.
                  Channels Header 1
                th.
                  Channels Header 2
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
  name: 'ListChannels',
}
</script>

<style lang="stylus">
// .ListChannels
</style>
