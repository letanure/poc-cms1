<template lang="pug">
  div.GridComponents
    template(v-for='(row, a) in componentsRows', )
      .columns()
        template(v-for='componentConfig in row',  )
          .column(:class='columnClasses(componentConfig.grid)', :key='componentConfig.key',)
            transition(name='fade', mode='out-in', appear)
              component(
                :is='componentConfig.type',
                v-bind='componentConfig.props',
                keep-alive,
              )

</template>

<script>
// import { isEqual } from 'lodash'
import * as components from '@/components/ui'

export default {
  name: 'GridComponents',
  components: components,
  props: {
    componentsList: {
      default: () => [],
      type: Array,
      required: true,
      validator (list) {
        // console.log('list', list);
        // const defaultKeys = ['type', 'props', 'grid', 'key']
        // const isValid = list.every((item) => {
        //   return isEqual(defaultKeys.sort(), Object.keys(item).sort())
        // })
        // return isValid
        return true
      },
    },
  },

  computed: {
    componentsRows () {
      return this.sortComponentsByRow()
    },
  },

  mounted () {
    this.$emit('mounted')
  },

  updated () {
    this.$emit('updated')
  },

  methods: {
    columnClasses (grid) {
      return [`is-${grid.columns}`, `is-offset-${grid.offset}`]
    },

    sortComponentsByRow () {
      let componentsOnGrid = []
      this.componentsList.forEach((comp, b) => {
        if (componentsOnGrid[comp.grid.row] === undefined) {
          componentsOnGrid[comp.grid.row] = []
        }
        componentsOnGrid[comp.grid.row].push(comp)
      })
      componentsOnGrid = componentsOnGrid.filter((row) => row)
      return componentsOnGrid
    },
  },
}
</script>

<style lang="stylus">
.GridComponents
  .fade-enter-active, .fade-leave-active
    transition opacity .1s linear
  .fade-enter, .fade-leave-to
    opacity 0
</style>
