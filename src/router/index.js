import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/colors',
    name: 'colors',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/colorsView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

// в js значение this внутри какой-то ф-ции определяется тем где она вызывается , а не где она изначально была определена
