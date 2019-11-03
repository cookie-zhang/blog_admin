<template>
  <div class="scrollTable" ref="scrollWrapper">
    <slot></slot>
    <div class="scrollController" v-show="flag">
      <el-slider
        v-model="curValue"
        :max="100"
        :format-tooltip="formatTooltip"
        :show-tooltip="false"
      ></el-slider>
    </div>
  </div>
</template>

<script>

export default {
  name:'scrollTable',
  data() {
    return {
      curValue: null, // 当前值
      moveLen: null, // 最大可移动距离
      flag: false // 是否显示
    }
  },
  methods: {
    // 完全模拟滚动条使用实时模式
    formatTooltip(val){
      this.curValue = val
      this.curValue && this.scrollTable(this.curValue) 
    },
    scrollTable(curValue) {
      let scrollLeft = (this.moveLen * parseInt(this.curValue, 10)) / 100
      this.scrollBox.scrollLeft = scrollLeft
    },
    initDom() {
      let scrollWrapper = this.$refs.scrollWrapper
      let ele = this.$slots.default[0].elm
      let scrollBox = ele.getElementsByClassName('el-table__body-wrapper')[0] // 滚动元素
      let longTable = ele.getElementsByClassName('el-table__header')[0] // 长表格元素
      if (scrollBox && longTable) {
        this.scrollBox = scrollBox
        let scrollBoxW = scrollBox.clientWidth
        let longTableW = longTable.clientWidth
        this.moveLen = longTableW - scrollBoxW
        if (this.moveLen > 0) {
          this.show()
        } else {
          this.hide()
        }
      }
    },
    initResize() {
      window.addEventListener('resize', () => {
        this.initDom()
      })
    },
    hide(){
      this.flag = false
    },
    show(){
      this.flag = true
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initDom()
      this.initResize()
    })
  }
}
</script>

<style lang="scss">
.scrollTable {
  .scrollController {
    position: fixed;
    z-index: 1001;
    left: 70%;
    bottom: 0px;
    width: 200px;
    .el-slider__runway {
      width: 100%;
      height: 16px;
      margin: 10px 0;
      background-color: #fff;
      box-shadow: inset 0 0 8px #c8c8c8; /*轨道内置阴影效果*/
      border-radius: 8px;
      .el-slider__bar {
        height: 16px;
        background-color: #409eff;
        border-radius: 8px;
        position: absolute;
      }
      .el-slider__button {
        width: 18px;
        height: 18px;
        position: relative;
        top: 5px;
         box-shadow: 0 0 6px #409eff;
      }
    }
  }
}
</style>



