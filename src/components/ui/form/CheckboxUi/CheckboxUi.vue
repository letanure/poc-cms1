<template lang="pug">
  .CheckboxUi.control
    label.checkbox(:disabled='disabled', )
      input(type='checkbox', :disabled='disabled', )
      span(v-if='label', )
        | {{ label }}
</template>

<script>
export default {
  name: 'CheckboxUi',
  props: {
    label: {
      default: null,
      type: String,
      required: true,
    },
    disabled: {
      default: false,
      type: Boolean,
      required: false,
    },
  },
}
</script>

<style lang="stylus">
// .CheckboxUi
</style>
