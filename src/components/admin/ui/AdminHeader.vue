<template lang="pug">
  nav.AdminHeader.navbar.has-shadow(role='navigation', aria-label='main navigation', )
      .navbar-brand
        router-link.navbar-item(:to='{ name: "AdminDashboard" }', )
          .logo
            | CMS
      .navbar-menu
        .navbar-start
        .navbar-end
          .navbar-item
            .control
              template(v-if='isLoggedIn')
                button.button.is-danger.is-outlined.is-small(@click='signOut', )
                  span.
                    Logout
                  icon-ui(type='sign-out')

</template>

<script>
import { mapGetters } from 'vuex'
import { IconUi } from '@/components/ui'

export default {
  name: 'AdminHeader',
  components: {
    IconUi,
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
    ]),
  },
  methods: {
    signOut () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push({ name: 'signIn' })
      })
    },
  },
}
</script>

<style lang="stylus">
.AdminHeader
  .logo
    text-transform uppercase
    font-weight bold
    position relative
    padding-left 10px

    &:before
      content ''
      display inline-block
      background-color #0085AD
      width 5px
      height 20px
      border-radius 8px
      position absolute
      top 2px
      left 0px
</style>
