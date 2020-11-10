import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '@/views/Index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home/Home.vue')
      }
    ]
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404/Index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
