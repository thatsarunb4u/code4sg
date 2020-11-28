import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/scss/theme.scss";
import "./assets/css/snackbar.css";
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.config.performance = process.env.NODE_ENV !== "production";

new Vue({ store, render: h => h(App), router }).$mount("#app");
