import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '@/components/Home.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    meta: {
      title: '首页'
    },
   component: Home,
   redirect: '/welcome',
   children: [
     {
       name: 'welcome',
       path: '/welcome',
       meta: '欢迎页',
       component: () => import('@/components/Welcome.vue')
     }
   ]
  },
  {
    name: 'login',
    path: '/login',
    meta: '登录',
    component: () => import('@/views/login.vue')
  } 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router