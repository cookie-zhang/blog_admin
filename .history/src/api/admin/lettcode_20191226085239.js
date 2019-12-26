import request from '@/utils/request'

export function createLettcode(data) {
  return request({
    url: '/createLettcode',
    method: 'POST',
    data
  })
}
export function lettcodeList(data) {
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
export function deleteLettcodee(data) {
  return request({
    url: '/deleteLettcode',
    method: 'POST',
    data
  })
}

