<template lang="pug">
  .FieldUi.field(:class='classes', )
    template(v-for='control in controls', )
      template(v-if='control.label')
        label.label
          | {{ control.label }}
      component(:is='defineComponent(control.type)', v-bind='control',)
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
    controls: {
      default: () => [],
      type: Array,
      required: true,
      validator (value) {
        const defaultKeys = ['type']
        const isValid = value.every((item) => {
          return isEqual(defaultKeys.sort(), Object.keys(item).sort())
        })
        return isValid
      },
    },

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
  },
}
</script>

<style lang="stylus">
// .FieldUi
</style>
