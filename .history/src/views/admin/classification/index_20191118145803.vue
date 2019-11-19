<template>
  <div class="container container-score" style="padding: 0;">
    <div class="main-titles">分类管理</div>
    <div class="createBox" style="float:right; margin:20px">
        <el-button @click="createClass" type="warning">新增分类</el-button>
      </div>
    <div class="tables-box">
        <el-table
          :data="tableList"
          stripe
          border
          style="width: 100%"
        >
          <el-table-column prop="id" label="ID" width="100">
            <template slot-scope="scope">
              <el-button
                @click="classDetail(scope.row.id)"
                type="text"
                size="small"
              >{{scope.row.id}}</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="type" label="内容"  width="500">
            <template
              slot-scope="scope"
            >{{scope.row.type?scope.row.type:'--'}}</template>
          </el-table-column>
          <el-table-column prop="createAt" label="创建时间">
            <template slot-scope="scope">{{scope.row.createAt || '--'}}</template>
          </el-table-column>
          <el-table-column prop="updateAt" label="创建时间">
            <template slot-scope="scope">{{scope.row.updateAt || '--'}}</template>
          </el-table-column>
          <el-table-column
            label="操作"
            fixed="right"
            width="200px"
          >
            <template slot-scope="scope">
                <el-button type="text" size="small" @click="deleteClass(scope.row.classId,scope.row.className)">删除</el-button>
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
    <el-dialog
				title="删除评论"
				:visible.sync="dialogDelete"
				width="30%"
				:before-close="handleDelete">
				<span class="labels-infor">确定删除这条评论吗？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="handleDelete">取 消</el-button>
          <el-button type="primary" @click="confirmDelete">确 定</el-button>
        </span>
		</el-dialog>
  </div>
</template>

<script>
import { getclassificationList } from '@/api/admin/classification'
// import { getClassList, getOptionList, classDelete, examPaperOptionList, pushExamPaper } from '@/api/admin/classManage'
export default {
  data() {
    return {
      dialogExamination:false,
      dialogDelete:false,
      paperStyle:"",
      className:"",
      paperOption:[],
      pageTotal: 0,
      tableList: [],
      testPaperOption: [],
      queryParam: {
        queryStr: "",//输入框
        classType:"",
        page:{
          pageSize: 50,
          pageNo: 1
        }
      },
      deleteParam:{
        classId:""
      },
    }
  },
  mounted() {
     this.onloadList();
  },
  
  watch: {  HTML5 CSS CSS3 JavaScript Vue React Angular Mysql  Koa Eggjs Nodejs Type 
    
  },
  methods: {
    onloadList(){
      getclassificationList().then((res)=>{
          this.tableList = res.data
      })
    },
    createClass(){
      this.$router.push({
        path:'/admin/creatclassification'
      })
    },
    handleSizeChange(value) {
      this.queryParam.page.pageSize = value;
      this.queryParam.page.pageNo = 1;
      this.onloadList();
    },
    handleCurrentChange(value) {
      this.queryParam.page.pageNo = value;
      this.onloadList();
    },
    //打开删除弹窗
    deleteClass(ids,names){
      this.dialogDelete = true
      this.deleteParam.classId = ids
      this.className = names
    },
    //取消删除
    handleDelete(){
      this.dialogDelete = false
    },
    //确定删除
    confirmDelete(){
     classDelete(this.deleteParam).then((res)=>{
       if (res.meta.code === '200') {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.dialogDelete = false
          this.onloadList();
        }
     })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.container-score {
  padding-bottom: 20px !important;
}
.styleClass{
    width:56px;
    height:20px;
    font-size:14px;
    font-family:PingFangSC-Regular,PingFangSC;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:20px;
    margin:4px 0px 10px 20px;
}
.width170{
    width:170px;
    height:40px;
}
.width450{
    width:450px;
    height:40px;
}
.paperWidth{
    width:170px;
    margin-top:0px;
}
.topAlign{
    margin-top:20px;
}
.labels-infor{
   span{
    width:68px;
    display:inline-block;
   }
}
.w150ss{
   width:260px;
}
</style>
