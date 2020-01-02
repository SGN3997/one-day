import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/xiao',
    name: 'xiao',
    component: () => import(/* webpackChunkName: "about" */ '../views/xiao.vue')
  }, {
    path: '/fen',
    name: 'fen',
    component: () => import(/* webpackChunkName: "about" */ '../views/fen.vue')
  }, {
    path: '/kong',
    name: 'kong',
    component: () => import(/* webpackChunkName: "about" */ '../views/kong.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
