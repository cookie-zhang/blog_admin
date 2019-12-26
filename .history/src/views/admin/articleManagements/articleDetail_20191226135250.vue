<template>
  <div class="detail-box">
    <div class='detail-container'>
      <div class="title">
        <h1>{{dataInfo.title}}</h1>
      </div>
      <div class="up-title">
        <span>作者：{{dataInfo.author}}</span>
        <span>创建时间：{{moment(Number(dataInfo.createDaTe)).format('YYYY-MM-DD HH:mm:ss') }}</span>
        <span>更新时间：{{moment(dataInfo.updateDaTe).format('YYYY-MM-DD HH:mm:ss') }}</span>
        <span>分类：{{dataInfo.sortName}}</span>
        <span>类型：{{dataInfo.type == 1 ? '图文':'视频'}}</span>
      </div>
      <div v-html="dataInfo.content"></div>
    </div>
  </div>
</template>

<script>
import { articleDetail } from '@/api/admin/article'
export default {
  data() {
    return {
      dataInfo:{}
    };
  },
  methods:{
    getDetail(id){
      articleDetail(id).then(res=>{
        this.dataInfo = res.data;
      })
    }
  },
  mounted(){
    let id = this.$route.query.id;
    console.log(id)
    this.getDetail(id)
  }
};
</script>

<style  lang="scss" scoped>
  .detail-box {
    overflow: hidden;
    width: 100%;
    height: 100%;
    .detail-container {
      padding: 20px;
      width: 80%;
      margin:  0 auto;
      background: #fff;
      .title{
        width: 100%;
        height: 50px;
        text-align: center;
      }
      .up-title{
        width: 100%;
        height: 50px;
        text-align: center;
        font-size: 16px;
        color: #555;
        span{
          margin: 0 10px;
        }
      }
    }
  }
</style>
<style>
  pre{
    padding: 10px;
    background:rgba(160, 154, 154, 0.3);
    border-radius: 10px;
    box-shadow: 0px 0px 6px 0px #666;
  }
</style>