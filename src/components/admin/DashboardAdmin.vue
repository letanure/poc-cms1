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
        pre formData {{formData}}
        .box
          form-ui(
            :header='form.header',
            :fields='form.fields',
            :actions='form.actions',
            :value='formValues',
            xv-model="formData",
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
          title: 'Form 1',
        },
        fields: [
          // field one
          {
            addons: 'addons',
            controls: [
              {
                label: 'AA + BB',
                name: 'aa',
                type: 'text',
                validations: {
                  required: true,
                },
              },
              {
                // label: 'BB',
                name: 'bb',
                type: 'text',
                validations: {
                  required: true,
                  min: 3,
                },
              },
            ],
          },
          {
            addons: 'addons',
            repeat: {
              model: 'cc',
            },
            controls: [
              {
                label: 'c1 + c2',
                name: 'c1',
                type: 'text',
                validations: {
                  required: true,
                },
              },
              {
                // label: 'c2',
                name: 'c2',
                type: 'text',
                validations: {
                  required: true,
                },
              },
            ],
          },
          {
            addons: 'addons',
            controls: [
              {
                label: 'dd + ee',
                name: 'dd',
                type: 'text',
              },
              {
                // label: 'ee',
                name: 'ee',
                type: 'text',
                validations: {
                  required: true,
                },
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
        ],
      },

      formValues: {
        aa: 'a1',
        bb: 'b2',
        cc: [
          {
            c1: 'c3-1-1',
            // c2: 'c3-1-2',
          },
          {
            // c1: 'c3-2-1',
            c2: 'c3-2-2',
          },
          {
            c1: 'c3-3-1',
            c2: 'c3-3-2',
            c3: 'c3-3-3',
          },
        ],
        // dd: 'd4',
        ee: 'e5',
        ff: 'f6',
      },
    }
  },

  methods: {
    submit (data) {
      this.formData = data
    },
  },
}
</script>

<style lang="stylus">
// .DashboardAdmin
</style>
