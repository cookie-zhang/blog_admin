import request from '@/utils/request'

export function login(params) {
  return request({
    url: '/login',
    method: 'get',
    params
  })
}

export function register(params) {
  return request({
    url: '/register',
    method: 'get',
    params
  })
}

