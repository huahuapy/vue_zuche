<template>
  <div class="amap-wrap">
    <el-amap
      vid="amapContainer"
      :zoom="zoom"
      :events="events"
      class="amap-demo">
    </el-amap>
  </div>
</template>

<script>
import { AMapManager,lazyAMapApiLoaderInstance } from 'vue-amap'
export default {
  name: 'AMap',
  data() {
    return {
      map: null,
      zoom: 12,
      events: {
      }
    }
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map('amapContainer', {
        center: [116.360926,39.95068],
        zoom: this.zoom
      })
    })
  },
}
</script>

<style scoped>
.amap-wrap{
  height: 100vh;
}
</style>
