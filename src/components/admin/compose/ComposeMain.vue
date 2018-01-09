<template lang="pug">
  nav.ComposeMain
    template(v-if='pageLoading')
      loading-ui()
    template(v-else)
      grid-components(:componentsList='pageContent', )

</template>

<script>
import { mapGetters } from 'vuex'
import { LoadingUi } from '@/components/ui'
import GridComponents from '@/components/GridComponents'

export default {
  name: 'ComposeMain',
  components: {
    GridComponents,
    LoadingUi,
  },
  props: {
    slug: {
      default: null,
      type: [String, Number],
      required: false,
    },
  },
  data () {
    return {
      pageLoading: true,
    }
  },
  computed: mapGetters([
    'pageContent',
  ]),
  beforeMount () {
    this.$store
      .dispatch('loadPageById', this.slug)
      .then(() => {
        this.pageLoading = false
      })
  },
}
</script>

<style lang="stylus">
.ComposeMain
  height calc(100vh - 104px)
  overflow scroll

  .GridComponents
    .columns
      transition box-shadow .3s linear
      transition-delay .1s
      box-shadow 0px 0px 0px 0 #fff, 0px 0px 0px 0 rgba(255, 0, 0, .6)
      position relative
      &:after
        background-color rgba(255, 0, 0, .6)
        color #fff
        content 'row'
        font-size 10px
        opacity 0
        padding 0 3px
        position absolute
        right -4px
        top -4px
        transition opacity .3s linear
        transition-delay .1s
      &:hover
        box-shadow 0px 0px 0px 4px #fff, 0px 0px 0px 5px rgba(255, 0, 0, .6)
        &:after
          opacity .8

    .column
      position relative
      transition box-shadow .3s linear
      transition-delay .1s
      box-shadow 0px 0px 0px 0 #fff, 0px 0px 0px 0 rgba(0, 0, 255, .6)
      &:after
        background-color rgba(0, 0, 255, .6)
        color #fff
        content 'column'
        font-size 10px
        opacity 0
        padding 0 3px
        position absolute
        right -2px
        top -2px
        transition opacity .3s linear
        transition-delay .1s
      &:hover
        box-shadow 0px 0px 0px 2px #fff, 0px 0px 0px 3px rgba(0, 0, 255, .6)
        &:after
          opacity .8
</style>
