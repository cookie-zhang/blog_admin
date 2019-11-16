<template>
  <div class="dashboard-editor-container">
    <div class=" clearfix">
      <pan-thumb  style="float: left">
        weclome to:
        <span class="pan-info-roles">My blog</span>
      </pan-thumb>
      <github-corner style="position: absolute; top: 0px; border: 0; right: 0;" />
      <div class="info-container">
        <span class="display_name">Blog Admin</span>
        <span style="font-size:20px;padding-top:20px;display:inline-block;">cookie-zhang</span>
      </div>
    </div>
    <div>
      <img :src="emptyGif" class="emptyGif">
    </div>
  </div>
</template>

<script>
import PanThumb from '@/components/PanThumb'
import GithubCorner from '@/components/GithubCorner'

export default {
  name: 'DashboardEditor',
  components: { PanThumb,GithubCorner },
  data() {
    return {
      emptyGif: 'https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3'
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
  
</style>
