<template lang="pug">
  .LanguagesAdmin

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
  name: 'LanguagesAdmin',
  components: {
    AdminTable,
  },
  data () {
    return {
      itemKey: 'id',
      itemPlural: 'Languages',
      itemSingular: 'Language',
      routeAddName: 'LanguagesAdd',
      routeEditName: 'LanguagesEdit',
      storeGetter: 'languagesList',
      storeRemove: 'languageRemove',
      tableCols: [
        { label: 'Name', prop: 'name' },
        { label: 'Native name', prop: 'nativeName' },
        { label: 'Code ISO_639-1', prop: 'code' },
      ],
    }
  },
}
</script>

<style lang="stylus">
// .LanguagesAdmin
</style>
