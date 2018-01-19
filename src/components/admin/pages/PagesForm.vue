<template lang="pug">
  .PagesForm
    .columns
      .column
        form-ui(
          :header='form.header',
          :fields='form.fields',
          :actions='form.actions',
          v-model="formData",
          @submited='submit'
          )
</template>

<script>
import { FormUi } from '@/components/ui/form'

export default {
  name: 'PagesForm',
  components: {
    FormUi,
  },
  props: {
    slug: {
      default: 0,
      type: [Number, String],
      required: false,
    },
  },
  data () {
    return {
      formData: {},
      form: {
        header: {
          title: 'Add Page',
          titleSize: 4,
        },
        fields: [
          {
            controls: [
              {
                label: 'Name',
                name: 'name',
                placeholder: 'Short descritive name',
                type: 'text',
                value: '',
                validations: {
                  required: true,
                  min: 5,
                },
              },
            ],
          },
          {
            controls: [
              {
                label: 'URL',
                name: 'url',
                placeholder: 'URL starting with /',
                type: 'text',
                value: '',
                validations: {
                  required: true,
                },
              },
            ],
          },
        ],
        actions: [
          {
            color: 'primary',
            text: 'Save',
            tag: 'button',
            type: 'submit',
          },
        ],
      },
    }
  },
  methods: {
    submit (data) {
      this.$store.dispatch('savePage', data).then(() => {
        this.$router.push({name: 'PagesList'})
      })
    },
  },
}
</script>

<style lang="stylus">
// .PagesForm
</style>
