<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont icon-2fanhui"></i>
    </div>
    <div class="header-input">
      <i class="iconfont icon-sousuo"></i>
      <input type="search" placeholder="清输入想搜索的内容">
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <i class="iconfont icon-xiala"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState}from 'vuex'
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed:{
    ...mapState(['city'])
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.header {
  width: 100%;
  height: 0.86rem;
  background: #00bcd8;
  color: #fff;
  display: flex;
  justify-content: space-between;
  .header-left {
    margin-left: 0.2rem;
    width: 0.45rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-input {
    flex: 1;
    border-radius: 0.1rem;
    margin: 0.2rem 0.1rem;
    background-color: #fff;
    position: relative;
    text-align: left;
    display: flex;
    overflow: hidden;
    i {
      color: #ccc;
      position: absolute;
      top: 50%;
      left: 5%;
      transform: translate(-50%, -50%);
    }
    input {
      text-align: left;
      margin-left: 0.8rem;
      flex: 1;
    }
  }
  .header-right {
    line-height: 0.86rem;
    font-size: 0.3rem;
    color: #fff;
  }
}
</style>
