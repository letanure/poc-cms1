<template lang="pug">
  nav.ComposeHeader.navbar.has-shadow.is-fixed-top.is-dark(role='navigation', aria-label='main navigation', )
    .navbar-brand
      router-link.navbar-item(:to='{ name: "DashboardAdmin" }', )
        .logo
          | COMPOSER
    .navbar-menu
      .navbar-start
      .navbar-end
        .navbar-item
          .control

</template>

<script>
export default {
  name: 'ComposeHeader',
}
</script>

<style lang="stylus">
// .ComposeHeader
</style>
