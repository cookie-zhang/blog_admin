<template>
  <div class="note">
    <div class="nodeItem" v-for="(item,index) in data" :key="index">
      <div class="title">{{item.courseNoteTitle}}</div>
      <div class="nodeDetail">{{item.courseNoteContent}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    }
  }
}

</script>
<style lang="scss" scoped>
.nodeItem {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f5f5f5;
  .title {
    margin-bottom: 10px;
    height: 22px;
    font-size: 16px;
    font-weight: 400;
    color: rgba(10, 10, 10, 1);
    line-height: 22px;
  }
  .nodeDetail {
    margin-bottom: 10px;
    height: 20px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 20px;
  }
}
</style>