import request from '@/utils/request'

export function createEveyWords(data) {
  return request({
    url: '/createwords',
    method: 'POST',
    data
  })
}
