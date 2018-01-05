<template lang="pug">
  .AssetsAdmin

    admin-table(
      :itemKey='itemKey',
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
  name: 'AssetsAdmin',
  components: {
    AdminTable,
  },
  data () {
    return {
      itemKey: 'id',
      itemPlural: 'Assets',
      itemSingular: 'Asset',
      routeAddName: 'PagesAdd',
      routeEditName: 'PagesEdit',
      storeGetter: 'assetsList',
      storeRemove: 'assetRemove',
      subtitle: 'Assets description',
      tableCols: [
        { label: 'Name', prop: 'name' },
        { label: 'Type', prop: 'type' },
      ],
      title: 'Assets',
    }
  },
}
</script>

<style lang="stylus">
// .AssetsAdmin
</style>
