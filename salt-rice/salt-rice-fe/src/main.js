import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/main.css";
import "./assets/css/snackbar.css";
import './registerServiceWorker';

Vue.use(VueAxios, axios.create({ baseURL: process.env.VUE_APP_BASE_API }));
Vue.config.productionTip = false;

new Vue({ store, render: h => h(App), router }).$mount("#app");
