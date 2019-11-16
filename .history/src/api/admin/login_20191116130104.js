import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'get',
    params
  })
}

export function register(data) {
  return request({
    url: '/register' + data,
    method: 'get'
  })
}

