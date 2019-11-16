import request from '@/utils/request'

export function login(params) {
  return request({
    url: '/login',
    method: 'get',
    params
  })
}

export function register( + data) {
  return request({
    url: '/register',
    method: 'get'
  })
}

