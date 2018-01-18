<template lang="pug">
  nav.ComposeFooter.navbar.has-shadow.is-fixed-bottom.is-light(role='navigation', aria-label='main navigation', )
    .navbar-brand
      router-link.navbar-item(:to='{ name: "DashboardAdmin" }', )
        .logo
          | CMS
    .navbar-menu
      .navbar-start
      .navbar-end
        .navbar-item
          .control

</template>

<script>
export default {
  name: 'ComposeFooter',
}
</script>

<style lang="stylus">
// .ComposeFooter
</style>
