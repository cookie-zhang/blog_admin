import Layout from '@/layout'

export const everydayWords = {
  path: '/admin/everydayWords',
  component: Layout,
  name: 'everydayWords',
  hidden: false,
  redirect: '/admin/everydayWords',
  meta: { title: '每日一语管理', icon: 'list' },
  children: [
    {
      path: '/admin/everydayWords',
      name: 'article',
      component: () => import('@/views/admin/articleManagements'),
      meta: { title: '文章管理' }
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
