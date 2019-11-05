import request from '@/utils/request'

export function createArticle(data) {
  return request({
    url: '/createArticle',
    method: 'POST',
    data
  })
}

http://localhost:2000/articleList

export function articleList(data) {
  return request({
    url: '/articleList',
    method: 'POST',
    data
  })
}