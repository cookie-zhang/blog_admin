import request from '@/utils/request'
const SERVICE_NAME = process.env.VUE_APP_SERVER_NAME

// 课程列表
export function getCourseList(data) {
  return request({
    url: SERVICE_NAME + '/backend/course/list',
    method: 'POST',
    data
  })
}

export function delCourse(params) {
  return request({
    url: SERVICE_NAME + '/backend/course/delete',
    method: 'POST',
    params
  })
}

export function obtained(params) {
  return request({
    url: SERVICE_NAME + '/backend/course/obtained',
    method: 'POST',
    params
  })
}

export function release(params) {
  return request({
    url: SERVICE_NAME + '/backend/course/release',
    method: 'POST',
    params
  })
}

// 课程详情

export function getIntroduction(params) {
  return request({
    url: SERVICE_NAME + '/backend/course/courseDetail/introduction',
    method: 'POST',
    params
  })
}

export function getDirectory(data) {
  return request({
    url: SERVICE_NAME + '/backend/course/courseDetail/directory',
    method: 'POST',
    data
  })
}

export function getDiscuss(data) {
  return request({
    url: SERVICE_NAME + '/backend/course/courseDetail/discuss',
    method: 'POST',
    data
  })
}

export function getNote(data) {
  return request({
    url: SERVICE_NAME + '	/backend/course/courseDetail/note',
    method: 'POST',
    data
  })
}

export function getCourseType(data) {
  return request({
    url: SERVICE_NAME + '/backend/course/type',
    method: 'POST',
    data
  })
}

export function getColumnOptionList(data) {
  return request({
    url: SERVICE_NAME + '/pub/column/optionList',
    method: 'POST',
    data
  })
}
