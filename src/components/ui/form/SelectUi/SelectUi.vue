<template lang="pug">
  .SelectUi.control
    .select(:class='classes')
      select
        template(v-for='option in options')
          option()
            | {{ option.label }}
</template>

<script>
import { isEqual } from 'lodash'

export default {
  name: 'SelectUi',
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

    options: {
      default: () => [],
      type: Array,
      required: true,
      validator (list) {
        const defaultKeys = ['label']
        const isValid = list.every((item) => {
          return isEqual(defaultKeys.sort(), Object.keys(item).sort())
        })
        return isValid
      },
    },

    multiple: {
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
  },
  computed: {
    classes () {
      const multipleClass = this.multiple ? 'is-multiple' : ''
      const classes = [
        `is-${this.color}`,
        `is-${this.layout}`,
        `is-${this.size}`,
        `is-${this.state}`,
        multipleClass,
      ]
      return [...new Set(classes)]
    },
  },
}
</script>

<style lang="stylus">
// .SelectUi
</style>
