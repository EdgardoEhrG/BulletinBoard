<template lang="pug">
    v-app
      v-navigation-drawer(app temporary)
      v-toolbar(app dark)
        v-toolbar-side-icon
        v-toolbar-title Bulletin Board
        v-spacer
        v-toolbar-items.hidden-sm-and-down
          v-btn(flat) Link 1
          v-btn(flat) Link 2
          v-btn(flat) Link 3
      v-content
        router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
</style>

