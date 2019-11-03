import request from '@/utils/request'
const  VUE_APP_SERVER_NAME = process.env.VUE_APP_SERVER_NAME

export function testPaperList(data) {
  return request({
    url: VUE_APP_SERVER_NAME +'/backend/examPaper/list',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: VUE_APP_SERVER_NAME +'/backend/examPaper/update',
    method: 'post',
    data
  })
}

export function publish(data) {
  return request({
    url: VUE_APP_SERVER_NAME +'/backend/examPaper/publish',
    method: 'post',
    data
  })
}

export function termination(data) {
  return request({
    url: VUE_APP_SERVER_NAME +'/backend/examPaper/termination',
    method: 'post',
    data
  })
}

export function deleteItem(data) {
  return request({
    url: VUE_APP_SERVER_NAME +'/backend/examPaper/delete',
    method: 'post',
    data
  })
}


export function addTest(data) {
  return request({
    url: VUE_APP_SERVER_NAME +'/backend/examPaper/add',
    method: 'post',
    data
  })
}



export function getInfoVO(data) {
  return request({
    url: VUE_APP_SERVER_NAME +'/backend/examPaper/getInfoVO',
    method: 'post',
    data
  })
}
