<template>
  <div class="container container-score noPadding">
    <div class="main-titles">创建班级</div>
    <div>
     <div class="textLine"><span class="textLeft">班级</span>
        <el-input v-model="classic1" placeholder="请输入班级" class="rightInput" clearable/>
     </div>
     <div class="textLine"><span class="textLeft">班级类型</span>
        <el-select
            class="width170"
            clearable
            v-model="classic2"
            placeholder="请选择班级类型"
        >
        <el-option
          v-for="item in testPaperOption"
          :key="item.columnId"
          :label="item.columnName"
          clearable
          :value="item.columnId"
        ></el-option>
      </el-select>
     </div>
     <div class="textLine"><span class="textLeft">添加学生</span>
        <el-button type="primary" @click="addStudent">添加学生</el-button>
     </div>
     <div class="tabler">
        <div>共计10名同学</div>
        <div class="tables-box">
        <el-table
          :data="tableLists"
          stripe
          border
          style="width: 100%"
        >
          <el-table-column prop="id" label="学生编号" width="255">
            <template slot-scope="scope">
              <el-button
                @click="billDetails(scope.row.id)"
                type="text"
                size="small"
              >{{scope.row.id}}</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="purchaseAmount" label="营业部">
            <template
              slot-scope="scope"
            >{{scope.row.purchaseAmount?handleMoney(scope.row.purchaseAmount):'--'}}</template>
          </el-table-column>
          <el-table-column prop="purchaseTime" label="区域">
            <template
              slot-scope="scope"
            >{{scope.row.purchaseTime?scope.row.purchaseTime.substring(0,10):"--"}}</template>
          </el-table-column>
          <el-table-column prop="creatorName" label="门店">
            <template slot-scope="scope">{{scope.row.creatorName || '--'}}</template>
          </el-table-column>
          <el-table-column prop="creatorName" label="姓名">
            <template slot-scope="scope">{{scope.row.creatorName || '--'}}</template>
          </el-table-column>
          <el-table-column
            label="操作"
            fixed="right"
            width="200px"
          >
            <template slot-scope="scope">
                <el-button type="text" size="small" @click="close(scope.row.id)">删除</el-button>
            </template>
        </el-table-column>
        </el-table>
     </div>
    </div>
    </div>
     <el-dialog
				title="添加学生"
				:visible.sync="contractVisible"
				width="80%"
				:before-close="handleClose">
			<div class="widthClass">
        <div class="className">姓名</div>
				<el-input class="width360 ml20" clearable v-model="classParams" placeholder="请输入姓名"></el-input>
				<el-row class="lineBlock">
					<el-button type="primary" @click="toFilterClassList">搜索</el-button>
				</el-row>
			</div>
      <div class="widthClass">
      	<span class="className"><span>组织机构</span></span>
				<el-select class="ml20 w150s" @change="changeSelect" clearable v-model="paperStyle" placeholder="请选择考试试卷">
					<el-option
							v-for="item in paperOption"
							:key="item.value"
							:label="item.label"
							:value="item.value">
					</el-option>
				</el-select>    				
				<el-row class="ml2">
          <el-button type="primary" @click="toClear">清空</el-button>
					<el-button type="primary" @click="toSure">确定</el-button>
				</el-row>
			</div>
			<!--表格-->
			<div class="tables-box" id="myRadio">
				<el-table
						:data="classList"
						ref="multipleTable"
						stripe
						border
						style="width: 100%"
						>
					<el-table-column
							prop="houseInfoId"
							width="80"
							label="选择"
					>
					<template slot-scope="scope">
              <el-radio  :label="scope.$index" v-model="radio" @change="changeRadio(scope.$index,scope.row)"></el-radio>
					</template>
					</el-table-column>
					<el-table-column
							prop="billId"
							label="营业部"
					>
					<template slot-scope="scope">
								{{scope.row.billId==""?"—-":scope.row.billId}}
							</template>
					</el-table-column>
					<el-table-column min-width="100" prop="oldAccountCode" label="区域">
            <template slot-scope="scope">{{scope.row.oldAccountCode || '--'}}</template>
          </el-table-column>
          <el-table-column min-width="100" prop="oldAccountCode" label="门店">
            <template slot-scope="scope">{{scope.row.oldAccountCode || '--'}}</template>
          </el-table-column>
          <el-table-column min-width="100" prop="oldAccountCode" label="姓名">
            <template slot-scope="scope">{{scope.row.oldAccountCode || '--'}}</template>
          </el-table-column>
          <el-table-column min-width="100" prop="oldAccountCode" label="登录名">
            <template slot-scope="scope">{{scope.row.oldAccountCode || '--'}}</template>
          </el-table-column>
				</el-table>
			</div>
			<div class="pages litle-page">
				<el-pagination
						@size-change="lookHandleSizeChange"
						@current-change="lookHandleCurrentChange"
						:page-sizes="[10,20,30,40,50]"
						:page-size="lookPageSize"
						layout="total, sizes, prev, pager, next, jumper"
						:total="lookPageTotal">
				</el-pagination>
			</div>
			  <span slot="footer" class="dialog-footer">
				<el-button @click="contractVisible = false">取 消</el-button>
				<el-button type="primary" @click="toTakeLook(selectRow)">确 定</el-button>
			  </span>
		</el-dialog>
		<!--保存-->
		<!--<div class="save-box">
			<el-row>
				<el-button @click="goBack">取消</el-button>
				<el-button type="primary" @click="saveAll">确定</el-button>
			</el-row>
		</div>-->
    </div>
  </div>
</template>

<script>
import { getOptionList } from '@/api/admin/classManage'
export default{
    data(){
        return{
           classic1:"",
           classic2:"",
           classParams:"",
           lookPageTotal:"",
           mainOfficeCode:"",
           paperStyle:"",
           paperOption:[],
           testPaperOption:[],
           tableLists:[],
           classList:[],
           contractVisible:false,
           classTypeParam:{
            page:{
                pageNo:1,
                pageSize:50
            },
            columnLevel:"2",
            sysFlag:"1",
            parentColumnId:""
          },
          sendParam:{
            className:"",
            classNum:"",
            classCode:"",
            classType:"",
            classTypeName:"",
            studentList:[]
          }
        }
    },
    
</script>

<style rel="stylesheet/scss" lang="scss">
 
</style>