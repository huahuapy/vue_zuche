<template>
  <div>
    <!-- 汽车 -->
    <Cars/>
    <!-- 地图 -->
    <AMap/>
    <!-- 会员 -->
    <div class="children-wrap" :class="{'open':show}">
      <router-view/>
    </div>
    <!-- 导航 -->
    <NavBar/>
  </div>
</template>

<script>
import AMap from '../amap/AMap'
import Cars from '../cars/Cars'
import NavBar from '@c/navbar/navbar'
export default {
  name: 'Home',
  components: {
    AMap,
    Cars,
    NavBar
  },
  data() {
    return {
      show: false
    }
  },
  //会员必须当路由为home时才会弹出，要监听路由
  watch: {
    "$route": {
      handler(newVal){
        const routerName = newVal.name
        this.show = routerName === 'Home' ? true : false
      }
    }
  }
}
</script>

<style scoped>
.children-wrap {
  position: fixed;
  right: -600px;
  top: 0;
  bottom: 0;
  width: 410px;
  background-color: #34393f;
  transition: all .3s ease 0s;
  -moz-transition: all .3s ease 0s;
  -o-transition: all .3s ease 0s;
  -webkit-transition: all .3s ease 0s;
  -ms-transition: all .3s ease 0s;
}
.children-wrap.open {
  right: 0;
}
</style>
