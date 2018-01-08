<template lang="pug">
  nav.TabsUi.tabs(:class='classes', )
    ul()
      template(v-for='(item, index) in items')
        li(:class='{"is-active": (index === activeItem)}')
          a(@click='changeActiveTab(index)').
            {{ item.text }}
</template>

<script>
import { isEqual } from 'lodash'

export default {
  name: 'TabsUi',
  props: {
    active: {
      default: 0,
      type: Number,
      required: false,
    },

    align: {
      default: 'default',
      type: String,
      required: false,
      validator (align) {
        const alignments = [
          'centered',
          'default',
          'fullwidth',
          'right',
        ]
        return alignments.includes(align)
      },
    },

    appearance: {
      default: 'default',
      type: String,
      required: false,
      validator (value) {
        const options = [
          'default',
          'boxed',
          'toggle',
          'toggle-rounded',
        ]
        return options.includes(value)
      },
    },

    items: {
      default: () => [],
      type: Array,
      required: true,
      validator (value) {
        const defaultKeys = ['text']
        const isValid = value.every((item) => {
          return isEqual(defaultKeys.sort(), Object.keys(item).sort())
        })
        return isValid
      },
    },

    size: {
      default: 'default',
      type: String,
      required: false,
      validator (value) {
        const options = [
          'default',
          'large',
          'medium',
          'small',
        ]
        return options.includes(value)
      },
    },
  },

  data () {
    return {
      activeItem: this.active,
    }
  },

  computed: {
    classes () {
      let classAppendIfRounded = null
      if (this.appearance === 'toggle-rounded') {
        classAppendIfRounded = 'is-toggle'
      }
      const classes = [`is-${this.align}`, `is-${this.size}`, `is-${this.appearance}`, classAppendIfRounded]
      return [...new Set(classes)]
    },
  },

  watch: {
    active () {
      this.changeActiveTab(this.active)
    },

    activeItem () {
      this.$emit('changeTab', this.activeItem)
    },
  },

  methods: {
    changeActiveTab (index) {
      this.activeItem = index
    },
  },
}
</script>

<style lang="stylus">
// .TabsUi
</style>style>
