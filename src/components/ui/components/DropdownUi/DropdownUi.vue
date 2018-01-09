<template lang="pug">
  .DropdownUi.dropdown.is-active
    .dropdown-trigger
      button.button(aria-haspopup='true', aria-controls='dropdown-menu')
        span Dropdown button
        span.icon.is-small
          i.fa.fa-angle-down(aria-hidden='true')
    #dropdown-menu.dropdown-menu(role='menu')
      .dropdown-content
        a.dropdown-item(href='#')
          | Dropdown item
        a.dropdown-item
          | Other dropdown item
        a.dropdown-item.is-active(href='#')
          | Active dropdown item
        a.dropdown-item(href='#')
          | Other dropdown item
        hr.dropdown-divider
        a.dropdown-item(href='#')
          | With a divider
</template>

<script>
export default {
  name: 'DropdownUi',
}
</script>

<style lang="stylus">
// .DropdownUi
</style>
