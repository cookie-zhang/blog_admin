import request from '@/utils/request'

export function createWords(data) {
    return request({
      url: '/createwords',
      method: 'POST',
      data
    })
  }