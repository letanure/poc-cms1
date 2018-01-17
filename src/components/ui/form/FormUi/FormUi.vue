<template lang="pug">
  form.FormUi(v-on:submit.prevent='handleSubmit',)

    title-ui(v-bind='header')

    template(v-for='(field, indexField) in fields', )
      template(v-if='"repeat" in field', )
        template(v-for='indexControl in formModel[field.repeat.model].length')
          field-ui(
            :addons='field.addons',
            :controls='field.controls',
            :field='field',
            :values='fieldControlValues(field, indexControl)'
            :grouped='field.grouped',
            v-on:input='updateValue($event, indexControl)'
          )

      template(v-else, )
        field-ui(
          :addons='field.addons',
          :controls='field.controls',
          :field='field',
          :values='fieldControlValues(field)'
          :grouped='field.grouped',
          v-on:input='updateValue($event)'
        )
    .field.is-grouped
      template(v-for='action in actions', )
        button-ui(v-bind='action')
</template>

<script>
import { merge, pick } from 'lodash'
import Vue from 'vue'
import TitleUi from '@/components/ui/elements/TitleUi/TitleUi'
import FieldUi from '@/components/ui/form/FieldUi/FieldUi'
import ButtonUi from '@/components/ui/elements/ButtonUi/ButtonUi'

// const errorMessages = {
//   alpha: 'Please enter characters digits.',
//   alphaNum: 'Please enter digits and characters digits.',
//   and: 'and XX',
//   between: 'Please enter a value between {min} and {max}.',
//   email: 'Please enter a valid email address.',
//   ipAddress: 'Please enter a valid IP address',
//   macAddress: 'macAddress XX',
//   maxLength: 'Please enter no more than {max} characters.',
//   maxValue: 'Please enter a value less than or equal to {max}.',
//   minLength: 'Please enter at least {min} characters.',
//   minValue: 'Please enter a value greater than or equal to {min}.',
//   numeric: 'Please enter a valid number.',
//   or: 'or XX',
//   required: 'This field is required.',
//   requiredIf: 'requiredIf XX',
//   requiredUnless: 'requiredUnless',
//   sameAs: 'Please enter the same value again.', // ?
//   url: 'Please enter a valid URL.',
//   withParams: 'withParams XX',
// }

export default {
  name: 'FormUi',
  components: {
    ButtonUi,
    FieldUi,
    TitleUi,
  },
  props: {
    actions: {
      default: () => [],
      type: Array,
      required: true,
    },

    fields: {
      default: () => [],
      type: Array,
      required: true,
    },

    header: {
      default: () => {},
      type: Object,
      required: false,
    },

    value: {
      default: () => {},
      type: Object,
      required: false,
    },

  },

  data () {
    return {
      formModel: {},
      mapModelToControl: {},
    }
  },

  watch: {
    // '$v.$invalid': {
    //   handler (val, oldVal) {
    //     if (this.$v.$dirty) {
    //       this.setErrors()
    //     }
    //   },
    //   deep: true,
    // },
    // '$v.$dirty': {
    //   handler (val, oldVal) {
    //     this.setErrors()
    //   },
    //   deep: true,
    // },
  },

  beforeMount () {
    this.setFormModel()
  },

  methods: {

    fieldControlValues (field, indexControl = false) {
      let values = {}
      if ('repeat' in field) {
        field.controls.forEach((control, controlIndex) => {
          values[control.name] = this.formModel[field.repeat.model][indexControl - 1][control.name]
        })
      } else {
        field.controls.forEach((control) => {
          values[control.name] = this.formModel[control.name]
        })
      }
      return values
    },

    setFormModel () {
      let formModel = {}
      this.fields.forEach((field, indexField) => {
        const hasRepeat = 'repeat' in field
        const modelRepeat = {}
        field.controls.forEach((control, indexControl) => {
          if (hasRepeat) {
            modelRepeat[control.name] = control.value || null
            this.mapModelToControl[control.name] = {
              indexField: indexField,
              indexControl: indexControl,
            }
          } else {
            formModel[control.name] = control.value || null
            this.mapModelToControl[control.name] = {
              indexField: indexField,
              indexControl: indexControl,
            }
          }
        })
        if (hasRepeat) {
          const quantity = this.value[field.repeat.model].length
          formModel[field.repeat.model] = Array(quantity).fill(modelRepeat)
        }
      })
      if (this.value) {
        // Sanitize properties
        const valueSanitized = pick(this.value, Object.keys(formModel))
        Object.keys(valueSanitized).forEach((prop, propIndex) => {
          if (typeof valueSanitized[prop] === 'object') {
            valueSanitized[prop].forEach((subModel, indexSubModel) => {
              valueSanitized[prop][indexSubModel] = pick(subModel, Object.keys(formModel[prop][indexSubModel]))
            })
          }
        })
        formModel = merge({}, formModel, valueSanitized)
      }
      Vue.set(this, 'formModel', formModel)
    },

    updateValue (inputData, indexControl = false) {
      const mapModel = this.mapModelToControl[inputData.name]
      const field = this.fields[mapModel.indexField]
      if ('repeat' in field) {
        const model = field.repeat.model
        this.formModel[model][indexControl - 1][inputData.name] = inputData.value
      } else {
        this.formModel[inputData.name] = inputData.value
      }
    },

    handleSubmit () {
      this.submit()
    },

    submit () {
      this.$emit('submit', this.formModel)
    },
  },
}
</script>

<style lang="stylus">
.FormUi
  pre
    height 200px
    overflow scroll
</style>
