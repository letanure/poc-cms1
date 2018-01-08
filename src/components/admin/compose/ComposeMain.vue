<template lang="pug">
  nav.ComposeMain
    grid-components(:componentsList='pageContent', )

</template>

<script>
import { mapGetters } from 'vuex'
import GridComponents from '@/components/GridComponents'

export default {
  name: 'ComposeMain',
  components: {
    GridComponents,
  },
  computed: mapGetters([
    'pageContent',
  ]),
}
</script>

<style lang="stylus">
.ComposeMain
  height calc(100vh - 104px)
  overflow scroll
</style>
