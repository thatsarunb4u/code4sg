import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/scss/theme.scss";
import "./assets/css/snackbar.css";
import './registerServiceWorker';
import VueCoreVideoPlayer from 'vue-core-video-player';
import VModal from 'vue-js-modal';

Vue.config.productionTip = false;
Vue.config.performance = process.env.NODE_ENV !== "production";

new Vue({ store, render: h => h(App), router }).$mount("#app");

Vue.use(VueCoreVideoPlayer);
Vue.use(VModal);
