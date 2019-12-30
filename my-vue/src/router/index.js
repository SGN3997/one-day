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
    path: '/dai',
    name: 'dai',
    component: () => import(/* webpackChunkName: "about" */ '../views/dai.vue'),
    // children:[
    //   {
    //     path: 'jia',
    //     name: 'jia',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/er/jia.vue')
    //   },{
    //     path: 'xi',
    //     name: 'xi',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/er/xi.vue')
    //   }
    // ]
  },{
    path: '/fa',
    name: 'fa',
    component: () => import(/* webpackChunkName: "about" */ '../views/fa.vue')
  },{
    path: '/yi',
    name: 'yi',
    component: () => import(/* webpackChunkName: "about" */ '../views/yi.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
