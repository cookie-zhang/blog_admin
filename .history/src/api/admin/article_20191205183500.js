import request from '@/utils/request'

export function createArticle(data) {
  return request({
    url: '/createarticle',
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

export function updatearticle(data) {
  return request({
    url: '/updatearticle',
    method: 'POST',
    data
  })
}
export function deletearticle(data) {
  return request({
    url: '/deletearticle',
    method: 'POST',
    data
  })
}

