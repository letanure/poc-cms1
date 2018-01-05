<template lang="pug">
  .ConfirmUi.modal(:class='{"is-active": isActive}', )
    .modal-background(@click='close(false)')
    .modal-card()
      .modal-card-head()
        .modal-card-title()
          | {{ title }}
        button.delete(aria-label="close", @click='close(false)', )
      .modal-card-body()
         | {{ message }}
      .modal-card-foot.has-text-right()
        button.button(@click='close(false)', )
          | {{ answerNo }}
        button.button.is-danger(@click='close(true)')
          | {{ answerYes }}

</template>

<script>
export default {
  name: 'ConfirmUi',
  props: {
    active: {
      default: false,
      type: Boolean,
    },
    answerNo: {
      default: '',
      type: String,
    },
    answerYes: {
      default: '',
      type: String,
    },
    message: {
      default: '',
      type: String,
    },
    title: {
      default: '',
      type: String,
    },
  },
  data () {
    return {
      isActive: 'no',
    }
  },
  watch: {
    active () {
      this.isActive = this.active
    },
  },
  created () {
    this.isActive = this.active
  },
  methods: {
    close (answer) {
      this.isActive = false
      this.$emit('close', answer)
    },
  },
}
</script>

<style lang="stylus">
  .ConfirmUi
    .modal-card-foot
      &.has-text-right
        justify-content flex-end
</style>
