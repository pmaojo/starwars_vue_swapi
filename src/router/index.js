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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pilots" */ '../views/Pilots.vue')
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pilots" */ '../views/Pilots.vue')
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
