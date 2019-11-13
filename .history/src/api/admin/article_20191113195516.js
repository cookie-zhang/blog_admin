import request from '@/utils/request'

export function createArticle(data) {
  return request({
    url: '/createArticle',
    method: 'POST',
    data
  })
}

export function articleList(data) {
  return request({
    url: '/articleList',
    method: 'POST',
    data
  })
}
export function articleDetail(data) {
  return request({
    url: '/articleDetail?id=' + data,
    method: 'get'
  })
}

