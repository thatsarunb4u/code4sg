import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '../node_modules/@fortawesome/fontawesome-free/js/all.js'
import Axios from 'axios'
import store from './store'

Vue.use(Buefy,{
  defaultIconPack: 'fas',
  defaultContainerElement: '#content'
})

Vue.prototype.$http_client=Axios

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
