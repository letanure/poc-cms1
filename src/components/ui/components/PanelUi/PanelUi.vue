<template lang="pug">
  .PanelUi.panel
    p.panel-heading
      | repositories
    .panel-block
      p.control.has-icons-left
        input.input.is-small(type='text', placeholder='search')
        span.icon.is-small.is-left
          i.fa.fa-search
    p.panel-tabs
      a.is-active all
      a public
      a private
      a sources
      a forks
    a.panel-block.is-active
      span.panel-icon
        i.fa.fa-book
      |     bulma
    a.panel-block
      span.panel-icon
        i.fa.fa-book
      |     marksheet
    a.panel-block
      span.panel-icon
        i.fa.fa-book
      |     minireset.css
    a.panel-block
      span.panel-icon
        i.fa.fa-book
      |     jgthms.github.io
    a.panel-block
      span.panel-icon
        i.fa.fa-code-fork
      |     daniellowtw/infboard
    a.panel-block
      span.panel-icon
        i.fa.fa-code-fork
      |     mojs
    label.panel-block
      input(type='checkbox')
      |     remember me
    .panel-block
      button.button.is-link.is-outlined.is-fullwidth
        | reset all filters
</template>

<script>
export default {
  name: 'PanelUi',
}
</script>

<style lang="stylus">
// .PanelUi
</style>
