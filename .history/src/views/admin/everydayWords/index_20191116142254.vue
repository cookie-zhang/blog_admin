<template>
  <div class="words-box">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="每日一语" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      words:null,
       ruleForm: {
          desc: ''
        },
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
  
</style>
