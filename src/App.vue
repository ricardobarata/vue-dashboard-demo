<template>
  <v-app :dark="isDark">
    <v-toolbar app :color="isDark ? '#3366cc' : '#3399ff' ">
      <v-toolbar-title class="headline text-uppercase">
        <span>Vue</span>
        <span class="font-weight-light">Dashboard demo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-on:click="themeSwitch" icon>
        <v-icon>invert_colors</v-icon>
      </v-btn>
      <v-btn to="/" icon>
        <v-icon>dashboard</v-icon>
      </v-btn>
      <v-btn to="/about" icon>
        <v-icon>help_outline</v-icon>
      </v-btn>
    </v-toolbar>
    <router-view />
  </v-app>
</template>

<script>
import store from "./store";

export default {
  name: "App",
  store,
  data: function() {
    return {
      isDark: false
    };
  },
  methods: {
    themeSwitch: function() {
      this.isDark = !this.isDark;
      this.$store.dispatch("toogleDarkTheme", this.isDark);
    }
  }
};
</script>

<style lang="scss">
html {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden !important;
  body {
    display: flex;
    flex-direction: column;
    height: 100%;
    #app {
      height: 100%;
    }
  }
}
</style>
