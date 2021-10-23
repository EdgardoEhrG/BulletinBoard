<template lang="pug">
    v-app
      v-navigation-drawer(app temporary v-model="drawer")
        v-list
          v-list-tile(v-for="link in links" :key="link.title" :to="link.url")
            v-list-tile-action
              v-icon {{ link.icon }}
            v-list-tile-content
              v-list-tile-title(v-text="link.title")
          v-list-tile(@click="logOut" v-if="isUserLoggedIn")
            v-list-tile-action
              v-icon exit_to_app
            v-list-tile-content
              v-list-tile-title(v-text="'Log Out'")
      v-toolbar(app dark)
        v-toolbar-side-icon.hidden-md-and-up(@click="drawer = !drawer")
        v-toolbar-title
          router-link.pointer(to="/" tag="span") Bulletin Board
        v-spacer
        v-toolbar-items.hidden-sm-and-down
          v-btn(flat v-for="link in links" :key="link.title" :to="link.url") #[v-icon(left) {{ link.icon }}] {{ link.title }}
          v-btn(flat @click="logOut" v-if="isUserLoggedIn") #[v-icon(left) exit_to_app] Log Out
      v-content
        router-view
      div(v-if="error")
        v-snackbar(
          :timeout="4500"
          :multi-line="true"
          color="error"
          @input="closeError"
          :value="true"
          ) {{ error }} #[v-btn(flat dark @click.native="closeError") Close]
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    closeError() {
      this.$store.dispatch("toClearError");
    },
    logOut() {
      this.$store.dispatch("toLogOut");
      this.$router.push("/login");
    },
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    links() {
      if (this.isUserLoggedIn) {
        return [
          { title: "Home", icon: "home", url: "/" },
          { title: "Orders", icon: "view_module", url: "/orders" },
          { title: "New ad", icon: "note_add", url: "/new" },
          { title: "My ads", icon: "list", url: "/my" },
        ];
      } else {
        return [
          { title: "Home", icon: "home", url: "/" },
          { title: "Login", icon: "lock", url: "/login" },
          { title: "Registration", icon: "face", url: "/registration" },
        ];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>
