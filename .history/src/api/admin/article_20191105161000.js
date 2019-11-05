import request from '@/utils/request'

export function createArticle(data) {
  return request({
    url: '/createArticle',
    method: 'POST',
    data
  })
}

export function articleList() {
  return request({
    url: '/articleList',
    method: 'POST',
    data
  })
}