<template lang="pug">
  .InputUi.control(:class='classesControl')
    input.input(
      :type='type',
      :placeholder='placeholder',
      :class='classes',
      :disabled='disabled',
      :readonly='readonly',
      )
</template>

<script>


export default {
  name: 'InputUi',
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
      required: true,
    },

    type: {
      default: 'text',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'text',
          'password',
          'email',
          'tel',
        ]
        return options.includes(option)
      },
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

    style: {
      default: 'default',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'default',
          'rounded',
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

    static: {
      default: false,
      type: Boolean,
      required: false,
    },
  },
  computed: {
    classes () {
      const staticClass = this.static ? 'is-static' : ''
      const classes = [
        `is-${this.color}`,
        `is-${this.size}`,
        `is-${this.state}`,
        `is-${this.style}`,
        staticClass,
      ]
      return [...new Set(classes)]
    },
    classesControl () {
      let classes = []
      if (this.state === 'loading') {
        classes.push(`is-${this.state}`)
      }
      return [...new Set(classes)]
    },
  },
}
</script>

<style lang="stylus">
// .InputUi
</style>
