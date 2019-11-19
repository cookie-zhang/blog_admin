import Layout from '@/layout'

export const classification = {
  path: '/admin/classification',
  component: Layout,
  name: 'classification',
  hidden: false,
  redirect: '/admin/classification',
  meta: { title: '每日一语管理', icon: 'list' },
  children: [
    {
      path: '/admin/classification',
      name: 'article',
      component: () => import('@/views/admin/classification'),
      meta: { title: '每日一语管理' }
    },
    {
      path: '/admin/creatclassification',
      name: 'creatclassification',
      hidden: true,
      component: () => import('@/views/admin/classification/creatclassification'),
      meta: { title: '新建每日一语' }
    }
  ]
}
