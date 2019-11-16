import request from '@/utils/request'
const SERVICE_NAME = process.env.VUE_APP_SERVER_NAME

export function getCollegeCourseStatus() {
  return request({
    url: SERVICE_NAME + '/pub/dic/optionList',
    method: 'POST',
    params: {
      code:'college_course_status'
    }
  })
}