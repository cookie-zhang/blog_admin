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
    // {
    //   path: '/admin/classDetail',
    //   name: 'classDetail',
    //   hidden: true,
    //   component: () => import('@/views/admin/classManagement/detail'),
    //   meta: { title: '班级详情' }
    // },
    // {
    //   path: '/admin/classCreat',
    //   name: 'classCreat',
    //   hidden: true,
    //   component: () => import('@/views/admin/classManagement/creat'),
    //   meta: { title: '创建班级' }
    // },
    // {
    //   path: '/admin/studentMes',
    //   name: 'studentMes',
    //   hidden: true,
    //   component: () => import('@/views/admin/classManagement/studentMes'),
    //   meta: { title: '学生信息' }
    // }
  ]
}
