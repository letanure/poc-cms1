<template lang="pug">
  .PagesForm
    h1 Form
</template>

<script>
import { validationMixin } from 'vuelidate'
import { minLength, required } from 'vuelidate/lib/validators'

export default {
  name: 'PagesForm',
  components: {
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
