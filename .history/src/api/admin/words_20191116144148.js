import request from '@/utils/request'

export function articleList(data) {
    return request({
      url: '/articleList',
      method: 'POST',
      data
    })
  }