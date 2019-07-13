import "babel-polyfill"; // ie11 support
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/component/legendScroll";
import "echarts/lib/component/tooltip";
import Vue from "vue";
import App from "./App.vue";
import "./plugins/vuetify";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
