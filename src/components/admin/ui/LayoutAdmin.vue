<template lang="pug">
  div.LayoutAdmin
    template(v-if='header')
      transition(name='slideUp', appear)
        router-view.LayoutAdmin__header(name='header', )

    .section()
      .columns()
        template(v-if='sidebar', appear)
          .LayoutAdmin__column_sidebar.column.is-2()
            transition(name='slideLeft', appear)
              router-view.LayoutAdmin__sidebar(name='sidebar', )
        template(v-if='main')
          .LayoutAdmin__column_main.column(:class='{"is-12": !sidebar, "is-10": sidebar, }')
            transition(name='fade', mode='out-in', appear)
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
.slideUp-enter-active, .slideUp-leave-active
  transition transform .3s linear
.slideUp-enter, .slideUp-leave-to
  transform translate(0, -60px)

.slideLeft-enter-active, .slideLeft-leave-active
  transition transform .3s linear
.slideLeft-enter, .slideLeft-leave-to
  transform translate(-100%, 0)

.fade-enter-active, .fade-leave-active
  transition opacity .1s linear
.fade-enter, .fade-leave-to
  opacity 0
</style>
