<template>
  <div class="selectTable">
    <div class="selectBox">
      <el-switch
        v-for
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array
    },
    defaultNum: {
      type: Number
    }
  },


}
</script>


<style lang="scss" scoped>
</style>

