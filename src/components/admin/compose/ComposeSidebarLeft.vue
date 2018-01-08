<template lang="pug">
  nav.ComposeSidebarLeft
    .section.is-small
      menu-ui(:groups='menuGroups', @click='clickComponent')

</template>

<script>
import { mapGetters } from 'vuex'
import { MenuUi } from '@/components/ui'

export default {
  name: 'ComposeSidebarLeft',
  components: {
    MenuUi,
  },
  data () {
    return {
      menuGroups: [],
    }
  },
  computed: {
    ...mapGetters([
      'componentsList',
    ]),
  },

  beforeMount () {
    this.setMenuBlankComponents()
    this.setMenuFilledComponents()
  },

  methods: {
    clickComponent (item) {
      this.$store.dispatch('addComponent', item.value).then(() => {
        console.log('then addComponent')
      })
    },

    setMenuBlankComponents () {
      const menuGroup = {
        label: 'Blank Components',
        items: [],
      }
      Object
        .keys(this.componentsList)
        .filter((componentName) => this.componentsList[componentName].group === 'components')
        .forEach((componentKey) => {
          const component = this.componentsList[componentKey]
          const componentItem = {
            text: component.label,
            icon: component.icon,
            link: {
              type: 'button',
              name: ('PagesList' + component.icon),
            },
            value: component.name,
          }
          menuGroup.items.push(componentItem)
        })
      this.menuGroups.push(menuGroup)
    },

    setMenuFilledComponents () {
      const menuGroup = {
        label: 'Filled Components',
        items: [],
      }
      this.menuGroups.push(menuGroup)
    },
  },
}
</script>

<style lang="stylus">
.ComposeSidebarLeft
  background-color #373737
  height calc(100vh - 104px)
  overflow scroll

  .section.is-small
    padding 1.5rem

  .menu-list
    li
      a
        color #fff
        transition background .2s linear
        &:hover
          color #373737
</style>
