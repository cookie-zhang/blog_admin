import Layout from '@/layout'

export const classification = {
  path: '/admin/classification',
  component: Layout,
  name: 'classification',
  hidden: false,
  redirect: '/admin/classification',
  meta: { title: '分类管理', icon: 'list' },
  children: [
    {
      path: '/admin/classification',
      name: 'article',
      component: () => import('@/views/admin/classification'),
      meta: { title: '分类管理' }
    },
    {
      path: '/admin/creatclassification',
      name: 'creatclassification',
      hidden: true,
      component: () => import('@/views/admin/classification/creatclassification'),
      meta: { title: '新建分类' }
    }
  ]
}
