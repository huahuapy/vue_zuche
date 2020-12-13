<template>
  <div class="cars-wrap">
    <section class="car-item">
      <header>
        <h4 class="car-logo">
          <img src="../../assets/images/carlogos/ford.png" alt="">
          <span class="name">dagff</span>
        </h4>
        <p class="attr">mdsjjiaf</p>
      </header>
      <div class="car-content"></div>
      <footer></footer>
    </section>
    <span @click="gotoUser">123</span>
  </div>
</template>

<script>
export default {
  name: 'Cars',
  methods: {
    gotoUser(){
      this.$router.push({
        name: 'User'
      })
    }
  }
}
</script>

<style scoped>
.cars-wrap {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 94px;
  z-index: 11;
}
.car-item {
  width: 505px;
  height: 257px;
  margin: auto;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, .2);
}

.car-item header {
  display: flex;
}
.car-logo, .attr {
  flex: 1;
}

.car-logo img {
  display: inline-block;
  height: 34px;
  vertical-align: middle;
  margin-right: 10px;
}
.car-logo .name {
  font-size: 16px;
}
.attr {
  text-align: right;
  line-height: 34px;
  opacity: .5;
}
</style>
