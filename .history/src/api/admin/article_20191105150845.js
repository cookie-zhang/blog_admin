import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/users/login',
    method: 'POST',
    data
  })
}

