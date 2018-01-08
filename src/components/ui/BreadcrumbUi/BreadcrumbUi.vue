<template lang="pug">
  nav.BreadcrumbUI.breadcrumb(:class='classes', aria-label='breadcrumbs', )
    ul()
      li()
        a(href="#", ) Bulma
      li()
        a(href="#", ) Documentation
      li()
        a(href="#", ) Components
      li.is-active()
        a(href="#", aria-current="page") Breadcrumb
</template>

<script>
export default {
  name: 'BreadcrumbUi',
  props: {
    align: {
      default: 'left',
      type: String,
      required: false,
      validator (align) {
        const alignments = [
          'centered',
          'left',
          'right,',
        ]
        return alignments.includes(align)
      },
    },

    separator: {
      default: 'default',
      type: String,
      required: false,
      validator (separator) {
        const separators = [
          'arrow',
          'default',
          'bullet ',
          'dot',
          'succeeds',
        ]
        return separators.includes(separator)
      },
    },

    size: {
      default: 'default',
      type: String,
      required: false,
      validator (size) {
        const sizes = [
          'default',
          'large',
          'medium',
          'small',
        ]
        return sizes.includes(size)
      },
    },
  },

  computed: {
    classes () {
      const classes = [`is-${this.size}`, `is-${this.align}`, `has-${this.separator}-separator`]
      return [...new Set(classes)]
    },
  },
}
</script>

<style lang="stylus">
// .BreadcrumbUI
</style>
