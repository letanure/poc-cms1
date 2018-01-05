<template lang="pug">
  .UsersAdmin

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
  name: 'UsersAdmin',
  components: {
    AdminTable,
  },
  data () {
    return {
      itemPlural: 'Users',
      itemSingular: 'User',
      routeAddName: 'UserAdd',
      routeEditName: 'UserEdit',
      storeGetter: 'usersList',
      storeRemove: 'userRemove',
      subtitle: 'Users description',
      tableCols: [
        { label: 'Name', prop: 'name' },
        { label: 'Email', prop: 'email' },
      ],
      title: 'Users',
    }
  },
}
</script>

<style lang="stylus">
// .UsersAdmin
</style>
