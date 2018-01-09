<template lang="pug">
  .RadioUi.control
    template(v-for='option in options')
      label.radio
        input(
          type='radio',
          :name='option.name',
          :checked='option.checked',
          :disabled='option.disabled',
          )
        span
          | {{ option.label }}
</template>

<script>


export default {
  name: 'RadioUi',
  props: {
    options: {
      default: () => [],
      type: Array,
      required: true,
      validator (list) {
        const defaultKeys = ['label', 'name']
        const isValid = list.every((item) => {
          return isEqual(defaultKeys.sort(), Object.keys(item).sort())
        })
        return isValid
      },
    },
  }
}
</script>

<style lang="stylus">
// .RadioUi
</style>
