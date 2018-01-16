<template lang="pug">
  div.DashboardAdmin
    .columns
      .column
        h1.title.
          Dashboard
        h2.subtitle.
          Dashboard description

    .columns.is-multiline
      .column
        .box.notification.is-primary
          .heading Top Seller Total
          .title 56,950
          .level
            .level-item
              div
                .heading Sales $
                .title.is-5 250K
            .level-item
              div
                .heading Overall $
                .title.is-5 750K
            .level-item
              div
                .heading Sales %
                .title.is-5 25%
      .column
        .box.notification.is-warning
          .heading Revenue / Expenses
          .title 55% / 45%
          .level
            .level-item
              div
                .heading Rev Prod $
                .title.is-5 30%
            .level-item
              div
                .heading Rev Serv $
                .title.is-5 25%
            .level-item
              div
                .heading Exp %
                .title.is-5 45%
      .column
        .box.notification.is-info
          .heading Feedback Activity
          .title 78% ↑
          .level
            .level-item
              div
                .heading Pos
                .title.is-5 1560
            .level-item
              div
                .heading Neg
                .title.is-5 368
            .level-item
              div
                .heading Pos/Neg %
                .title.is-5 77% / 23%
      .column
        .box.notification.is-danger
          .heading Orders / Returns
          .title 75% / 25%
          .level
            .level-item
              div
                .heading Orders $
                .title.is-5 425K
            .level-item
              div
                .heading Returns $
                .title.is-5 106K
            .level-item
              div
                .heading Success %
                .title.is-5 + 28,5%

    .columns
      .column
        h1 {{formData}}
        form-ui(
          :header='form.header',
          :fields='form.fields',
          :actions='form.actions',
          v-model="formData",
          @submit='submit'
          )
</template>

<script>
import FormUi from '@/components/ui/form/FormUi/FormUi'

export default {
  name: 'DashboardAdmin',
  components: {
    FormUi,
  },
  data () {
    return {
      formData: {},
      form: {
        header: {
          title: 'title 1',
          subtitle: 'subtitle 1',
        },
        fields: [
          // field one
          {
            // addons: 'addons',
            controls: [
              {
                label: 'Name2',
                name: 'Name2',
                placeholder: 'Placeholder',
                type: 'text',
                value: '',
                validations: {
                  required: true,
                },
              },
              {
                label: 'Name3',
                name: 'Name3',
                placeholder: 'Placeholder',
                type: 'text',
                value: 'olá2',
                validations: {
                  required: true,
                  minLength: 8,
                },
              },
            ],
          },
          {
            controls: [
              {
                label: 'Name4',
                name: 'Name4',
                placeholder: 'Placeholder',
                type: 'text',
                value: 'ol',
                help: 'bla',
                color: 'info',
              },
              {
                label: 'Name5',
                name: 'Name5',
                placeholder: 'Placeholder',
                type: 'text',
                value: 'olá2',
              },
            ],
          },
        ],
        actions: [
          {
            color: 'link',
            text: 'Submit',
            tag: 'button',
            type: 'submit',
          },
          {
            color: 'text',
            text: 'Cancel',
          },
        ],
      },
    }
  },
  methods: {
    submit (data) {
      console.log('DashboardAdmin.vue', data)
      this.formData = data
    },
  },
}
</script>

<style lang="stylus">
// .DashboardAdmin
</style>
