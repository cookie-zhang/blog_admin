<template>
  <div class="words-box">
    <el-input type="textarea" class="inp" v-model="words"></el-input>
    <el-button type="primary" class="btn" @click="submitForm">立即创建</el-button>
  </div>
</template>

<script>
import { createclassification } from "@/api/admin/words";
export default {
  data() {
    return {
      words: null
    };
  },
  computed: {},
  methods: {
    submitForm() {
      createEverydayWords({words: this.words}).then(res => {
        console.log(res);
      }).catch(error => {});
    },
  }
};
</script>

<style lang="scss" scoped>
.words-box{
  padding: 30px 50px;
  .inp{
    width: 400px;
  }
  .btn{
    margin: 9px
  }
}
</style>
