<template lang="pug">
    v-app
      v-navigation-drawer(app temporary v-model="drawer")
        v-list
          v-list-tile(v-for="link in links" :key="link.title" :to="link.url")
            v-list-tile-action
              v-icon {{ link.icon }}
            v-list-tile-content
              v-list-tile-title(v-text="link.title")
      v-toolbar(app dark)
        v-toolbar-side-icon.hidden-md-and-up(@click="drawer = !drawer")
        v-toolbar-title
          router-link.pointer(to="/" tag="span") Bulletin Board
        v-spacer
        v-toolbar-items.hidden-sm-and-down
          v-btn(flat v-for="link in links" :key="link.title" :to="link.url") #[v-icon(left) {{ link.icon }}] {{ link.title }}
      v-content
        router-view
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      links: [
        {title: 'Home', icon: 'home', url: '/'},
        {title: 'Login', icon: 'lock', url: '/login'},
        {title: 'Registration', icon: 'face', url: '/registration'},
        {title: 'Orders', icon: 'view_module', url: '/orders'},
        {title: 'New ad', icon: 'note_add', url: '/new'},
        {title: 'My ads', icon: 'list', url: '/my'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.pointer {
  cursor: pointer;
}

</style>

