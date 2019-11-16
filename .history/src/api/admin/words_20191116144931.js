import request from '@/utils/request'

export function createEveWords(data) {
  return request({
    url: '/createwords',
    method: 'POST',
    data
  })
}
