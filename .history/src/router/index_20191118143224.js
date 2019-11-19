import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import { admin } from '@/router/admin/home'
import { commentManagement } from '@/router/admin/commentManagement'
import { articleManagements } from '@/router/admin/articleManagements'
import { everydayWords } from '@/router/admin/everydayWords'
import { classification }

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  admin,
  articleManagements,
  commentManagement,
  everydayWords,
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
