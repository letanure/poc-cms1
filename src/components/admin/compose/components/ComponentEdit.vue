<template lang="pug">
  nav.ComponentEdit
    template(v-if='editingComponentConfig !== undefined', )
      form-ui(
        :header='editingComponentConfig.form.header',
        :fields='editingComponentConfig.form.fields',
        :actions='editingComponentConfig.form.actions',
        :value='editingComponentMock',
        @editing='changed($event)',
        @submited='submit',)

</template>

<script>
import { mapGetters } from 'vuex'
import FormUi from '@/components/ui/form/FormUi/FormUi'

export default {
  name: 'ComponentEdit',
  components: {
    FormUi,
  },
  data () {
    return {
      formData: {},
      formValues: {},
    }
  },
  computed: {
    ...mapGetters([
      'editingComponentConfig',
      'editingComponentMock',
      'getEditingKey',
    ]),
  },
  methods: {
    changed (formdata) {
      this.$store.dispatch('editComponentPage', formdata)
    },

    submit () {
      console.log('submited comp edit')
    },
  },
}
</script>

<style lang="stylus">
// .ComponentEdit
</style>
