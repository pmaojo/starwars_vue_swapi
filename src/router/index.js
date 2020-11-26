import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pilots',
    name: 'Pilots',
    component: Pilots
  },
  {
    path: '/pilot/:id',
    name: 'Pilot',
    component: Pilot,
    props: {
      id: '',
    },
  },
  {
    path: '/starships',
    name: 'Starships',
    component: Starships,
  },
  {
    path: '/starship/:id',
    name: 'Starship',
    component: Starship,
    props: {
      id: '',
    },
  }
]

const router = new VueRouter({
  routes
})

export default router
