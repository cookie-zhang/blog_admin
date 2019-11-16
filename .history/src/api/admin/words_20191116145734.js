import request from '@/utils/request'

export function createEverydayWords(data) {
  return request({
    url: '/createwords',
    method: 'POST',
    data
  })
}


export function getWordsList(data) {
  return request({
    url: '/createwords',
    method: 'POST',
    data
  })
}
