import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'
import store from './store'
import router from "./router";
import "./assets/css/main.css";

Vue.prototype.$http = Axios
Vue.config.productionTip = false

new Vue({ store, render: h => h(App), router }).$mount('#app')
