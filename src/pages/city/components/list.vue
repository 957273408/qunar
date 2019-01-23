<template>
  <div class="list" ref="wrapper">
    <div>
        <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="item-list">
        <div class="item">北京</div>
        <div class="item">北京</div>
        <div class="item">北京</div>
        <div class="item">北京</div>
        <div class="item">北京</div>
        <div class="item">北京</div>
        <div class="item">北京</div>
        <div class="item">北京</div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="item-list">
        <div class="item">武汉</div>
        <div class="item">武汉</div>
        <div class="item">武汉</div>
        <div class="item">武汉</div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="city-list">
        <div class="item border-bottom">aerb</div>
        <div class="item border-bottom">aerb</div>
        <div class="item border-bottom">aerb</div>
        <div class="item border-bottom">aerb</div>
        <div class="item border-bottom">aerb</div>
        <div class="item border-bottom">aerb</div>
        <div class="item border-bottom">aerb</div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "citylist",
  mounted(){
      const wrapper=this.$refs.wrapper
      console.log(wrapper);
      const scroll = new BScroll(wrapper)
  },
};
</script>

<style lang='less' scoped>
.border-bottom {
  &::before {
    color: red;
  }
}
.list {
  position: absolute;
  top: 1.32rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.area {
  width: 100%;

  .title {
    height: 0.4rem;
    line-height: 0.4rem;
    text-align-last: left;
    padding-left: 0.2rem;
    background-color: #ccc;
  }
  .item-list {
    padding: 0.2rem;
    overflow: hidden;
    .item {
      float: left;
      border: 1px solid #ccc;
      width: 25%;
      height: 0.4rem;
      margin: 0.1rem;
      line-height: 0.4rem;
      border-radius: 0.1rem;
    }
  }
  .city-list {
    .item {
      width: 100%;
      height: 0.45rem;
      line-height: 0.45rem;
      text-align: left;
      padding-left: 0.3rem;
    }
  }
}
</style>
