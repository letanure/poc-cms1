<template lang="pug">
  div.LayoutAdmin
    template(v-if='header')
      router-view.LayoutAdmin__header(name='header', )

    .section()
      .columns()
        template(v-if='sidebar')
          .LayoutAdmin__column_sidebar.column.is-2()
            router-view.LayoutAdmin__sidebar(name='sidebar', )
        template(v-if='main')
          .LayoutAdmin__column_main.column(:class='{"is-12": !sidebar, "is-10": sidebar, }')
            router-view.LayoutAdmin__main(name='main', )

    template(v-if='footer')
      router-view.LayoutAdmin__footer(name='footer', )
</template>

<script>

export default {
  name: 'LayoutAdmin',
  props: {
    footer: {
      default: true,
      type: Boolean,
      required: false,
    },
    header: {
      default: true,
      type: Boolean,
      required: false,
    },
    main: {
      default: true,
      type: Boolean,
      required: false,
    },
    sidebar: {
      default: true,
      type: Boolean,
      required: false,
    },
  },
}
</script>

<style lang="stylus">
// .LayoutAdmin
</style>
