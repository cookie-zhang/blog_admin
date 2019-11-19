import request from '@/utils/request'

export function createclassification(data) {
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
