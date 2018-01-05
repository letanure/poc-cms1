<template lang="pug">
  .PagesTable
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
  name: 'PagesTable',
  components: {
    AdminTable,
  },
  data () {
    return {
      itemKey: 'id',
      itemPlural: 'Pages',
      itemSingular: 'Page',
      routeAddName: 'PagesAdd',
      routeEditName: 'PagesEdit',
      storeGetter: 'pagesList',
      storeRemove: 'pageRemove',
      tableCols: [
        { label: 'Name', prop: 'name' },
        { label: 'URL', prop: 'url' },
      ],
    }
  },
}
</script>

<style lang="stylus">
// .PagesTable
</style>
