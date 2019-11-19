import request from '@/utils/request'

export function createEverydayWords(data) {
  return request({
    url: '/creatclassification',
    method: 'POST',
    data
  })
}

export function getWordsList(data) {
  return request({
    url: '/getwordsList',
    method: 'POST',
    data
  })
}
