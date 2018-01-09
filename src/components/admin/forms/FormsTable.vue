<template lang="pug">
  .FormsAdmin

    admin-table(
      :itemKey='itemKey',
      :itemPlural='itemPlural',
      :itemSingular='itemSingular',
      :routeAddName='routeAddName',
      :routeEditName='routeEditName',
      :storeGetter='storeGetter',
      :storeRemove='storeRemove',
      :tableCols='tableCols',
      )
</template>

<script>
import { AdminTable } from '@/components/admin/ui'

export default {
  name: 'FormsAdmin',
  components: {
    AdminTable,
  },
  data () {
    return {
      itemKey: 'id',
      itemPlural: 'Forms',
      itemSingular: 'Form',
      routeAddName: 'FormsAdd',
      routeEditName: 'FormsEdit',
      storeGetter: 'formsList',
      storeRemove: 'formRemove',
      tableCols: [
        { label: 'Name', prop: 'name' },
      ],
    }
  },
}
</script>

<style lang="stylus">
// .FormsAdmin
</style>
