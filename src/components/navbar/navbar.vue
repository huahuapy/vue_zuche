<template>
  <div class="navbar">
    <ul>
      <li>
        <i class="icon icon-help"></i>
      </li>
      <li>
        <i class="icon icon-search"></i>
      </li>
      <li>
        <a href="#" class="select-car">选择车辆</a>
      </li>
      <li>
        <i class="icon icon-location"></i>
      </li>
      <li>
        <i class="icon icon-user"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 86px;
  z-index: 10;
  text-align: center;
}
.navbar li {
  display: inline-block;
  vertical-align: middle;
}
i[class^=icon]{
  display: inline-block;
  width: 44px;
  height: 44px;
  margin: 0 17px;
  border-radius: 50%;
  background-color: #34393f;
  background-repeat: no-repeat;
  background-size: contain;
}
i.icon-help {
  background-image: url('../../assets/images/icon/icon-help.png');
}
i.icon-search {
   background-image: url('../../assets/images/icon/icon-search.png');
}
i.icon-location {
   background-image: url('../../assets/images/icon/icon-location.png');
}
i.icon-user {
   background-image: url('../../assets/images/icon/icon-user.png');
}
.select-car {
  display: inline-block;
  width: 240px;
  height: 84px;
  margin: 0 17px;
  line-height: 84px;
  text-decoration: none;
  border-radius: 100px;
  text-align: center;
  font-size: 26px;
  font-weight: 300;
  color: #fff;
  background-color: #000;
}
</style>
