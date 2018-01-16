<template lang="pug">
  .FieldUi.field(:class='classes', )
    template(v-for='(control, indexControl) in controls', )
      template(v-if='control.label')
        label.label
          | {{ control.label }}
      component(
        :is='defineComponent(control.type)',
        v-bind='control',
        v-bind:value='control.value',
        v-on:input='updateValue($event, control.name)'
      )

      template(v-if='errors[indexControl]')
        transition-group(name='slideUp', appear)
          template(v-for='(error, indexError) in errors[indexControl]',)
            p.control-error.help.is-danger(:key='indexError', )
              | {{ error }}

      template(v-if='control.help')
        p.help(:class='colorClass(control.color)')
          | {{ control.help }}
</template>

<script>
import ButtonUi from '@/components/ui/elements/ButtonUi/ButtonUi'
import CheckboxUi from '@/components/ui/form/CheckboxUi/CheckboxUi'
import FileUi from '@/components/ui/form/FileUi/FileUi'
import InputUi from '@/components/ui/form/InputUi/InputUi'
import RadioUi from '@/components/ui/form/RadioUi/RadioUi'
import SelectUi from '@/components/ui/form/SelectUi/SelectUi'
import TextareaUi from '@/components/ui/form/TextareaUi/TextareaUi'

export default {
  name: 'FieldUi',
  components: {
    CheckboxUi,
    ButtonUi,
    FileUi,
    InputUi,
    RadioUi,
    SelectUi,
    TextareaUi,
  },
  props: {
    addons: {
      default: 'default',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'default',
          'addons',
          'addons-centered',
          'addons-right',
        ]
        return options.includes(option)
      },
    },

    controls: {
      default: () => [],
      type: Array,
      required: true,
    },

    errors: {
      default: () => [],
      type: Array,
      required: false,
    },

    grouped: {
      default: 'default',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'default',
          'grouped',
          'grouped-centered',
          'grouped-right',
          'grouped-multiline',
        ]
        return options.includes(option)
      },
    },
  },

  computed: {
    classes () {
      let classes = []
      if (this.addons !== 'default') {
        classes.push(`has-addons`)
        classes.push(`has-${this.addons}`)
      }
      if (this.grouped !== 'default') {
        classes.push(`is-grouped`)
        classes.push(`is-${this.grouped}`)
      }
      return [...new Set(classes)]
    },

    hasAddon () {
      return this.addons !== 'default'
    },
  },

  methods: {
    colorClass (color) {
      const classes = [
        `is-${color}`,
      ]
      return [...new Set(classes)]
    },

    defineComponent (type) {
      const componentsRelations = {
        'button': 'button-ui',
        'text': 'input-ui',
        'password': 'input-ui',
        'email': 'input-ui',
        'tel': 'input-ui',
        'textarea': 'textarea-ui',
        'select': 'select-ui',
        'radio': 'radio-ui',
        'checkbox': 'checkbox-ui',
        'file': 'file.ui',
      }
      return componentsRelations[type]
    },

    updateValue (value, name) {
      this.$emit('input', {name: name, value: value})
    },
  },
}
</script>

<style lang="stylus">
.FieldUi
  &.has-addons
    flex-wrap wrap
    .label
      width 100%
      order 0
    .control
      order 1
      & + span
        order 2
        width 100%
  .control-error, .in-out
    height 20px
    transition height .2s linear
  .slideUp-enter-active, .slideUp-leave-active
    transition transform .2s linear
    opacity 1
  .slideUp-enter, .slideUp-leave-to
    transform translate(0, -10px)
    opacity 0
    height 0px
</style>
