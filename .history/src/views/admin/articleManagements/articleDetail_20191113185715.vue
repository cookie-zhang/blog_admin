<template>
  <div class="detail-box">
    detail
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataInfo:{}
    };
  },
  methods:{
    getDetail(){

    }
  },
  mounted(){
    let id = this.$ruter.query
    this.getDetail()
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.detail-box {
  width: 100%
}
</style>