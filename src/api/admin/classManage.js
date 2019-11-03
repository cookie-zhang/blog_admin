import request from '@/utils/request'
const SERVICE_NAME = process.env.VUE_APP_SERVER_NAME

// 获取班级管理列表
export function getClassList(data) {
  return request({
    url: SERVICE_NAME + '/backend/class/list',
    method: 'POST',
    data
  })
}

// 获取班级类型列表
export function getOptionList(data) {
  return request({
    url: SERVICE_NAME + '/pub/column/optionList',
    method: 'POST',
    data
  })
}

// 删除班级管理列表
export function classDelete(data) {
  return request({
    url: SERVICE_NAME + '/backend/class/delete',
    method: 'POST',
    data
  })
}

// 获取考试类型列表
export function examPaperOptionList(data) {
  return request({
    url: SERVICE_NAME + '/backend/examPaper/optionList',
    method: 'POST',
    data
  })
}

// 试卷推送
export function pushExamPaper(data) {
  return request({
    url: SERVICE_NAME + '/backend/class/pushExamPaper',
    method: 'POST',
    data
  })
}

// 班级管理详情
export function classGetInfoVO(data) {
  return request({
    url: SERVICE_NAME + '/backend/class/getInfoVO',
    method: 'POST',
    data
  })
}
