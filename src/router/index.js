import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * 公开路由表, 使用路由懒加载
 */
const publicRoutes = [
  {
    path: '/',
    component: () => import('@/views/login/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
