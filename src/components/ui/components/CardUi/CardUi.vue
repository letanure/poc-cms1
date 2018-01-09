<template lang="pug">
  .CardUi.card
    .card-header
      .card-header-title title
      .card-header-icon
        i(class="fa fa-angle-down", aria-hidden="true", )
    .card-image
      figure.image()
        img(src="https://bulma.io/images/placeholders/1280x960.png", alt="Placeholder image")
    </figure>
    .card-content
      .content
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
    .card-footer
      .card-footer-item Save
      .card-footer-item Edit
      .card-footer-item Delete
</template>

<script>
export default {
  name: 'CardUi',
}
</script>

<style lang="stylus">
// .CardUi
</style>
