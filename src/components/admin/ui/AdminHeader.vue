<template lang="pug">
  div.AdminHeader
    nav.HeaderMain.navbar.has-shadow(role='navigation', aria-label='main navigation', )
      .navbar-brand
        a.navbar-item(href='/', )
          .logo
            | Admin
      .navbar-menu
        .navbar-start
          router-link.navbar-item(to='/page-1') Home
          router-link.navbar-item(to='/page-2') Page 1
          router-link.navbar-item(to='/page-3') Page 2
          router-link.navbar-item(to='/page-4') Page 3
          router-link.navbar-item(to='/page-5') Page 4
          router-link.navbar-item(to='/admin') Admin

</template>

<script>

export default {
  name: 'AdminHeader',
}
</script>

<style lang="stylus">
// .AdminHeader
</style>
