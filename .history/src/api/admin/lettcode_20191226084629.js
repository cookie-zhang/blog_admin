import request from '@/utils/request'

export function create(data) {
  return request({
    url: '/createLettcode',
    method: 'POST',
    data
  })
}
export function List(data) {
  return request({
    url: '/lettcodeList',
    method: 'POST',
    data
  })
}
export function LettcodeDetail(data) {
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

