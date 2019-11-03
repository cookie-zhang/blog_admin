<template>
  <div class="intro">
    <div class="name">讲师:{{data.lecturerName}}</div>
    <div class="teacherIntro">讲师介绍:{{data.lecturerIntroduction}}</div>
    <div class="classType">课程类别:{{data.courseTypeStr}}</div>
    <div class="introTitle">课程介绍</div>
    <div>{{data.courseIntroduction}}</div>
    <div class="introTitle">课程内容</div>
    <div class="content">{{data.courseContent}}</div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.intro {
  .name,
  .teacherIntro,
  .classType,
  .introTitle,
  .content {
    margin-bottom: 8px;
    height: 20px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 20px;
  }
  .introTitle {
    margin-top: 10px;
    height: 22px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(16, 16, 16, 1);
    line-height: 22px;
  }
}
</style>