<template>
  <div class="classDetail">
    <div class="main-titles">课程列表</div>
    <div class="classContent">
      <div class="topContent">
        <div class="classImg">
          <img :src="courseInfo.coverPicUrl" />
        </div>
        <div class="detail">
          <div class="title">{{courseInfo.courseName}}</div>
          <div class="commet">
            <span>评论:</span>
            <span></span>
            <span>({{courseInfo.evaluateAmount}}人评价)</span>
          </div>
        </div>
      </div>
      <div class="bar"></div>
      <el-tabs v-model="curTabName" @tab-click="tabClick">
        <el-tab-pane label="课程简介" name="intro">
          <Intro :data="intro" />
        </el-tab-pane>
        <el-tab-pane label="目录" name="list">
          <Catalog :data="directoryList" />
        </el-tab-pane>
        <el-tab-pane label="讨论区" name="discuss">
          <Discuss :data="discussList" />
        </el-tab-pane>
        <el-tab-pane label="笔记" name="note">
          <Note :data="noteList" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Catalog from './courseDetailComponents/catalog'
import Discuss from './courseDetailComponents/discuss'
import Intro from './courseDetailComponents/intro'
import Note from './courseDetailComponents/note'
import { getCollegeCourseStatus } from '@/api/admin/common'
import { getIntroduction, getDirectory, getDiscuss, getNote } from '@/api/admin/course'

export default {
  components: {
    Catalog, Discuss, Intro, Note
  },
  data() {
    return {
      curTabName: 'intro',
      courseInfo: {},
      intro: {},
      directoryList: [],
      noteList: [],
      discussList: []
    }
  },
  methods: {
    getIntroduction() {
      let postData = { courseId: this.$route.query.courseId }
      getIntroduction(postData).then(res => {
        if (res.meta.code === '200') {
          let data = res.data
          this.courseInfo = data
          let { lecturerName, cturerIntroduction, courseTypeStr, courseIntroduction, courseContent } = data
          this.intro = { lecturerName, cturerIntroduction, courseTypeStr, courseIntroduction, courseContent }
        }
      })
    },
    getDirectory() {
      let postData = { courseId: this.$route.query.courseId }
      getDirectory(postData).then(res => {
        if (res.meta.code === '200') {
          this.directoryList = res.data.rows
        }
      })
    },
    getDiscuss() {
      let postData = { courseId: this.$route.query.courseId }
      getDiscuss(postData).then(res => {
        if (res.meta.code === '200') {
          this.discussList = res.data.rows
        }
      })
    },
    getNote() {
      let postData = { courseId: this.$route.query.courseId }
      getNote(postData).then(res => {
        if (res.meta.code === '200') {
          this.noteList = res.data.rows
        }
      })
    },
    tabClick() {

    }
  },
  mounted() {
    this.getIntroduction()
    this.getDirectory()
    this.getDiscuss()
    this.getNote()
  }
}
</script>

<style lang="scss">
.classContent {
  padding: 15px 30px;
  .topContent {
    margin-bottom: 20px;
    overflow: hidden;
    .classImg {
      float: left;
      width: 677px;
      height: 358px;
      background-color: royalblue;
    }
    .detail {
      float: left;
      margin-left: 30px;
      .title {
        width: 212px;
        height: 37px;
        font-size: 26px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 37px;
      }
      .commet {
        margin-top: 10px;
        font-size: 16px;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 22px;
      }
    }
  }
  .bar {
    margin: 20px 0;
    width: 1030px;
    height: 20px;
    background: rgba(248, 248, 248, 1);
  }
  .el-tabs__item {
    height: 22px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(16, 16, 16, 1);
    line-height: 22px;
    margin-bottom: 10px;
  }
  .el-tabs__nav-wrap::after {
    height: 3px;
    background: rgba(235, 235, 235, 1);
  }
  .el-tabs__active-bar {
    height: 3px;
    background: rgba(13, 154, 233, 1);
    border-radius: 2px;
  }
}
</style>