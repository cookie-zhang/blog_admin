import Layout from '@/layout'

export const articleManagements = {
  path: '/admin/class',
  component: Layout,
  name: 'article',
  hidden: false,
  redirect: '/admin/articleManagements',
  meta: { title: '文章管理', icon: 'list' },
  children: [
    {
      path: '/admin/articleManagements',
      name: 'article',
      component: () => import('@/views/admin/articleManagements'),
      meta: { title: '文章管理' }
    },
    {
      path: '/admin/courseDetail',
      name: 'courseDetail',
      hidden: true,
      component: () => import('@/views/admin/articleManagements/courseDetail'),
      meta: { title: '文章详情' }
    },
    {
      path: '/admin/createA',
      name: 'createCourse',
      hidden: true,
      component: () => import('@/views/admin/articleManagements/createCourse'),
      meta: { title: '新建文章' }
    }
  ]
}
