import request from '@/utils/request'

export function createWords(data) {
    return request({
      url: '/articleList',
      method: 'POST',
      data
    })
  }