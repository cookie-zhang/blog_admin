<template>
  <div class="detail-box">
    detail
  </div>
</template>

<script>
import moduleName from 'module'
export default {
  data() {
    return {
      dataInfo:{}
    };
  },
  methods:{
    getDetail(id){

    }
  },
  mounted(){
    let id = this.$ruter.query.courseId;
    this.getDetail(id)
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.detail-box {
  width: 100%
}
</style>