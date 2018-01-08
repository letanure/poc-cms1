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
</style>
