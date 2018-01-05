<template lang="pug">
  .CollectionsAdmin

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
  name: 'CollectionsAdmin',
  components: {
    AdminTable,
  },
  data () {
    return {
      itemKey: 'id',
      itemPlural: 'Collections',
      itemSingular: 'Collection',
      routeAddName: 'CollectionsAdd',
      routeEditName: 'CollectionsEdit',
      storeGetter: 'collectionsList',
      storeRemove: 'collectiontRemove',
      tableCols: [
        { label: 'Name', prop: 'name' },
        { label: 'Slug', prop: 'slug' },
      ],
    }
  },
}
</script>

<style lang="stylus">
// .CollectionsAdmin
</style>
