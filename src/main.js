import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '@/router'
import axios from 'axios'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
