import Vue from 'vue'
import App from './App.vue'

import './assets/styles/index.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

console.log('Thanks for your interest, if you\'d like to see\nhow this page has been put together then visit:\nhttps://github.com/StaffCircle/frontend-role')
