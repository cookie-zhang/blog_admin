<template>
  <div class="words-box">
      <el-form-item label="每日一语" prop="words">
        <el-input type="textarea" v-model="ruleForm.words"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">立即创建</el-button>
      </el-form-item>
   
  </div>
</template>

<script>
import { createwords } from "@/api/admin/words";
export default {
  data() {
    return {
        words: null
    };
  },
  computed: {},
  methods: {
    submitForm() {
      createwords(this.ruleForm).then(res => {
        console.log(res);
      }).catch(error => {});
    },
  }
};
</script>

<style lang="scss" scoped>
</style>
