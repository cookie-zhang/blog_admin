import request from '@/utils/request'

export function create(data) {
    return request({
      url: '/articleList',
      method: 'POST',
      data
    })
  }