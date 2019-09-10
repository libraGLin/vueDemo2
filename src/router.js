import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 默认路由（可以先配置好：首页、登录页、404等页面），其他页面可通过接口获取
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Login" */ './views/Login.vue')
    }
  ]
})
// 假设routeApi是通过接口获取的
const routeApi = [
  {
    path: '/home',
    name: 'home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/About.vue')
  }
]

router.addRoutes(routeApi)
console.log('路由2', router)
export default router
