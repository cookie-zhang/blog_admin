import request from '@/utils/request'

export function createArticle(data) {
  return request({
    url: '/users/login',
    method: 'POST',
    data
  })
}

