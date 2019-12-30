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
  },{
    path: '/sye',
    name: 'sye',
    component: () => import(/* webpackChunkName: "about" */ '../views/sye.vue')
  },{
    path: '/cheng',
    name: 'cheng',
    component: () => import(/* webpackChunkName: "about" */ '../views/cheng.vue')
  },{
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
