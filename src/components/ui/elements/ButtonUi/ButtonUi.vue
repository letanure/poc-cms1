<template lang="pug">
  .ButtonUI.button(
      :class='classes',
      @click='handleClick()'
      :disabled='disabled',
      :is="tag",
      :to="to",
      :type='type',
    )
      template(v-if='hasIcon && iconPosition ==="left" ')
        icon-ui(:type='iconType')
      span.
        {{ text }}
      slot
      template(v-if='hasIcon && iconPosition ==="right" ')
        icon-ui(:type='iconType')
</template>

<script>
import IconUi from '@/components/ui/elements/IconUi/IconUi'

export default {
  name: 'ButtonUI',
  components: {
    IconUi,
  },
  props: {
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
          'text',
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

    disabled: {
      default: false,
      type: Boolean,
      required: false,
    },

    href: {
      default: false,
      type: [Boolean, String],
      required: false,
    },

    iconPosition: {
      default: 'left',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'left',
          'right',
        ]
        return options.includes(option)
      },
    },

    iconType: {
      default: '',
      type: String,
      required: false,
    },

    inverted: {
      default: false,
      type: Boolean,
      required: false,
    },

    outlined: {
      default: false,
      type: Boolean,
      required: false,
    },

    rounded: {
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
          'active',
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

    tag: {
      default: 'a',
      type: String,
      required: false,
    },

    text: {
      default: '',
      type: String,
      required: false,
    },

    to: {
      default: () => {},
      type: Object,
      required: false,
    },

    type: {
      default: false,
      type: [Boolean, String],
      required: false,
      validator (option) {
        const options = [
          false,
          'button',
          'submit',
        ]
        return options.includes(option)
      },
    },

  },

  computed: {
    classes () {
      const invertedClass = this.inverted ? 'is-inverted' : ''
      const outlinedClass = this.outlined ? 'is-outlined' : ''
      const roundedClass = this.rounded ? 'is-rounded' : ''
      const staticClass = this.static ? 'is-static' : ''

      const classes = [
        `is-${this.color}`,
        invertedClass,
        outlinedClass,
        roundedClass,
        `is-${this.size}`,
        `is-${this.state}`,
        staticClass,
      ]
      return [...new Set(classes)]
    },

    hasIcon () {
      return this.iconType !== ''
    },
  },
  methods: {
    handleClick () {
      this.$emit('click')
    },
  },
}
</script>

<style lang="stylus">
// .ButtonUI
</style>
