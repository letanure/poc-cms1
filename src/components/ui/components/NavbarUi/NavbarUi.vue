<template lang="pug">
  nav.NavbarUi.navbar(role='navigation', aria-label='main navigation')
    .navbar-brand
      a.navbar-item(href='https://bulma.io')
        img(src='https://bulma.io/images/bulma-logo.png', alt='Bulma: a modern CSS framework based on Flexbox', width='112', height='28')
      button.button.navbar-burger
        span
        span
        span

</template>

<script>
export default {
  name: 'NavbarUi',
}
</script>

<style lang="stylus">
// .NavbarUi
</style>
