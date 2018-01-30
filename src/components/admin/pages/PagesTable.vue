<template lang="pug">
  .PagesTable
    admin-table(
      :extraActions='extraActions',
      :itemKey='itemKey',
      :itemPlural='itemPlural',
      :itemSingular='itemSingular',
      :routeAddName='routeAddName',
      :routeEditName='routeEditName',
      :storeGetter='storeGetter',
      :storeRemove='storeRemove',
      :tableCols='tableCols',
      )

    button-ui(
      color='link',
      iconType='plus',
      tag='router-link',
      text='Add new Page',
      :to='{ name: "PagesAdd" }',
      )
</template>

<script>
import { ButtonUi } from '@/components/ui'
import { AdminTable } from '@/components/admin/ui'

export default {
  name: 'PagesTable',
  components: {
    AdminTable,
    ButtonUi,
  },
  data () {
    return {
      extraActions: [
        {
          color: 'link',
          iconType: 'th',
          outlined: true,
          size: 'small',
          tag: 'router-link',
          text: 'Compose',
          to: {
            name: 'PagesCompose',
          },
        },
        {
          color: 'link',
          iconType: 'th',
          outlined: true,
          size: 'small',
          tag: 'router-link',
          text: 'Edit content',
          to: {
            name: 'PagesEditContent',
          },
        },
      ],
      itemKey: 'id',
      itemPlural: 'Pages',
      itemSingular: 'Page',
      routeAddName: 'PagesAdd',
      routeEditName: 'PagesEdit',
      storeGetter: 'pagesList',
      storeRemove: 'pagesRemove',
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
