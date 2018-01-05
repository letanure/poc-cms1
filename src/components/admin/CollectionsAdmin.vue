<template lang="pug">
  .CollectionsAdmin

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
  name: 'CollectionsAdmin',
  components: {
    AdminTable,
  },
  data () {
    return {
      itemPlural: 'Collections',
      itemSingular: 'Collection',
      routeAddName: 'PagesAdd',
      routeEditName: 'PagesEdit',
      storeGetter: 'collectionsList',
      storeRemove: 'collectiontRemove',
      subtitle: 'Collections description',
      tableCols: [
        { label: 'Name', prop: 'name' },
        { label: 'Slug', prop: 'slug' },
      ],
      title: 'Collections',
    }
  },
}
</script>

<style lang="stylus">
// .CollectionsAdmin
</style>
