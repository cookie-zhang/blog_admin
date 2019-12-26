<template>
  <div class="createClass">
    <div class="main-titles">新建文章</div>
    <div class="form-box">
      <el-form ref="form" :model="articleInfo" label-width="80px">
        <el-form-item label="文章分类">
          <!-- <el-button @click="choosearticle">选择文章分类</el-button><br/>
          <el-input v-model="subType" style=" width:100px;float:left; margin-top:10px" disabled="disabled"></el-input>-->
          <el-select v-model="articleInfo.sort" placeholder="请选择">
            <el-option
              v-for="item in sortOptions"
              :key="item.id"
              :label="item.type"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章类型">
          <el-select v-model="articleInfo.type" placeholder="文章类型">
            <el-option
              v-for="(articleType,index) in articleTypeOptions"
              :key="index"
              :label="articleType.name"
              :value="articleType.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章封面">
          <el-input v-model="articleInfo.coverImg" placeholder="请输入文章封面"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="articleInfo.author" placeholder="请输入作者"></el-input>
        </el-form-item>
        <el-form-item label="文章标题">
          <el-input v-model="articleInfo.title" placeholder="请输入文章标题"></el-input>
        </el-form-item>
        <el-form-item label="文章介绍">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            v-model="articleInfo.introduce"
            placeholder="最多输入50个字"
          ></el-input>
        </el-form-item>
        <el-form-item label="文章内容">
          <div style="width:800px; height:400px">
            <div class="editor" style=" width: 100%; overflow: hidden;">
              <div ref="editor" style=" text-align:left; position:relative; z-index: 0;"></div>
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button>取消</el-button>
          <el-button type="primary" @click="handleSubmit">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {
  createArticle,
  articleDetail,
  updatearticle
} from '@/api/admin/article'
import { getclassificationList } from '@/api/admin/classification'
import E from 'wangeditor'
export default {
  data() {
    return {
      articleTypeOptions: [
        { name: '图文', value: '1' },
        { name: '视频', value: '2' }
      ],
      articleInfo: {
        id: '',
        sort: '', // 文章分类
        sortName: "",
        isOriginal: 1,
        type: "", // 文章类型
        typeName: "", // 文章类型
        coverImg: "", // 文章封面
        author: "", // 文章作者
        title: "", // 文章标题
        introduce: "", // 文章介绍
        content: "", // 文章内容
        like: 0,
        looks: 0,
        createDate: 0,
        updateDate: 0
      },
      curarticleType: "",
      sortOptions: [],
      defaultProps: {
        children: "rows",
        label: "columnName"
      },
      typeDialogVisible: false,
      subType: "Vue",
      id: this.$route.query.id
    };
  },
  watch: {
    "articleInfo.sort": {
      handler(val) {
        this.sortOptions.forEach((item, index) => {
          if (val == item.id) {
            this.articleInfo.sortName = item.type;
          }
        });
      },
      deep: true
    },
    "articleInfo.type": {
      handler(val) {
        this.sortOptions.forEach((item, index) => {
          if (val == 1) {
            this.articleInfo.typeName = "图文";
          } else {
            this.articleInfo.typeName = "视频";
          }
        });
      },
      deep: true
    }
  },
  methods: {
    // 文章分类
    getclassificationList() {
      getclassificationList().then(res => {
        this.sortOptions = res.data;
      });
    },
    getDetail(id) {
      articleDetail(id).then(res => {
        this.articleInfo = res.data;
        this.editor.txt.html(res.data.content);
      });
    },
    // 富文本
    editorMethods() {
      this.editor = new E(this.$refs.editor);
      this.editor.customConfig.onchange = html => {
        this.articleInfo.content = html;
      };
      this.editor.customConfig.menus = [
        "head", // 标题
        "bold", // 粗体
        "fontSize", // 字号
        "fontName", // 字体
        "italic", // 斜体
        "underline", // 下划线
        "strikeThrough", // 删除线
        "foreColor", // 文字颜色
        "backColor", // 背景颜色S
        "link", // 插入链接
        "list", // 列表
        "justify", // 对齐方式
        "quote", // 引用
        "emoticon", // 表情
        "image", // 插入图片
        "table", // 表格
        "video", // 插入视频
        "code", // 插入代码
        "undo", // 撤销
        "redo" // 重复
      ];
      this.editor.customConfig.uploadImgServer = this.uploadUrl; //上传URL
      this.editor.customConfig.uploadImgMaxSize = 10 * 1024 * 1024;
      this.editor.customConfig.uploadFileName = "myFileName";
      this.editor.customConfig.uploadImgHooks = {
        customInsert: function(insertImg, result, editor) {}
      };
      this.editor.create();
    },
    choosearticle() {
      this.typeDialogVisible = true;
    },
    addChapter() {
      this.articleInfo.collegeChapterList.push({
        chapterName: "",
        collegeClassHourList: []
      });
    },
    handleSubmit() {
      if (this.id) {
        this.articleInfo.isOriginal = 1;
        this.articleInfo.updateDate = new Date().getTime();
        updatearticle(this.articleInfo).then(res => {
          this.$message({
            type: "success",
            message: "更新成功"
          });
          this.$router.push({
            path: "/admin/articleManagements"
          });
        });
      } else {
        this.articleInfo.createDate = new Date().getTime();
        createArticle(this.articleInfo).then(res => {
          this.$message({
            type: "success",
            message: "创建成功"
          });
          this.$router.push({
            path: "/admin/articleManagements"
          });
        });
      }
    },
    handleAvatarSuccess() {},
    beforeAvatarUpload() {}
  },
  mounted() {
    this.getclassificationList();
    this.editorMethods();
    if (this.id) {
      this.getDetail(this.id);
    }
  }
};
</script>

<style lang="scss">
.createClass {
  .form-box {
    width: 660px;
    padding: 30px 60px;
    .el-form-item__label {
      font-weight: 500;
    }
    .videoChapter {
      width: 960px;
      color: rgba(102, 102, 102, 1);
      .item {
        margin-top: 20px;
        border: 1px solid rgba(235, 238, 245, 1);
      }
      .topArea {
        display: flex;
        padding: 10px 35px;
        background: rgba(244, 247, 250, 1);
        .el-input__inner {
          margin-left: 20px;
          margin-right: 45px;
          width: 628px;
        }
        .delBtn {
          width: 30px;
          height: 30px;
          background: url("./img/del.png") no-repeat center;
          background-size: 70%;
          margin-right: 20px;
          cursor: pointer;
        }
      }
      .chapterContent {
        padding: 15px 30px;
        display: flex;
        border-bottom: 1px solid rgba(235, 238, 245, 1);
        &:nth-last-of-type(1) {
          border: none;
        }
        .avatar {
          margin-right: 80px;
        }
        .name {
          margin-right: 20px;
        }
        .nameInput {
          width: 268px;
          margin-right: 20px;
          border-radius: 3px;
        }
        .delBtn {
          margin-left: 220px;
          width: 30px;
          height: 30px;
          background: url("./img/del.png") no-repeat center;
          background-size: 70%;
          margin-right: 20px;
          cursor: pointer;
        }
      }
    }
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-textarea__inner {
    height: 190px;
  }
}
</style>