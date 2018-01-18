<template lang="pug">
  nav.ComponentEdit
    template(v-if='editingComponentConfig', )
      form-ui(
        :header='editingComponentConfig.form.header',
        :fields='editingComponentConfig.form.fields',
        :actions='editingComponentConfig.form.actions',
        :value='editingComponentMock',
        @submit='submit'
      )

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
    ]),
  },
  methods: {
    submit () {
      console.log('submit')
    },
  },
}
</script>

<style lang="stylus">
// .ComponentEdit
</style>
