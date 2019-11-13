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

<style  lang="scss" scoped>
  .detail-box {
    overflow: hidden;
    width: 100%;
    height: 100;
    .detail-container {
      width: 100%
    }
  }
</style>