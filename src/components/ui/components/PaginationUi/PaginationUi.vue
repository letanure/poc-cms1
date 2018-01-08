<template lang="pug">
  nav.PaginationUi.pagination(role='navigation', aria-label='pagination')
    a.pagination-previous(title='This is the first page', disabled='') Previous
    a.pagination-next Next page
    ul.pagination-list
      li
        a.pagination-link.is-current(aria-label='Page 1', aria-current='page') 1
      li
        a.pagination-link(aria-label='Goto page 2') 2
      li
        a.pagination-link(aria-label='Goto page 3') 3
</template>

<script>
export default {
  name: 'PaginationUi',
}
</script>

<style lang="stylus">
// .PaginationUi
</style>
