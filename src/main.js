import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

import './assets/styles/index.css'

const GA_TRACKING_CODE = 'UA-109767818-4'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: GA_TRACKING_CODE
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

console.log('Thanks for your interest, if you\'d like to see\nhow this page has been put together then visit:\nhttps://github.com/StaffCircle/frontend-role')
