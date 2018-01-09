<template lang="pug">
  .TextareaUi.control
    textarea.textarea(
      :class='classes',
      :placeholder='placeholder',
      :rows='rows',
      :disabled='disabled',
      :readonly='readonly',
    )
</template>

<script>


export default {
  name: 'TextareaUi',
  props: {
    color: {
      default: 'default',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'default',
          'primary',
          'info',
          'success',
          'warning',
          'danger',
        ]
        return options.includes(option)
      },
    },

    placeholder: {
      default: null,
      type: String,
      required: false,
    },

    rows: {
      default: 4,
      type: Number,
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
          'small',
        ]
        return options.includes(option)
      },
    },

    disabled: {
      default: false,
      type: Boolean,
      required: false,
    },

    readonly: {
      default: false,
      type: Boolean,
      required: false,
    },

    state: {
      default: 'default',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'hovered',
          'focused',
          'loading',
        ]
        return options.includes(option)
      },
    },
  },
  computed: {
    classes () {
      const staticClass = this.static ? 'is-static' : ''
      const classes = [
        `is-${this.color}`,
        `is-${this.size}`,
        `is-${this.state}`,
      ]
      return [...new Set(classes)]
    },
  },
}
</script>

<style lang="stylus">
// .TextareaUi
</style>
