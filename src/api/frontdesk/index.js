import request from '@/utils/request'
const SERVICE_NAME = process.env.VUE_APP_SERVER_NAME

//获取首页tab数据
export function homePageColumn(data){
    return request({
        url:SERVICE_NAME+'/portal/homePage/column',
        method:'POST',
        data
    })
}

///portal/homePage/listCourse
//获取课程列表接口
export function homePageListCourse(data){
    return request({
        url:SERVICE_NAME+'/portal/homePage/listCourse',
        method:'POST',
        data
    })
}

// /portal/homePage/rotateDrawList
// 轮播图列表
export function homePageRotateDrawList(data){
    return request({
        url:SERVICE_NAME+'/portal/homePage/rotateDrawList',
        method:'POST',
        data
    })
}

// /portal/course/list
// 搜索课程列表
export function courseList(data){
    return request({
        url:SERVICE_NAME+'/portal/course/list',
        method:'POST',
        data
    })
}

///portal/course/detail
// 课程详情
export function courseDetail(data){
    return request({
        url:SERVICE_NAME+'/portal/course/detail',
        method:'POST',
        data
    })
}

// portal/course/directory
// 课程详情目录
export function courseDirectory(data){
    return request({
        url:SERVICE_NAME+'/portal/course/directory',
        method:'POST',
        data
    })
}

// course/noteList
// 课程详情笔记
export function courseNoteList(data){
    return request({
        url:SERVICE_NAME+'/portal/course/note/list',
        method:'POST',
        data
    })
}

//course/note/add
//新增笔记
export function courseNoteAdd(data){
    return request({
        url:SERVICE_NAME+'/portal/course/note/add',
        method:'POST',
        data
    })
}

//course/note/update
//编辑笔记
export function courseNoteUpdate(data){
    return request({
        url:SERVICE_NAME+'/portal/course/note/update',
        method:'POST',
        data
    })
}

//course/note/delete
//删除笔记
export function courseNoteDelete(data){
    return request({
        url:SERVICE_NAME+'/portal/course/note/delete',
        method:'POST',
        data
    })
}

//course/praise/add
//点赞
export function praiseAdd(data){
    return request({
        url:SERVICE_NAME+'/portal/course/praise/add',
        method:'POST',
        data
    })
}

//course/praise/cancel
//取消点赞
export function praiseCancel(data){
    return request({
        url:SERVICE_NAME+'/portal/course/praise/cancel',
        method:'POST',
        data
    })
}

//course/enshrine/add
//收藏
export function enshrineAdd(data){
    return request({
        url:SERVICE_NAME+'/portal/course/enshrine/add',
        method:'POST',
        data
    })
}

//course/enshrine/cancel
//收藏取消
export function enshrineCancel(data){
    return request({
        url:SERVICE_NAME+'/portal/course/enshrine/cancel',
        method:'POST',
        data
    })
}

//course/discuss/list
//课程讨论列表
export function getDiscussList(data){
    return request({
        url:SERVICE_NAME+'/portal/course/discuss/list',
        method:'POST',
        data
    })
}

//course/discuss/add
//课程讨论新增
export function discussAdd(data){
    return request({
        url:SERVICE_NAME+'/portal/course/discuss/add',
        method:'POST',
        data
    })
}

// portal/own/courseList
//我的学习课程列表
export function ownCourseList(data){
    return request({
        url:SERVICE_NAME+'/portal/own/courseList',
        method:'POST',
        data
    })
}

//portal/own/examList
//我的考试列表
export function ownExamList(data){
    return request({
        url:SERVICE_NAME+'/portal/own/examList',
        method:'POST',
        data
    })
}


//portal/own/enshrineList
//我的收藏列表
export function enshrineList(data){
    return request({
        url:SERVICE_NAME+'/portal/own/enshrineList',
        method:'POST',
        data
    })
}