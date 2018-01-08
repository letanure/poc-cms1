<template lang="pug">
  nav.ModalUi.modal
    .modal-background
    .modal-content
      p.image.is-4by3
        img(src='https://bulma.io/images/placeholders/1280x960.png', alt='')
    button.modal-close.is-large(aria-label='close')
</template>

<script>
export default {
  name: 'ModalUi',
}
</script>

<style lang="stylus">
// .ModalUi
</style>
