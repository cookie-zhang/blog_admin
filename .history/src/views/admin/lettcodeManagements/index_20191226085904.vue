<template>
  <div class="courseList">
    <div class="main-titles">力扣专栏列表</div>
    <div class="select-box">
      <div class="createBox" style="marginBottom:20px">
        <el-button @click="createClass" type="warning">力扣新建</el-button>
      </div>
    </div>
    <div class="tables-box">
      <el-table :data="articleLists" stripe border>
        <el-table-column label="力扣ID" width="100">
          <template slot-scope="scope">
            <el-button
              @click="lookDetail(scope.row.id)"
              type="text"
              size="small"
            >{{scope.row.id}}</el-button>
          </template>
        </el-table-column>
        <el-table-column label="力扣标题">
          <template slot-scope="scope">{{scope.row.title}}</template>
        </el-table-column>
         <el-table-column label="力扣分类">
          <template slot-scope="scope">{{scope.row.sortName}}</template>
        </el-table-column>
        <el-table-column label="力扣类型">
          <template slot-scope="scope">{{scope.row.typeName}}</template>
        </el-table-column>
        <el-table-column label="作者">
          <template slot-scope="scope">{{scope.row.author}}</template>
        </el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="scope">{{scope.row.createDate?moment(scope.row.createDate).format('YYYY-MM-DD HH:mm:ss') : '--'}}</template>
        </el-table-column>
        <el-table-column label="更新时间">
          <template slot-scope="scope">{{scope.row.updateDate?moment(scope.row.updateDate).format('YYYY-MM-DD HH:mm:ss') : '--'}}</template>
        </el-table-column>
        <!-- <el-table-column label="收藏数" align="right">
          <template slot-scope="scope">{{scope.row.enshrineAmount}}</template>
        </el-table-column>
        <el-table-column label="点赞数" align="right">
          <template slot-scope="scope">{{scope.row.praiseAmount}}</template>
        </el-table-column>
        <el-table-column label="评价数" align="right">
          <template slot-scope="scope">{{scope.row.evaluateAmount}}</template>
        </el-table-column> -->
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <el-button @click="edit(scope.row.id)">编辑</el-button>
            <el-button @click="release(scope.row.id)">发布</el-button>
            <el-button @click="obtained(scope.row.id)">下架</el-button>
            <el-button @click="del(scope.row.id)" type="danger">删除</el-button>
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
import { lettcodeList, deleteLettcode} from '@/api/admin/lettcode'
// import { getCourseList, delCourse, obtained,release } from '@/api/admin/course'
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
      articleLists:[ ],
      courseStateOptions: []
    }
  },
  methods: {
    // getCourseList() {
    //   let postData = this.queryParam
    //   getCourseList(postData).then(res => {
    //     if (res.meta.code === '200') {
    //       this.courseList = res.data.rows
    //       this.pageTotal = res.data.total
    //     }
    //   })
    // },
    getLettcodeList() {
      lettcodeList().then(res => {
        this.articleLists = res.data
      })
    },
    createClass() {
      this.$router.push({ path: '/admin/createLettcode' })
    },
    lookDetail(id) {
      this.$router.push({
        path: '/admin/lettcodeDetail',
        query: {
          id
        }
      })
    },
    edit(id) {
      this.$router.push({
        path: '/admin/createLettcode',
        query: {
          id
        }
      })
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
    del(id) {
      this.$confirm('此操作将永久删除该专栏, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let postData = { id }
        deleteLettcode(postData).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.getLettcodeList()
        })
      })
    },
    handleSizeChange(value) {
      this.queryParam.page.pageSize = value
      this.queryParam.page.pageNo = 1
      this.getLettcodeList()
    },
    handleCurrentChange(value) {
      this.queryParam.page.pageNo = value
      this.getLettcodeList()
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
      this.getLettcodeList()
    }
  },
  mounted() {
    this.getLettcodeList()
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
