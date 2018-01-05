<template lang="pug">
  .SettingsAdmin

    .columns
      .column
        h1.title.
          Settings
        h2.subtitle.
          Settings description

    router-view
</template>

<script>

export default {
  name: 'SettingsAdmin',
}
</script>

<style lang="stylus">
// .SettingsAdmin
</style>
