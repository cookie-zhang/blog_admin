import Layout from '@/layout'
export const commentManagement = {
  path: '/commentManagement',
  component: Layout,
  name: 'commentManagement',
  redirect: '/commentManagement',
  hidden: false,
  meta: { title: '评论管理', icon: 'edit' },
  children: [
    {
      path: '/admin/commentManagement',
      name: 'commentManagement',
      component: () => import('@/views/admin/commentManagement/index'),
      meta: { title: '评论管理' }
    }
  ]
}
