<template>
  <div class="words-box">
        <el-input type="textarea" v-model="words"></el-input>
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
      createwords({words: this.words}).then(res => {
        console.log(res);
      }).catch(error => {});
    },
  }
};
</script>

<style lang="scss" scoped>
</style>
