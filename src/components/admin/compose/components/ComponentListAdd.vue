<template lang="pug">
  nav.ComponentListAdd
    menu-ui(:groups='menuGroups', @click='clickComponent')

</template>

<script>
import { mapGetters } from 'vuex'
import { MenuUi } from '@/components/ui'

export default {
  name: 'ComponentListAdd',
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
      'emptyComponentsList',
    ]),
  },

  beforeMount () {
    this.setMenuBlankComponents()
    this.setMenuFilledComponents()
  },

  methods: {
    clickComponent (item) {
      this.$store.dispatch('addComponent', item.value).then(() => {
      })
      this.$store.dispatch('editComponent', item.value).then(() => {
      })
    },

    setMenuBlankComponents () {
      const menuGroup = {
        label: 'Blank Components',
        items: [],
      }
      Object
        .keys(this.emptyComponentsList)
        // .filter((componentName) => this.emptyComponentsList[componentName].group === 'components')
        .filter((componentName) => this.emptyComponentsList[componentName].listable)
        .forEach((componentKey) => {
          const component = this.emptyComponentsList[componentKey]
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
.ComponentListAdd

  .menu-list
    li
      a
        white-space nowrap
        transition background .2s linear
        &:hover
          color #373737
</style>
