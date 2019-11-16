import request from '@/utils/request'

export function createEverydayWords(data) {
  return request({
    url: '/createwords ',
    method: 'POST',
    data
  })
}
