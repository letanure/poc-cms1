<template lang="pug">
  div.LoadingUi.hero.is-dark.is-overlay.is-bold
    button-ui(
      color='dark',
      size='large',
      state='loading',
    )
</template>

<script>
import ButtonUi from '@/components/ui/elements/ButtonUi/ButtonUi'

export default {
  name: 'LoadingUi',
  components: {
    ButtonUi,
  },
}
</script>

<style lang="stylus">
.LoadingUi
  align-items center
  display flex
  justify-content center
  opacity .5
  z-index 99
</style>
