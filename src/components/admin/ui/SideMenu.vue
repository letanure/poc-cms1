<template lang="pug">
  nav.SideMenu
    .menu.animated.slideInLeft

      p.menu-label.
        General
      ul.menu-list
        li
          router-link(:to='{ name: "AdminDashnoard"}', )
            span.icon.is-small
              i.fa.fa-tachometer
            |  Dashboard

      p.menu-label.
        Pages

      ul.menu-list
        li
          router-link(:to='{ name: "PagesList"}', )
            //- span.icon.is-small
              i.fa.fa-tachometer
            span.
              List Pages
        //- li
          router-link(:to='{ name: "PagesAdd"}', )
            //- span.icon.is-small
              i.fa.fa-tachometer
            span.
              Add Page

      //- p.menu-label.
        Categories
      //- ul.menu-list
        li
          a(href='{ name: "CategoriesList"}', )
            //- span.icon.is-small
              i.fa.fa-tachometer
            span.
              List Categories
        li
          a(href='{ name: "CategoriesForm"}', )
            //- span.icon.is-small
              i.fa.fa-tachometer
            span.
              Add Categorie

      //- p.menu-label.
        Users
      //- ul.menu-list
        li
          a(href='{ name: "UsersList"}', )
            //- span.icon.is-small
              i.fa.fa-tachometer
            span.
              List Users
        li
          a(href='{ name: "UsersAdd"}', )
            //- span.icon.is-small
              i.fa.fa-tachometer
            span.
              Add User
</template>

<script>
export default {
  name: 'SideMenu',
  data () {
    return {
    }
  },
  methods: {
  },
}
</script>

<style lang="stylus">
.SideMenu
  background-color #fff
</style>
