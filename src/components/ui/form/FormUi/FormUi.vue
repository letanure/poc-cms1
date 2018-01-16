<template lang="pug">
  form.FormUi(v-on:submit.prevent='submit',)

    title-ui(v-bind='header')

    template(v-for='(field, indexField) in fields', )
      field-ui(
        :addons='field.addons',
        :controls='field.controls',
        :field='field',
        :errors='errorsMap[indexField].controls',
        :grouped='field.grouped',
        v-on:input='updateValue($event)'
      )
    .field.is-grouped
      template(v-for='action in actions', )
        button-ui(v-bind='action')
</template>

<script>
import Vue from 'vue'
import { validationMixin } from 'vuelidate'
import * as vuelidateValidators from 'vuelidate/lib/validators'
import TitleUi from '@/components/ui/elements/TitleUi/TitleUi'
import FieldUi from '@/components/ui/form/FieldUi/FieldUi'
import ButtonUi from '@/components/ui/elements/ButtonUi/ButtonUi'

const errorMessages = {
  alpha: 'Please enter characters digits.',
  alphaNum: 'Please enter digits and characters digits.',
  and: 'and XX',
  between: 'Please enter a value between {min} and {max}.',
  email: 'Please enter a valid email address.',
  ipAddress: 'Please enter a valid IP address',
  macAddress: 'macAddress XX',
  maxLength: 'Please enter no more than {max} characters.',
  maxValue: 'Please enter a value less than or equal to {max}.',
  minLength: 'Please enter at least {min} characters.',
  minValue: 'Please enter a value greater than or equal to {min}.',
  numeric: 'Please enter a valid number.',
  or: 'or XX',
  required: 'This field is required.',
  requiredIf: 'requiredIf XX',
  requiredUnless: 'requiredUnless',
  sameAs: 'Please enter the same value again.', // ?
  url: 'Please enter a valid URL.',
  withParams: 'withParams XX',
}

export default {
  name: 'FormUi',
  components: {
    ButtonUi,
    FieldUi,
    TitleUi,
  },
  mixins: [validationMixin],
  props: {
    header: {
      default: () => {},
      type: Object,
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
      formModel: {
      },
      errorsMap: [],
      mapControlValidation: {},
    }
  },

  watch: {
    '$v.$invalid': {
      handler (val, oldVal) {
        if (this.$v.$dirty) {
          this.setErrors()
        }
      },
      deep: true,
    },
    '$v.$dirty': {
      handler (val, oldVal) {
        this.setErrors()
      },
      deep: true,
    },
  },

  beforeMount () {
    this.setFormModel()
  },

  validations () {
    let validationRules = {}
    this.fields.forEach((fields, indexField) => {
      fields.controls.forEach((control, indexControl) => {
        if (control.validations) {
          let validators = {}
          // yeah... I know [0]
          // @todo: refactor!
          Object.keys(control.validations).forEach((rule) => {
            let validationRuleValue = control.validations[rule]
            // sameAs, or, and, withParams ?

            if (['alpha', 'alphaNum', 'email', 'ipAddress', 'numeric', 'required', 'url'].includes(rule)) {
              validators[rule] = vuelidateValidators[rule]
            }

            if (['minLength', 'maxLength', 'minValue', 'maxValue', 'macAddress'].includes(rule)) {
              validators[rule] = vuelidateValidators[rule](validationRuleValue)
            }

            if (['requiredIf', 'requiredUnless'].includes(rule)) {
              const validatorFunction = () => {
                let result
                switch (validationRuleValue.operator) {
                  case '<=':
                    result = this.formModel[validationRuleValue.control] <= validationRuleValue.value
                    break
                  case '=':
                    result = this.formModel[validationRuleValue.control] === validationRuleValue.value
                    break
                  case '>=':
                    result = this.formModel[validationRuleValue.control] >= validationRuleValue.value
                    break
                }
                return result
              }
              validators.required = vuelidateValidators.requiredIf(validatorFunction)
            }

            if (rule === 'between') {
              validators[rule] = vuelidateValidators[rule](validationRuleValue.min, validationRuleValue.max)
            }
          })
          validationRules[control.name] = validators
        }
      })
    })
    return {
      formModel: validationRules,
    }
  },

  methods: {
    setFormModel () {
      let formModel = {}
      this.fields.forEach((fields, indexField) => {
        fields.controls.forEach((control, indexControl) => {
          formModel[control.name] = control.value
          this.setMapControlValidation(control.name, indexField, indexControl)
          this.setErrorMap(control.name, indexField, indexControl)
        })
      })
      Vue.set(this, 'formModel', formModel)
    },

    setMapControlValidation (nameModel, indexField, indexControl) {
      Vue.set(this.mapControlValidation, nameModel, {
        indexField: indexField,
        indexControl: indexControl,
      })
    },

    setErrorMap (nameModel, indexField, indexControl) {
      if (this.errorsMap[indexField] === undefined) {
        Vue.set(this.errorsMap, indexField, {
          controls: [],
        })
      }
      Vue.set(this.errorsMap[indexField].controls, indexControl, [])
    },

    setErrors () {
      Object.keys(this.$v.formModel.$params).forEach((controlName) => {
        const controlValidationRules = this.$v.formModel[controlName].$params
        const mapControl = this.mapControlValidation[controlName]

        Vue.set(this.errorsMap[mapControl.indexField].controls, mapControl.indexControl, [])

        // yeah... I know [1]
        // @todo: refactor!
        Object.keys(controlValidationRules).forEach((validationRule) => {
          let validatorResult = this.$v.formModel[controlName][validationRule]
          if (validatorResult === false) {
            const validatorRuleKey = Object
              .keys(this.$v.formModel[controlName].$params[validationRule])
              .filter(key => key !== 'type')[0]
            let errorMessage = errorMessages[validationRule]
            if (validatorRuleKey) {
              if (validationRule === 'between') {
                let patternMin = new RegExp(`{min}`, 'g')
                let patternMax = new RegExp(`{max}`, 'g')
                errorMessage = errorMessage
                  .replace(patternMin, this.$v.formModel[controlName].$params[validationRule].min)
                  .replace(patternMax, this.$v.formModel[controlName].$params[validationRule].max)
              } else {
                const validatorRuleValue = this.$v.formModel[controlName].$params[validationRule][validatorRuleKey]
                let pattern = new RegExp(`{${validatorRuleKey}}`, 'g')
                errorMessage = errorMessage.replace(pattern, validatorRuleValue)
              }
            }
            this.errorsMap[mapControl.indexField].controls[mapControl.indexControl].push(errorMessage)
          }
        })
      })
    },

    updateValue (inputData) {
      this.formModel[inputData.name] = inputData.value
    },

    submit () {
      const isValid = !this.$v.$invalid

      this.$v.$touch()

      if (isValid) {
        this.$emit('submit', this.formModel)
        console.log('is valid')
      } else {
        console.log('NOT valid')
      }
    },
  },
}
</script>

<style lang="stylus">
// .FormUi
</style>
