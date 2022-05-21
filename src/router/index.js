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
      },
      {
        path: '/activity',
        name: 'activity',
        component: () => import(/* webpackChunkName: "home" */ '@/views/activity/activity.vue')
      },
      {
        path: '/pay',
        name: 'pay',
        component: () => import(/* webpackChunkName: "home" */ '@/views/pay/pay.vue')
      },
      {
        path: '/service',
        name: 'service',
        component: () => import(/* webpackChunkName: "home" */ '@/views/service/service.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "home" */ '@/views/user/user.vue')
      },
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
