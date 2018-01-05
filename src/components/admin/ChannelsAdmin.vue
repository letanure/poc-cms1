<template lang="pug">
  .ChannelsAdmin

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
  name: 'ChannelsAdmin',
  components: {
    AdminTable,
  },
  data () {
    return {
      itemPlural: 'Channels',
      itemSingular: 'Channel',
      routeAddName: 'ChannelAdd',
      routeEditName: 'ChannelEdit',
      storeGetter: 'channelsList',
      storeRemove: 'channelRemove',
      subtitle: 'Channels description',
      tableCols: [
        { label: 'Name', prop: 'name' },
      ],
      title: 'Channels',
    }
  },
}
</script>

<style lang="stylus">
// .ChannelsAdmin
</style>
