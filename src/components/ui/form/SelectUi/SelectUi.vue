<template lang="pug">
  .SelectUi.control
    .select(:class='classes')
      select(v-model="selected", v-on:input='updateValue($event.target.value)')
        template(v-for='option in options', )
          option(v-bind:value="option.value", )
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
        const defaultKeys = ['label', 'value']
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

    value: {
      default: null,
      type: [Boolean, Number, String],
      required: false,
    },
  },
  data () {
    return {
      selected: null,
    }
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
  mounted () {
    this.selected = this.value
  },
  methods: {
    updateValue (value) {
      if (typeof this.value === 'boolean') {
        value = (value === 'true' || value === true)
      }
      this.$emit('input', value)
    },
  },
}
</script>

<style lang="stylus">
// .SelectUi
</style>
