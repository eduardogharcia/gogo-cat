import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BusLineSchedule from './views/BusLineSchedule.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/itinerario/:id',
      name: 'itinerario',
      component: BusLineSchedule
    }
  ]
})
