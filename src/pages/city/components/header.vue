<template>
  <div class="header">
    <router-link tag="div" to="/">
      <div class="h_back">
        <i class="iconfont icon-2fanhui"></i>
      </div>
    </router-link>
    <div class="title">城市选择</div>
  </div>
</template>

<script>
export default {
  name: "cityheader"
};
</script>

<style lang='less' scoped>
.header {
  position: relative;
  width: 100%;
  height: 0.6rem;
  background-color: skyblue;

  .h_back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.61rem;
    height: 0.6rem;
    line-height: 0.6rem;
  }
  .title {
    flex: 1;
    line-height: 0.6rem;
  }
}
</style>
