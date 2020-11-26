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
    component: () => import(/* webpackChunkName: "pilots" */ '../views/Pilots.vue'),
  },
  {
    path: '/pilot/:id',
    name: 'Pilot',
    component: () => import(/* webpackChunkName: "pilot" */ '../views/Pilot.vue'),
    props: {
      id: '',
    },
  },
  {
    path: '/starships',
    name: 'Starships',
    component: () => import(/* webpackChunkName: "starships" */ '../views/Starships.vue'),
  },
  {
    path: '/starship/:id',
    name: 'Starship',
    component: () => import(/* webpackChunkName: "starship" */ '../views/Starship.vue'),
    props: {
      id: '',
    },
  }
]

const router = new VueRouter({
  routes
})

export default router
