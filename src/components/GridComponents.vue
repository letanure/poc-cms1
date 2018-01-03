<template lang="pug">
  div.GridComponents
    template(v-for='(row, a) in componentsRows', )
      .columns()
        template(v-for='componentConfig in row',  )
          .column(:class='columnClasses(componentConfig.grid)', :key='componentConfig.key',)
            component(
              :is='componentConfig.type',
              v-bind='componentConfig.props',
              keep-alive,
            )

</template>

<script>
import { isEqual } from 'lodash'
import MessageUi from '@/components/ui/MessageUi'
import TabsUi from '@/components/ui/TabsUi'

export default {
  name: 'GridComponents',
  components: {
    MessageUi,
    TabsUi,
  },
  props: {
    componentsList: {
      default: () => [],
      type: Array,
      required: true,
      validator (list) {
        const defaultKeys = ['type', 'props', 'grid', 'key']
        const isValid = list.every((item) => {
          return isEqual(defaultKeys.sort(), Object.keys(item).sort())
        })
        return isValid
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
// .GridComponents
</style>
