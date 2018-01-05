<template lang="pug">
  .ListLanguages

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
import AdminTable from '@/components/admin/ui/AdminTable'

export default {
  name: 'ListLanguages',
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
// .ListLanguages
</style>
