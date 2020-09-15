import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Layout from '@/layout/layout.vue'
Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect:'/home',
    children:[
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta:{
          title: '首页'
        }
      },
        {
        path: '/test',
        name: 'Test',
        component: Test,
        meta:{
          title: '测试页'
        }
      }
    ]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
