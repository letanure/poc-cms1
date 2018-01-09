<template lang="pug">
  form.FormUi
    h1 {{ title }}
    template(v-for='field in fields', )
      field-ui(:field='field', :controls='field.controls', :addons='field.addons', :grouped='field.grouped')
    .field.is-grouped
      template(v-for='action in actions', )
        button-ui(v-bind='action')
</template>

<script>
import FieldUi from '@/components/ui/form/FieldUi/FieldUi'
import ButtonUi from '@/components/ui/elements/ButtonUi/ButtonUi'

export default {
  name: 'FormUi',
  components: {
    FieldUi,
    ButtonUi,
  },
  props: {
    title: {
      default: null,
      type: String,
      required: false,
    },

    fields: {
      default: () => [],
      type: Array,
      required: true,
    },

    actions: {
      default: () => [],
      type: Array,
      required: true,
    },
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="stylus">
// .FormUi
</style>
