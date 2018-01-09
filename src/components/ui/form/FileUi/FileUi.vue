<template lang="pug">
  .FileUi.file(:class='classes', )
    label.file-label
      input.file-input(type='file', name='resume')
      span.file-cta
        span.file-icon
          i.fa.fa-upload
        span.file-label(v-if='label', )
          | {{ label }}
      span.file-name(v-if='fileName', )
          | {{ fileName }}
</template>

<script>
export default {
  name: 'FileUi',
  props: {
    align: {
      default: 'default',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'default',
          'right',
        ]
        return options.includes(option)
      },
    },

    color: {
      default: 'default',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'default',
          'white',
          'light',
          'dark',
          'black',
          'primary',
          'link',
          'info',
          'success',
          'warning',
          'danger',
        ]
        return options.includes(option)
      },
    },

    fileName: {
      default: null,
      type: String,
      required: false,
    },

    label: {
      default: null,
      type: String,
      required: true,
    },

    size: {
      default: 'default',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'default',
          'large',
          'medium',
          'small',
        ]
        return options.includes(option)
      },
    },

    style: {
      default: 'default',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'default',
          'fullwidth',
          'boxed',
        ]
        return options.includes(option)
      },
    },
  },
  computed: {
    classes () {
      const hasNameClass = this.fileName ? 'has-name' : ''

      const classes = [
        `is-${this.align}`,
        `is-${this.color}`,
        `is-${this.size}`,
        `is-${this.style}`,
        hasNameClass,
      ]
      return [...new Set(classes)]
    },
  },
}
</script>

<style lang="stylus">
// .FileUi
</style>
