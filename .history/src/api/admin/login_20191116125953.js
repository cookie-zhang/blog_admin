import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login' + data,
    method: 'get',
    data
  })
}

export function register(data) {
  return request({
    url: '/register' + data,
    method: 'get',
  })
}

