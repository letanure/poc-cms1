<template lang="pug">
  section.SignUp.section
    h1.title.has-text-centered Sign-up
    .columns
      .column.is-one-third
        .card
          .card-header.is-centered
            h2.card-header-title.is-centered Create an Account
          .card-content
            form(@submit.prevent='signUp', )
              .field
                label.label Email
                .control
                  input.input(type='email', placeholder='joe@bloggs.com', v-model='email', )
              .field
                label.label Password
                .control
                  input.input(type='password', v-model='password', )
              button.button.is-primary(type='submit', ) Sign-up

</template>

<script>

export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    signUp () {
    },
  },
}
</script>

<style lang="stylus">
// .SignUp
</style>
