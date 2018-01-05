<template lang="pug">
  section.SignIn.section

    .columns
      .column
        h1.title.has-text-centered Sign-in

    .columns
      .column.is-4.is-offset-4
        .card()
          .card-header.is-centered
            h2.card-header-title.is-centered Sign in to Your Account
          .card-content
            form(@submit.prevent='handleSubmit()', )
              .field
                label.label Email
                .control
                  input.input(type='email', placeholder='user@email.com', v-model='email', )
              .field
                label.label Password
                .control
                  input.input(type='password', v-model='password', )
              button.button.is-primary(type='submit', ) Sign-in

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SignIn',
  data () {
    return {
      email: '',
      password: '',
    }
  },
  computed: mapGetters([
    'isLoggedIn',
  ]),
  methods: {
    ...mapActions([
      'login',
    ]),
    handleSubmit () {
      this.$store
        .dispatch('login')
        .then(() => {
          this.$router.replace({ name: 'AdminDashboard' })
        })
    },
  },
}
</script>

<style lang="stylus">
// .SignIn
</style>
