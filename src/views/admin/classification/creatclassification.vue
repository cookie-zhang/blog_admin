<template>
  <div class="words-box">
    <el-input type="textarea" class="inp" v-model="type"></el-input>
    <el-button type="primary" class="btn" @click="submitForm">立即创建</el-button>
  </div>
</template>

<script>
import { createclassification } from "@/api/admin/classification";
export default {
  data() {
    return {
      type: null
    };
  },
  computed: {},
  methods: {
    submitForm() {
      createclassification({type: this.type}).then(res => {
        this.$router.push({
          type:'success',
          message:'创建成功!'
        })
        this.$router.push({
          path:'/admin/classification'
        })
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
