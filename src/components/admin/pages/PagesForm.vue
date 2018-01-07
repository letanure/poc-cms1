<template lang="pug">
  .PagesForm
    form.form-inline(v-on:submit.prevent='handleSubmit',)

      form-field(v-model.trim='page.name',
        type='text',
        label='Name',
        placeholder='Short descritive name',
        :validations='$v.page.name',
        )

      form-field(v-model.trim='page.url',
        type='text',
        label='URL',
        placeholder='ex.: /page/ OR /page/subpage',
        :validations='$v.page.url',
        )

      .field
        .control
          button.button.is-primary(type='submit').
            Save
</template>

<script>
import { validationMixin } from 'vuelidate'
import { minLength, required } from 'vuelidate/lib/validators'
import FormField from '@/components/ui/form/FormField'

export default {
  name: 'PagesForm',
  components: {
    FormField,
  },
  mixins: [validationMixin],
  props: {
    slug: {
      default: 0,
      type: [Number, String],
      required: false,
    },
  },
  data () {
    return {
      page: {
        name: '',
        url: 'teaaa',
      },
    }
  },
  validations: {
    page: {
      name: {
        required,
        minLength: minLength(2),
      },
      url: {
        required,
        minLength: minLength(2),
      },
    },
  },
  methods: {
    add () {},
    clean () {},
    handleSubmit () {
      const isValid = !this.$v.$invalid
      this.$v.$touch()
      if (isValid) {
        this.$store.dispatch('savePage', this.page).then(() => {
          this.$router.push({name: 'PagesList'})
        })
      }
    },
    update () {},
  },
}
</script>

<style lang="stylus">
// .PagesForm
</style>
