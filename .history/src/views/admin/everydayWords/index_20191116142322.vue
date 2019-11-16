<template>
  <div class="words-box">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="每日一语" prop="words">
    <el-input type="textarea" v-model="ruleForm.words"></el-input>
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
    
       ruleForm: {
          words: ''
        },
        rules: {
          words: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
  
</style>
