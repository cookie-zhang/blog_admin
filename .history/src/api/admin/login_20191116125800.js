import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}

export function register(data) {
  return request({
    url: '/register',
    method: 'get',
    data
  })
}

