import Layout from '@/layout'

export const articleManagements = {
  path: '/admin/lettcode',
  component: Layout,
  name: 'lettcode',
  hidden: false,
  redirect: '/admin/lettcodeManagements',
  meta: { title: '力扣专栏', icon: 'list' },
  children: [
    {
      path: '/admin/lettcodeManagements',
      name: 'article',
      component: () => import('@/views/admin/lettcodeManagements'),
      meta: { title: '力扣专栏' }
    },
    {
      path: '/admin/articleDetail',
      name: 'articleDetail',
      hidden: true,
      component: () => import('@/views/admin/articleManagements/articleDetail'),
      meta: { title: '文章详情' }
    },
    {
      path: '/admin/createArticle',
      name: 'createArticle',
      hidden: true,
      component: () => import('@/views/admin/articleManagements/createArticle'),
      meta: { title: '新建文章' }
    }
  ]
}
