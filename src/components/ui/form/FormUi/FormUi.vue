<template lang="pug">
  form.FormUi(v-on:submit.prevent='handleSubmit',)

    title-ui(v-bind='header')

    template(v-for='(field, indexField) in fields', )
      template(v-if='"repeat" in field', )
        template(v-for='indexControl in formModel[field.repeat.model].length')
          field-ui(
            :addons='field.addons',
            :controls='field.controls',
            :errors='errorNested(field.repeat.model, indexField, indexControl)',
            :field='field',
            :values='fieldControlValues(field, indexControl)'
            :grouped='field.grouped',
            v-on:input='updateValue($event, indexControl)'
          )

      template(v-else, )
        field-ui(
          :addons='field.addons',
          :controls='field.controls',
          :errors='formErrors',
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
import approve from 'approvejs'
import { merge, pick } from 'lodash'
import Vue from 'vue'
import TitleUi from '@/components/ui/elements/TitleUi/TitleUi'
import FieldUi from '@/components/ui/form/FieldUi/FieldUi'
import ButtonUi from '@/components/ui/elements/ButtonUi/ButtonUi'

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
      formErrors: {},
    }
  },

  beforeMount () {
    this.setFormModel()
  },

  methods: {

    errorNested (modelName, indexField, indexControl) {
      let errorObj = {}
      if (this.formErrors[modelName]) {
        errorObj = this.formErrors[modelName][indexField]
      }
      return errorObj
    },

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

    validate () {
      Object.keys(this.formModel).forEach((key, index) => {
        const value = this.formModel[key]
        let mapConfig = {}
        let field = {}
        let rules = {}
        if (!Array.isArray(value)) {
          mapConfig = this.mapModelToControl[key]
          field = this.fields[mapConfig.indexField]
          rules = field.controls[mapConfig.indexControl].validations
          Vue.set(this.formErrors, key, null)
          if (rules) {
            const result = approve.value(value, rules)
            Vue.set(this.formErrors, key, result.errors)
          }
        } else {
          Vue.set(this.formErrors, key, [])
          value.forEach((subModel, subModelIndex) => {
            Vue.set(this.formErrors[key], subModelIndex, {})
            Object.keys(subModel).forEach((keySubmodel, indexSubModel) => {
              mapConfig = this.mapModelToControl[keySubmodel]
              field = this.fields[mapConfig.indexField]
              rules = field.controls[mapConfig.indexControl].validations
              const valueSubmodel = this.formModel[key][subModelIndex][keySubmodel]
              console.log(key, subModelIndex, keySubmodel, valueSubmodel)
              Vue.set(this.formErrors[key][subModelIndex], keySubmodel, null)
              if (rules) {
                const result = approve.value(valueSubmodel, rules)
                Vue.set(this.formErrors[key][subModelIndex], keySubmodel, result.errors)
              }
            })
          })
        }
      })
      console.log(this.formErrors)
    },

    handleSubmit () {
      this.validate()
    },

    submit () {
      this.$emit('submit', this.formModel)
    },
  },
}
</script>

<style lang="stylus">
// .FormUi
</style>
