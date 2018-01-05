<template lang="pug">
  .ChannelsAdmin

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
  name: 'ChannelsAdmin',
  components: {
    AdminTable,
  },
  data () {
    return {
      itemKey: 'id',
      itemPlural: 'Channels',
      itemSingular: 'Channel',
      routeAddName: 'ChannelsAdd',
      routeEditName: 'ChannelsEdit',
      storeGetter: 'channelsList',
      storeRemove: 'channelRemove',
      tableCols: [
        { label: 'Name', prop: 'name' },
      ],
    }
  },
}
</script>

<style lang="stylus">
// .ChannelsAdmin
</style>
