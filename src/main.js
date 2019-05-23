import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use( VueAnalytics, {
  id: 'UA-35969566-9',
  router
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
