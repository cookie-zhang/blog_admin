<template>
  <div class="detail-box">
    <div detail-></div>
    <div v-html="dataInfo.content"></div>
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

<style rel="stylesheet/scss" lang="scss">
.detail-box {
  width: 100%
}
</style>