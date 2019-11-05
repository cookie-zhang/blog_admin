import request from '@/utils/request'
const SERVICE_NAME = process.env.VUE_APP_SERVER_NAME

// 获取数据统计课程排名列表
export function getCourseDataList(params) {
  return request({
    url: SERVICE_NAME + '/statistics/getCollegeCourseTop',
    method: 'GET',
    params
  })
}

// /statistics/getCollegeCourseVodRecordByCreateTime
// 学习数据
export function getCollegeCourseVodRecordByCreateTime(data) {
  return request({
    url: SERVICE_NAME + '/statistics/getCollegeCourseVodRecordByCreateTime',
    method: 'POST',
    data
  })
}

// /statistics/export
// 学习数据导出
export function statisticsExport(data) {
  return request({
    url: SERVICE_NAME + '/statistics/export',
    method: 'POST',
    responseType: 'blob',
    data
  })
}

// /collegeStudentExam/getExamPaperName
// 试卷下拉框列表
export function getExamPaperName(params) {
  return request({
    url: SERVICE_NAME + '/collegeStudentExam/getExamPaperName',
    method: 'GET',
    params
  })
}

// /collegeStudentExam/getClassName
// 班级下拉列表
export function getClassName(params) {
  return request({
    url: SERVICE_NAME + '/collegeStudentExam/getClassName',
    method: 'GET',
    params
  })
}

// collegeStudentExam/getCollegeStudentExam
// 成绩列表
export function getCollegeStudentExam(data) {
  return request({
    url: SERVICE_NAME + '/collegeStudentExam/getCollegeStudentExam',
    method: 'POST',
    data
  })
}

// collegeStudentExam/export
// 成绩列表导出
export function collegeStudentExamExport(data) {
  return request({
    url: SERVICE_NAME + '/collegeStudentExam/export',
    method: 'POST',
    responseType: 'blob',
    data
  })
}