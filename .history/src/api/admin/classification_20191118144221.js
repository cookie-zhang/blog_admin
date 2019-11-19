import request from '@/utils/request'

export function createEverydayWords(data) {
  return request({
    url: '/creatclassification',
    method: 'POST',
    data
  })
}

export function getclassificationList(data) {
  return request({
    url: '/classificationList',
    method: 'POST',
    data
  })
}
