<template>
  <div class="container container-score noPadding">
    <div class="main-titles">班级详情</div>
    <div class='titleWord'>
      <span>班级编号:{{dataCollect.classNum}}</span>
      <span>班级:{{dataCollect.className}}</span>
      <span>班级人数:20人</span>
    </div>
    <div class="mesTable">
     <div class="leftWord">考试信息</div>
     <div class="tables-box">
        <el-table
          :data="dataCollect.examList"
          stripe
          border
          style="width: 100%"
        >
          <el-table-column prop="examPaperName" label="试卷名称" width="255">
            <template slot-scope="scope">
              <el-button
                @click="billDetails(scope.row.examPaperName)"
                type="text"
                size="small"
              >{{scope.row.examPaperName}}</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="examPaperType" label="考试类型">
            <template
              slot-scope="scope"
            >{{scope.row.examPaperType?scope.row.examPaperType:'--'}}</template>
          </el-table-column>
          <el-table-column prop="publishState" label="试卷类型">
            <template
              slot-scope="scope"
            >{{scope.row.publishState?scope.row.publishState:"--"}}</template>
          </el-table-column>
          <el-table-column prop="examCount" label="考试人数">
            <template slot-scope="scope">{{scope.row.examCount || '--'}}</template>
          </el-table-column>
          <el-table-column prop="lackExamCount" label="缺考人数">
            <template slot-scope="scope">
               <el-button
                @click="showLacktable"
                type="text"
                size="small"
              >{{scope.row.lackExamCount}}</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="notPassCount" label="未及格人数">
            <template slot-scope="scope">
            <el-button
                @click="showNoPassTable"
                type="text"
                size="small"
              >{{scope.row.notPassCount || '--'}}</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="pushTime" label="考试日期">
            <template slot-scope="scope">{{scope.row.pushTime?scope.row.pushTime.substring(0,10):'--'}}</template>
          </el-table-column>
        </el-table>
     </div>
    </div>
    <div class="mesTable">
     <div class="leftWord">学生信息</div>
     <div class="tables-box">
        <el-table
          :data="dataCollect.studentList"
          stripe
          border
          style="width: 100%"
        >
          <el-table-column prop="studentNum" label="学生编号" width="255">
            <template slot-scope="scope">
              <el-button
                @click="studentDetail(scope.row.studentNum)"
                type="text"
                size="small"
              >{{scope.row.studentNum}}</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="salesDepartmentName" label="营业部">
            <template
              slot-scope="scope"
            >{{scope.row.salesDepartmentName?scope.row.salesDepartmentName:'--'}}</template>
          </el-table-column>
          <el-table-column prop="professionalAreaName" label="区域">
            <template
              slot-scope="scope"
            >{{scope.row.professionalAreaName?scope.row.professionalAreaName:"--"}}</template>
          </el-table-column>
          <el-table-column prop="storeName" label="门店">
            <template slot-scope="scope">{{scope.row.storeName?scope.row.storeName:'--'}}</template>
          </el-table-column>
          <el-table-column prop="studentName" label="姓名">
            <template slot-scope="scope">{{scope.row.studentName?scope.row.studentName:'--'}}</template>
          </el-table-column>
        </el-table>
     </div>
    </div>
     <el-dialog
				title="缺考人名单"
				:visible.sync="dialogLack"
				width="70%"
				:before-close="handleLack">
		<el-table
          :data="dataCollect.studentList"
          stripe
          border
          style="width: 100%"
        >
          <el-table-column prop="salesDepartmentName" label="营业部">
            <template
              slot-scope="scope"
            >{{scope.row.salesDepartmentName?scope.row.salesDepartmentName:'--'}}</template>
          </el-table-column>
          <el-table-column prop="professionalAreaName" label="区域">
            <template
              slot-scope="scope"
            >{{scope.row.professionalAreaName?scope.row.professionalAreaName:"--"}}</template>
          </el-table-column>
          <el-table-column prop="storeName" label="门店">
            <template slot-scope="scope">{{scope.row.storeName?scope.row.storeName:'--'}}</template>
          </el-table-column>
          <el-table-column prop="studentName" label="姓名">
            <template slot-scope="scope">{{scope.row.studentName?scope.row.studentName:'--'}}</template>
          </el-table-column>
        </el-table>
		</el-dialog>
    <el-dialog
				title="未及格人名单"
				:visible.sync="dialogNoPass"
				width="70%"
				:before-close="handleNoPass">
		<el-table
          :data="dataCollect.studentList"
          stripe
          border
          style="width: 100%"
        >
          <el-table-column prop="salesDepartmentName" label="营业部">
            <template
              slot-scope="scope"
            >{{scope.row.salesDepartmentName?scope.row.salesDepartmentName:'--'}}</template>
          </el-table-column>
          <el-table-column prop="professionalAreaName" label="区域">
            <template
              slot-scope="scope"
            >{{scope.row.professionalAreaName?scope.row.professionalAreaName:"--"}}</template>
          </el-table-column>
          <el-table-column prop="storeName" label="门店">
            <template slot-scope="scope">{{scope.row.storeName?scope.row.storeName:'--'}}</template>
          </el-table-column>
          <el-table-column prop="studentName" label="姓名">
            <template slot-scope="scope">{{scope.row.studentName?scope.row.studentName:'--'}}</template>
          </el-table-column>
          <el-table-column prop="studentName" label="学生编号">
            <template slot-scope="scope">{{scope.row.studentName?scope.row.studentName:'--'}}</template>
          </el-table-column>
        </el-table>
		</el-dialog>
  </div>
</template>

<script>
import { classGetInfoVO } from '@/api/admin/classManage'
export default{
    data(){
        return{
           classId:"",
           tableList:[],
           dialogLack:false,
           dialogNoPass:false,
           tableLists:[
             {id:'111',purchaseAmount:'222',purchaseTime:'333',creatorName:'444',creatorNames:'555'},
             {id:'111',purchaseAmount:'222',purchaseTime:'333',creatorName:'444',creatorNames:'555'}
           ],
           dataCollect:{
             classNum:"",
             className:"",
             examList:[],
             studentList:[],
          },
          getDataParam:{
             classId:""
          }
        }
    },
    mounted() {
      this.getData()
    },
    created() {

    },
    watch: {
    
    },
    methods: {
      studentDetail(ids){
         this.$router.push({
          name:"studentMes",
          path:{
            id:ids,
          }
        })
      },
      getData(){
        this.getDataParam.classId = this.$route.query.id
        classGetInfoVO(this.getDataParam).then((res)=>{
          if(res.meta.code === '200') {
              this.dataCollect = res.data
          }
        })
      },
      showLacktable(){
        this.dialogLack = true
      },
      handleLack(){
        this.dialogLack = false
      },
      showNoPassTable(){
        this.dialogNoPass = true
      },
      handleNoPass(){
        this.dialogNoPass = false
      }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss">
 .container-score {
    padding-bottom: 20px !important;
 }
 .titleWord{
    text-indent: 20px;
    margin:20px 0 30px 0;
    span{
        width:70px;
        height:20px;
        font-size:14px;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(16,16,16,1);
        line-height:20px;
        margin-right:80px;
    }
 }
 .leftWord{
    width:100px;
    height:22px;
    font-size:16px;
    font-family:PingFangSC-Medium,PingFangSC;
    font-weight:500;
    color:rgba(16,16,16,1);
    line-height:22px;
    text-indent: 20px;
 }
 .mesTable{
     margin-bottom:30px;
 }
</style>