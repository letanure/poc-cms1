<template lang="pug">
  .SettingsAdmin

    router-view

</template>

<script>

export default {
  name: 'SettingsAdmin',
  data () {
    return {
      subtitle: 'Settings description',
      title: 'Settings',
    }
  },
}
</script>

<style lang="stylus">
// .SettingsAdmin
</style>
