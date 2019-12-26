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
      name: 'lettcode',
      component: () => import('@/views/admin/lettcodeManagements'),
      meta: { title: '力扣专栏' }
    },
    {
      path: '/admin/lettcodeDetail',
      name: 'lettcodeDetail',
      hidden: true,
      component: () => import('@/views/admin/lettcodeManagements/articleDetail'),
      meta: { title: '力扣专栏详情' }
    },
    {
      path: '/admin/createLettcode',
      name: 'createlettcode',
      hidden: true,
      component: () => import('@/views/admin/lettcodeManagements/createLettcode'),
      meta: { title: '新建每日力扣' }
    }
  ]
}
