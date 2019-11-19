import Layout from '@/layout'

export const everydayWords = {
  path: '/admin/creatclassification',
  component: Layout,
  name: 'creatclassification',
  hidden: false,
  redirect: '/admin/creatclassification',
  meta: { title: '每日一语管理', icon: 'list' },
  children: [
    {
      path: '/admin/everydayWords',
      name: 'article',
      component: () => import('@/views/admin/creatclassification'),
      meta: { title: '每日一语管理' }
    },
    {
      path: '/admin/creatWords',
      name: 'creatWords',
      hidden: true,
      component: () => import('@/views/admin/everydayWords/creatWords'),
      meta: { title: '新建每日一语' }
    }
  ]
}
