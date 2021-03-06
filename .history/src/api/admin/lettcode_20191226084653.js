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
export function lettcodeDetail(data) {
  return request({
    url: '/lettcodeDetail?id=' + data,
    method: 'get'
  })
}

export function updateLettcode(data) {
  return request({
    url: '/updateLettcode',
    method: 'POST',
    data
  })
}
export function deleteLettcode(data) {
  return request({
    url: '/deletearticle',
    method: 'POST',
    data
  })
}

