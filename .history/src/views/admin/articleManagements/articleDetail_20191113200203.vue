<template>
  <div class="detail-box">
    <div class='detail-container'>
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

<style  lang="less">
  .detail-box {
    width: 100%
    .detail-container{

    }   
  }
</style>