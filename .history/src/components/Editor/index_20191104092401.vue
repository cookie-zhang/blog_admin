<template>
  <div class="editor">
    <div class="content" ref="curEditor" :style="`width:${width}px`"></div>
    <span class="num" v-if="maxLen" :class="{red:curLen > 480}">{{curLen}}/{{maxLen}}</span>
  </div>
</template>

<script>
import E from 'wangeditor'
export default {
  model: {
    prop: 'htmlContent'
  },
  props: {
    htmlContent: {
      type: String
    },
    maxLen: {
      type: Number
    },
    width: {
      type: Number
    }
  },
  data() {
    return {
      curLen: 0,
      watchFlag: true
    }
  },
  methods: {
    initEditer() {
      let curEditor = this.$refs.curEditor
      this.editor = new E(curEditor)
      // emit事件
      this.editor.customConfig.onchange = (html) => {
        let text = this.editor.txt.text()
        this.curLen = Math.min(text.length, this.maxLen)
        if (text.length >= 500) {
          this.lastHtml = this.lastHtml
        } else {
          this.lastHtml = html
        }
        this.editor.txt.html(this.lastHtml)
        this.$emit('input', html)
      }
      this.editor.customConfig.zIndex = 2
      this.editor.customConfig.onchangeTimeout = 2
      this.editor.create()
    }
  },
  watch: {
    // 监听是因为prop:'htmlContent'是ajax异步获取的,不监听首次无法回显
    'htmlContent': {
      handler(content) {
        if (this.editor && this.watchFlag) {
          this.editor.txt.html(content)
          this.curLen = Math.min(this.editor.txt.text().length,this.maxLen)
          // 去掉watch监听,是因为在做长度限制时会和editer的onchange事件监听冲突
          this.watchFlag = false
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.initEditer()
    this.editor.txt.html(this.htmlContent)
  }
}
</script>

<style lang="scss" scoped>
.num {
  position: absolute;
  margin-top: -30px;
  margin-left: 10px;
  color: #333;
  &.red{
    color:red;
  }
}
</style>


