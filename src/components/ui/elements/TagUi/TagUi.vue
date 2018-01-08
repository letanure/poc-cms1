<template lang="pug">
  span.TagUi.tag(:class='classes', ).
    {{ text }}
</template>

<script>
export default {
  name: 'TagUi',
  props: {
    color: {
      default: 'default',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'black',
          'danger',
          'dark',
          'default',
          'info',
          'light',
          'link',
          'primary',
          'success',
          'warning',
          'white',
        ]
        return options.includes(option)
      },
    },

    text: {
      default: '',
      type: String,
      required: false,
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
        ]
        return options.includes(option)
      },
    },

    rounded: {
      default: false,
      type: Boolean,
      required: false,
    },

    delete: {
      default: false,
      type: Boolean,
      required: false,
    },
  },

  computed: {
    classes () {
      const roundedClass = this.rounded ? 'is-rounded' : ''
      const classes = [
        `is-${this.color}`,
        `is-${this.size}`,
        roundedClass,
      ]
      return [...new Set(classes)]
    },
  },
}
</script>

<style lang="stylus">
// .TagUi
</style>
