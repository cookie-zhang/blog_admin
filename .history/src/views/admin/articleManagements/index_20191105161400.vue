<template>
  <div class="courseList">
    <div class="main-titles">文章列表</div>
    <div class="search-box">
      <el-input
        class="ml20 fl width360"
        clearable
        v-model="queryParam.courseName"
        placeholder="请输入文章标题"
      ></el-input>
      <el-button class="ml20" type="primary" @click="doSearch">搜索</el-button>
    </div>
    <div class="select-box">
      <el-select class="ml20 w-120" clearable v-model="queryParam.state" placeholder="文章状态">
        <el-option
          v-for="item in courseStateOptions"
          :key="item.value"
          :label="item.name"
          clearable
          :value="item.value"
        ></el-option>
      </el-select>
      <el-row class="inline-block ml20">
        <el-button @click="clearParams">清空</el-button>
        <el-button type="primary" @click="doSearch">确定</el-button>
      </el-row>
      <div class="createBox">
        <el-button @click="createClass" type="warning">新建文章</el-button>
      </div>
    </div>
    <div class="tables-box">
      <el-table :data="articleList" stripe border>
        <el-table-column label="文章编号" width="120">
          <template slot-scope="scope">
            <el-button
              @click="lookDetail(scope.row.courseId)"
              type="text"
              size="small"
            >{{scope.row.courseId}}</el-button>
          </template>
        </el-table-column>
        <el-table-column label="文章名称">
          <template slot-scope="scope">{{scope.row.courseName}}</template>
        </el-table-column>
        <el-table-column label="作者">
          <template slot-scope="scope">{{scope.row.lecturerName}}</template>
        </el-table-column>
        <el-table-column label="收藏数" align="right">
          <template slot-scope="scope">{{scope.row.enshrineAmount}}</template>
        </el-table-column>
        <el-table-column label="点赞数" align="right">
          <template slot-scope="scope">{{scope.row.praiseAmount}}</template>
        </el-table-column>
        <el-table-column label="评价数" align="right">
          <template slot-scope="scope">{{scope.row.evaluateAmount}}</template>
        </el-table-column>
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <el-button @click="edit(scope.row.courseId)">编辑</el-button>
            <el-button @click="release(scope.row.courseId)">发布</el-button>
            <el-button @click="obtained(scope.row.courseId)">下架</el-button>
            <el-button @click="del(scope.row.courseId)" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pages">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[50,100,200,300,500]"
        :page-size="queryParam.page.pageSize"
        :current-page="queryParam.page.pageNo"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageTotal"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import {  articleList} from '@/api/admin/article'
import { getCourseList, delCourse, obtained,release } from '@/api/admin/course'
export default {
  data() {
    return {
      pageTotal: 0,
      courseList: [{ id: 123 }],
      queryParam: {
        courseName: '',
        state: '',
        page: {
          pageSize: 50,
          pageNo: 1
        }
      },
      articleList:[],
      courseStateOptions: []
    }
  },
  methods: {
    getCourseList() {
      let postData = this.queryParam
      getCourseList(postData).then(res => {
        if (res.meta.code === '200') {
          this.courseList = res.data.rows
          this.pageTotal = res.data.total
        }
      })
    },
    getArticleList() {
      articleList().then(res => {
        if (res.meta.code == 200) {
          this.articleList = res.data
        }
      })
    },
    doSearch() {
      this.queryParam.page.pageNo = 1
      this.getCourseList()
    },
    createClass() {
      this.$router.push({ path: '/admin/createArticle' })
    },
    lookDetail(courseId) {
      this.$router.push({
        path: '/admin/courseDetail',
        query: {
          courseId
        }
      })
    },
    edit(courseId) {

    },
    release(courseId) {
      let postData = { courseId }
      release(postData).then(res => {
        if (res.meta.code === '200') {
          this.getCourseList()
          this.$message({
            type: 'success',
            message: '发布成功'
          })
        }
      })
    },
    obtained(courseId) {
      this.$confirm('此操作将下架该课程, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let postData = { courseId }
        obtained(postData).then(res => {
          if (res.meta.code === '200') {
            this.getCourseList()
            this.$message({
              type: 'success',
              message: '下架成功'
            })
          }
        })
      })
    },
    del(courseId) {
      this.$confirm('此操作将永久删除该课程, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let postData = { courseId }
        delCourse(postData).then(res => {
          if (res.meta.code === '200') {
            this.getCourseList()
            this.$message({
              type: 'success',
              message: '删除成功'
            })
          }
        })
      })
    },
    handleSizeChange(value) {
      this.queryParam.page.pageSize = value
      this.queryParam.page.pageNo = 1
      this.getCourseList()
    },
    handleCurrentChange(value) {
      this.queryParam.page.pageNo = value
      this.getCourseList()
    },
    clearParams() {
      this.queryParam = {
        courseName: '',
        state: '',
        page: {
          pageSize: 50,
          pageNo: 1
        }
      }
      this.getCourseList()
    }
  },
  mounted() {
    this.getArticleList()
    // this.getCourseList()
  }
}
</script>

<style  lang="scss" scoped>
.courseList {
  .createBox {
    float: right;
    margin-right: 20px;
  }
}
</style>
