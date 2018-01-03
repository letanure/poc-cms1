<template lang="pug">
  div.PageRender

    nav.HeaderMain.navbar.has-shadow(role='navigation', aria-label='main navigation', )
      .navbar-brand
        a.navbar-item(href='/', )
          .logo
            | POC CMS
      .navbar-menu
        .navbar-start
          router-link.navbar-item(to='/page-1') Home
          router-link.navbar-item(to='/page-2') Page 1
          router-link.navbar-item(to='/page-3') Page 2
          router-link.navbar-item(to='/page-4') Page 3
          router-link.navbar-item(to='/page-5') Page 4

    grid-components(:componentsList='pageContent', )

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GridComponents from '@/components/GridComponents'

export default {
  name: 'PageRender',
  components: {
    GridComponents,
  },
  props: {
    url: {
      default: 'home',
      type: String,
      required: false,
    },
  },
  data () {
    return {
      currentUrl: '',
    }
  },
  computed: mapGetters([
    'pageUrl',
    'pageContent',
  ]),
  watch: {
    url () {
      this.currentUrl = this.url
    },

    currentUrl () {
      this.updateUrl(this.currentUrl)
    },
  },
  mounted () {
    this.currentUrl = this.url
  },
  methods: {
    ...mapActions([
      'updateUrl',
    ]),
  },
}
</script>

<style lang="stylus">
// .PageRender
</style>
