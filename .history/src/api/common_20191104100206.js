import request from '@/utils/request'
import {getToken} from '@/utils/auth'
const SERVICE_NAME = process.env.VUE_APP_SERVER_NAME
const BaseUrl = process.env.VUE_APP_BASE_API

const SESSION_ID = getToken()

// 上传图片
export const uploadImg = {
  url: `${BaseUrl}/${SERVICE_NAME}/attachment/uploadImg`, // 上传url
  getUrl: `${BaseUrl}/${SERVICE_NAME}/attachment/getImg`, // 获取url
  headers: {
    session_id: SESSION_ID   // 上传request header
  }
}
// 上传apk附件
export const uploadApk = {
  url: `${BaseUrl}/${SERVICE_NAME}/attachment/uploadApk`, // 上传url
  getUrl: `${BaseUrl}/${SERVICE_NAME}/attachment/getImg`, // 获取url
  headers: {
    session_id: SESSION_ID  // 上传request header
  }
}

// 上传excel
export const uploadFile = {
  url: `${BaseUrl}/${SERVICE_NAME}/coupons/getFileValue`, // 上传url
  headers: {
    session_id: SESSION_ID  // 上传request header
  }
}

// 下载附件
export function downLoadFile(id) {
  return request({
    url: SERVICE_NAME + '/attachment/getDownApkUrl/' + id,
    method: 'POST'
  })
}

// 获取用户类型
export function getCustomerType() {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'customer_type'
    }
  })
}

// 获取星座列表
export function getConstellationList() {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'customer_constellation_info'
    }
  })
}

// 获取所有爱好列表
export function getHobbyList() {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'customer_hobby_info'
    }
  })
}

// 获取用户认证列表
export function getRenList() {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'customer_renzheng_state'
    }
  })
}
// 获取区域商圈
export function getAreaList(data) {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'dict_database_area_info'
    }
  })
}

// 获取轮播图位置
export function getPicPosition(data) {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'rotate_picture_position_type',
    }
  })
}

// 获取轮播图状态
export function getShelfFlagInfo(data) {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'shelf_flag_info'
    }
  })
}
// 获取轮播图配置
export function getRotateConfig(data) {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'rotate_config_type'
    }
  })
}

// 获取广告位置options
export function getAdPosition(data) {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'ad_picture_position_type'
     
    }
  })
}
// 获取广告配置options
export function getAdConfig(data) {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'ad_config_type'
    
    }
  })
}

// 获取活动类型
export function getActivityType(data) {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'activity_type_info'
    }
  })
}
// 获取活动状态
export function getActivityStatus(data) {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'activity_status_info'
    }
  })
}
// 获取活动对象
export function getObj(data) {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'activity_object_type_info'
    }
  })
}

// 获取是否定制
export function getCustom(data) {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'activity_customized_type'
    }
  })
}


//出租方式
export function getRentWay(data) {
  return request({
    url: SERVICE_NAME + '/rentHouseContract/getRentWay',
    method: 'POST',
    data
  })
}

// 获取优惠券类型

export function getCouponType(data) {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'coupons_type_info'
    }
  })
}
// 获取是否加入领券中心
export function getCouponFlag(data) {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'coupons_center_flag_info'
    }
  })
}
//获取优惠券有效类型
export function getValidType(data) {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'coupons_valid_type_info'
    }
  })
}

// 获取优惠券发放类型
export function getIssueType(data) {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'coupons_issue_type'
    }
  })
}

// 获取优惠劵发送目标类型
export function getGoalIssueType(data) {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'coupons_issue_goal_type'
    }
  })
}

// 获取事件触发类型 

export function getEventTypes(data) {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'coupons_config_trigger_event_type'
    }
  })
}

// 获取消息标端类型
export function getMessageGoalType(data) {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'backend_app_push_message_goal_type',
      level:2
    }
  })
}

// 获取消息目标类型
export function getMessageGoalUserType(data) {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'backend_app_push_message_goal_user_type'
    }
  })
}

// 获取消息推送类型
export function getMessagePushtimeType(data) {
  return request({
    url: SERVICE_NAME + '/dic/optionList',
    method: 'POST',
    params: {
      code: 'backend_app_push_message_push_time_type'
    }
  })
}
