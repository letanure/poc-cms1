<template lang="pug">
  div.PageRender

    grid-components(:componentsList='componentsList', )

</template>

<script>
import { clone } from 'lodash'
import GridComponents from '@/components/GridComponents'

export default {
  name: 'PageRender',
  components: {
    GridComponents,
  },
  data () {
    return {
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
  methods: {
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
