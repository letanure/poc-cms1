<template lang="pug">
  .LanguagesAdmin

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
  name: 'LanguagesAdmin',
  components: {
    AdminTable,
  },
  data () {
    return {
      itemPlural: 'Languages',
      itemSingular: 'Language',
      routeAddName: 'LanguageAdd',
      routeEditName: 'LanguageEdit',
      storeGetter: 'languagesList',
      storeRemove: 'languageRemove',
      subtitle: 'Languages description',
      tableCols: [
        { label: 'Name', prop: 'name' },
        { label: 'Native name', prop: 'nativeName' },
        { label: 'Code ISO_639-1', prop: 'code' },
      ],
      title: 'Languages',
    }
  },
}
</script>

<style lang="stylus">
// .LanguagesAdmin
</style>
