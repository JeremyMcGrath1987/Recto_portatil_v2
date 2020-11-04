import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/index.scss";

require("vue2-animate/dist/vue2-animate.min.css");

Vue.config.productionTip = false;

window.app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
