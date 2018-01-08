<template lang="pug">
.CollapseUi.message(:class='classes', )

  .message-header(v-if='header || hasSlotHeader', @click='toggleContent()')
    slot(name='header', v-if='hasSlotHeader', )
    p(v-if='header', )
      | {{ header }}

    icon-ui(type='angle-down', aria-label='close', :size='size', )

  .message-body()
    .message-body--content
      slot(name='body', v-if='hasSlotBody', )
      p(v-if='body', )
        | {{ body }}
</template>

<script>

import IconUi from '@/components/ui/elements/IconUi/IconUi'

export default {
  name: 'CollapseUi',
  components: {
    IconUi,
  },
  props: {
    color: {
      default: 'default',
      type: String,
      required: false,
      validator (color) {
        const colors = [
          'danger',
          'dark,',
          'default',
          'info',
          'link',
          'primary',
          'success',
          'warning',
        ]
        return colors.includes(color)
      },
    },

    body: {
      default: '',
      type: String,
      required: false,
    },

    header: {
      default: '',
      type: String,
      required: false,
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

    open: {
      default: true,
      type: Boolean,
      required: false,
    },
  },

  data () {
    return {
      isOpen: this.open,
    }
  },

  computed: {
    classes () {
      const openClass = this.isOpen ? 'is-open' : 'is-closed'
      const classes = [`is-${this.color}`, `is-${this.size}`, openClass]
      return [...new Set(classes)]
    },

    hasSlotHeader () {
      return !!this.$slots['header']
    },

    hasSlotBody () {
      return !!this.$slots['body']
    },
  },

  methods: {
    toggleContent () {
      this.isOpen = !this.isOpen
      this.$emit('toggle', this.isOpen)
    },
  },
}
</script>

<style lang="stylus">
.CollapseUi.message

  &.is-closed
    .message-header
      border-radius 3px
      .icon
        transform rotate(180deg)
    .message-body
      .message-body--content
        transition margin 3s linear
        margin-top -100%

  .message-header
    transition border .3s linear
    cursor pointer

    .icon
      transition all .3s linear

  .message-body
    position relative
    overflow hidden
    padding 0
    .message-body--content
      position relative
      outline 1px solid red
      transition margin 1s linear
      padding 1em 1.25em

  .collapse-active, .fade-leave-active
    transition opacity 5s linear
  .collapse, .fade-leave-to
    opacity 0
</style>
