<template lang="pug">
  div.PageRender

    nav.HeaderMain.navbar.has-shadow(role='navigation', aria-label='main navigation', )
      .navbar-brand
        a.navbar-item(href='/', )
          .logo
            | POC CMS
      .navbar-menu
        .navbar-start
          router-link.navbar-item(to='/') Home
          router-link.navbar-item(to='/page-1') Page 1
          router-link.navbar-item(to='/page-2') Page 2
          router-link.navbar-item(to='/page-3/subpage-3-1') Page 3
          router-link.navbar-item(to='/page-4/subpage-4-1/subpage-4-1-1') Page 3

    pre currentUrl: {{ currentUrl }}

    grid-components(:componentsList='componentsList', )

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { clone } from 'lodash'
import GridComponents from '@/components/GridComponents'

export default {
  name: 'PageRender',
  components: {
    GridComponents,
  },
  props: {
    pageUrl: {
      default: 'home',
      type: String,
      required: false,
    },
  },
  data () {
    return {
      currentUrl: '',
      componentsList: [
        {
          type: 'message-ui',
          key: '18',
          props: {
            header: 'Message 1 Header',
            body: 'Message 1 Body',
          },
          grid: {
            row: 1,
            columns: 8,
            offset: 0,
          },
        },
        {
          type: 'tabs-ui',
          key: '212',
          props: {
            active: 1,
            items: [
              { text: 'Pictures' },
              { text: 'Music' },
              { text: 'Videos' },
              { text: 'Documents' },
            ],
          },
          grid: {
            row: 2,
            columns: 6,
            offset: 0,
          },
        },
        {
          type: 'message-ui',
          key: '46',
          props: {
            header: 'Message 2 Header',
            body: 'Message 2 Body',
          },
          grid: {
            row: 4,
            columns: 6,
            offset: 6,
          },
        },
        {
          type: 'message-ui',
          key: '14',
          props: {
            header: 'Message 3 Header',
            body: 'Message 3 Body',
          },
          grid: {
            row: 1,
            columns: 4,
            offset: 0,
          },
        },
      ],
    }
  },
  computed: mapGetters([
    'url',
  ]),
  watch: {
    pageUrl () {
      this.currentUrl = this.pageUrl
    },

    currentUrl () {
      this.updateUrl(this.currentUrl)
    },
  },
  mounted () {
    this.currentUrl = this.pageUrl
  },
  methods: {
    ...mapActions([
      'updateUrl',
    ]),

    updateDynamicComponents () {
      const newComp = clone(this.componentsList[1])
      newComp.key = new Date().getMilliseconds()
      this.componentsList.push(newComp)
    },
  },
}
</script>

<style lang="stylus">
// .PageRender
</style>
