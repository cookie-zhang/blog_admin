import Layout from '@/layout'
export const admin = {
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  name: 'admin',
  hidden: false,
  children: [{
    path: '/dashboard',
    name: '个人信息',
    component: () => import('@/views/admin/home/index'),
    meta: { title: '个人信息', icon: 'user' }
  }]
}
