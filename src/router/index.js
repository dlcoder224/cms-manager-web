import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    name: 'home',
    path: '/',
    meta: {
      title: '首页'
    },
    component: Home,
    children: [
      {
        name: 'homeIndex',
        path: '/homeIndex',
        meta: {
          title: '欢迎首页'
        },
        component: () => import('@/views/home/index.vue')
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
  history: createWebHistory(),
  routes
})

export default router