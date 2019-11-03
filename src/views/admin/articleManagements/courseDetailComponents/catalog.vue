<template>
  <div class="catalog">
    <div class="cataList" v-for="(item,index) in data" :key="index">
      <div class="title">{{item.chapterName}}</div>
      <ul class="classlist">
        <li class="classItem" 
          v-for="(hour,index) in item.hourList"
          :key="index"
          @click="videoPlay">{{hour.classHourName}}</li>
      </ul>
    </div>
    <div class="videoPrew" v-show="videoVisible" @click="closePrew">
      <div class="videoBox">
        <div id="vPrew"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Player from 'xgplayer'

export default {
  props: {
    data: {
      type: Array
    }
  },
  data() {
    return {
      videoVisible: false
    }
  },
  methods: {
    videoPlay() {
      this.initVideo()
      this.videoVisible = true
    },
    closePrew(e) {
      if (e.target.className === 'videoPrew') {
        this.player.destroy()
        this.videoVisible = false
      }
    },
    initVideo() {
      this.player = new Player({
        id: 'vPrew',
        url: 'http://h5player.bytedance.com/video/mp4/xgplayer-demo-720p.mp4'
      })
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.title {
  height: 22px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(16, 16, 16, 1);
  line-height: 22px;
}
.classlist {
  margin-bottom: 20px;
  .classItem {
    padding-left: 20px;
    margin-top: 15px;
    margin-left: 10px;
    height: 20px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(16, 16, 16, 1);
    line-height: 20px;
    background: url("./img/icon.png") no-repeat left center;
    background-size: 14px;
    cursor: pointer;
  }
}
.videoPrew {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;
  background-color: rgba(0, 0, 0, 0.8);
  .videoBox {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>