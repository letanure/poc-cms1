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
      :subtitle='subtitle',
      :tableCols='tableCols',
      :title='title',
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
      subtitle: 'Forms description',
      tableCols: [
        { label: 'Name', prop: 'name' },
      ],
      title: 'Forms',
    }
  },
}
</script>

<style lang="stylus">
// .FormsAdmin
</style>
