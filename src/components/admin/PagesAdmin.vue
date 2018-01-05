<template lang="pug">
  .PagesAdmin

    admin-table(
      :itemPlural='itemPlural',
      :itemSingular='itemSingular',
      :routeAddName='routeAddName',
      :routeEditName='routeEditName',
      :storeGetter='storeGetter',
      :storeRemove='storeRemove',
      :subtitle='subtitle',
      :tableCols='tableCols',
      :title='title',
      )
</template>

<script>
import { AdminTable } from '@/components/admin/ui'

export default {
  name: 'PagesAdmin',
  components: {
    AdminTable,
  },
  data () {
    return {
      itemPlural: 'Pages',
      itemSingular: 'Page',
      routeAddName: 'PageAdd',
      routeEditName: 'PageEdit',
      storeGetter: 'pagesList',
      storeRemove: 'pageRemove',
      subtitle: 'Pages description',
      tableCols: [
        { label: 'Name', prop: 'name' },
        { label: 'URL', prop: 'url' },
      ],
      title: 'Pages',
    }
  },
}
</script>

<style lang="stylus">
// .PagesAdmin
</style>
