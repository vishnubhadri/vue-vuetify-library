import Vue from 'vue'
import App from './App.vue'

 import library from 'custom-lib'
import 'custom-lib/dist/customLib.css'
Vue.use(library);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
