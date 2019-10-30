import axios from 'axios'
const host = process.env.NODE_ENV !== 'development' ? 'http://47.104.191.170:2000' : 'http://47.104.191.170:2000'

const ajax = (url, params, method) => {
  return axios({
    method: method || 'post',
    url: host + url,
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (res.status === 200 && res.data.code === 200) {
        return res.data
      } else {
        return res.data
      }
    })
    .catch(err => err)
}

export {
  ajax
}
