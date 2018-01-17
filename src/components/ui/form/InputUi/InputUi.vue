<template lang="pug">
  .InputUi.control(:class='classesControl')
    input.input(
      :type='type',
      :placeholder='placeholder',
      :class='classes',
      :disabled='disabled',
      :readonly='readonly',
      v-bind:value='value',
      v-on:input='updateValue($event.target.value)'
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

    disabled: {
      default: false,
      type: Boolean,
      required: false,
    },

    layout: {
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

    placeholder: {
      default: null,
      type: String,
      required: false,
    },

    readonly: {
      default: false,
      type: Boolean,
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

    state: {
      default: 'default',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'default',
          'hovered',
          'focused',
          'loading',
        ]
        return options.includes(option)
      },
    },

    static: {
      default: false,
      type: Boolean,
      required: false,
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

    value: {
      default: null,
      type: String,
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
        `is-${this.layout}`,
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
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style lang="stylus">
// .InputUi
</style>
