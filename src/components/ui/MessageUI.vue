<template lang="pug">
.MessageUI.message(:class='classes', v-if='isVisible')

  .message-header(v-if='header || hasSlotHeader', )
    slot(name='header', v-if='hasSlotHeader', )
    p(v-if='header', )
      | {{ header }}

    button.delete(aria-label='delete', @click='close()', :class='sizeButton', v-if='hasClose', )

  .message-body(v-if='body || hasSlotBody', )
    slot(name='body', v-if='hasSlotBody', )
    p(v-if='body', )
      | {{ body }}
</div>
</article>
</template>

<script>

export default {
  name: 'MessageUI',
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

    hasClose: {
      default: true,
      type: Boolean,
      required: false,
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

    visible: {
      default: true,
      type: Boolean,
      required: false,
    },
  },

  data () {
    return {
      isVisible: this.visible,
    }
  },

  computed: {
    classes () {
      const classes = [`is-${this.color}`, `is-${this.size}`]
      return [...new Set(classes)]
    },

    hasSlotHeader () {
      return !!this.$slots['header']
    },

    hasSlotBody () {
      return !!this.$slots['body']
    },

    sizeButton () {
      return `is-${this.size}`
    },
  },

  watch: {
    visible () {
      this.isVisible = this.visible
    },
  },

  methods: {
    close () {
      this.isVisible = false
      this.$emit('close')
    },
  },
}
</script>

<style lang="stylus">
// .MessageUI
</style>
