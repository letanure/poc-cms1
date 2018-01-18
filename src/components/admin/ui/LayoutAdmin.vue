<template lang="pug">
  div.LayoutAdmin
    template(v-if='hasHeader')
      transition(name='slideUp', mode='out-in', appear)
        router-view.LayoutAdmin__header(name='header', )

    .columns()
      template(v-if='hasSidebarLeft', appear)
        aside.LayoutAdmin__column_sidebarLeft.column.is-2()
          transition(name='slideLeft', mode='out-in', appear)
            router-view.LayoutAdmin__sidebarLeft(name='sidebarLeft', )

      template(v-if='hasMain')
        main.LayoutAdmin__column_main.column(:class='classesMain')
          transition(name='fade', mode='out-in', appear)
            router-view.section.LayoutAdmin__main(name='main', )

      template(v-if='hasSidebarRight', appear)
        aside.LayoutAdmin__column_sidebarRight.column.is-3()
          transition(name='slideRight', mode='out-in', appear)
            router-view.LayoutAdmin__sidebarRight(name='sidebarRight', )

    template(v-if='hasFooter')
      transition(name='slideDown', mode='in-out', appear)
        router-view.LayoutAdmin__footer(name='footer', )
</template>

<script>

export default {
  name: 'LayoutAdmin',
  props: {
    hasFooter: {
      default: true,
      type: Boolean,
      required: false,
    },
    hasHeader: {
      default: true,
      type: Boolean,
      required: false,
    },
    hasMain: {
      default: true,
      type: Boolean,
      required: false,
    },
    hasSidebarLeft: {
      default: true,
      type: Boolean,
      required: false,
    },
    hasSidebarRight: {
      default: true,
      type: Boolean,
      required: false,
    },
  },
  computed: {
    classesMain () {
      let classMain = ''
      if (this.hasSidebarLeft && this.hasSidebarRight) {
        classMain = 'is-7'
      }
      if (this.hasSidebarLeft && !this.hasSidebarRight) {
        classMain = 'is-10'
      }
      return [classMain]
    },
  },
}
</script>

<style lang="stylus">
.LayoutAdmin

  .slideUp-enter-active, .slideUp-leave-active
    transition transform .3s linear
  .slideUp-enter, .slideUp-leave-to
    transform translate(0, -60px)

  .slideDown-enter-active, .slideDown-leave-active
    transition transform .3s linear
  .slideDown-enter, .slideDown-leave-to
    transform translate(0, 60px)

  .slideLeft-enter-active, .slideLeft-leave-active
    transition transform .3s linear
  .slideLeft-enter, .slideLeft-leave-to
    transform translate(-100%, 0)

  .slideRight-enter-active, .slideRight-leave-active
    transition transform .3s linear
    transition-delay .3s
  .slideRight-enter, .slideRight-leave-to
    transform translate(100%, 0)

  .fade-enter-active, .fade-leave-active
    transition opacity .1s linear
  .fade-enter, .fade-leave-to
    opacity 0
</style>
