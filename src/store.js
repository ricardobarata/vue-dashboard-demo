import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDarkThemeEnabled: false
  },
  mutations: {
    DARK_THEME_ENABLED(state, value) {
      state.isDarkThemeEnabled = value;
    }
  },
  actions: {
    toogleDarkTheme(context, payload) {
      context.commit("DARK_THEME_ENABLED", payload);
    }
  }
});
