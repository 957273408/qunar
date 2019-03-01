<template>
  <div>
    <div class="banner" @click="handelshow">
      <img
        src="http://img1.qunarzz.com/sight/p0/1810/22/226c137568f18ac0a3.water.jpg_600x330_554b60a8.jpg"
        alt
      >
      <div class="bannertitle">
        <div>深圳欢乐谷(AAAAA景区)</div>
        <div class="bannernum">
          <span class="iconfont icon-tupian"></span>
          39
        </div>
      </div>
    </div>
    <gallary
     v-show="showgallary" 
     :gallarylist="gallarylist"
     @close='handelclose'></gallary>
  </div>
</template>

<script>
import gallary from "@/common/gallary/gallary";
export default {
  name: "detailHeader",
  data() {
    return {
      showgallary: false,
      gallarylist: [
        "https://himg4.qunarzz.com/imgs/201807/13/C._M0DCiiPeD12Cz83i480.jpg",
        "https://himg1.qunarzz.com/imgs/201807/18/C._M0DCii4_z_YVLHYi480.jpg"
      ]
    };
  },
  components: {
    gallary
  },
  methods:{
      handelshow(){
          this.showgallary=true
      },
      handelclose(){
          this.showgallary=false
      }
  }
};
</script>

<style lang="less" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 4.1rem;
  img {
    width: 100%;
  }
  .bannertitle {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    height: 0.6rem;
    line-height: 0.6rem;
    background-image: linear-gradient(top, transparent, #000);
    padding: 0 0.4rem;
  }
}
</style>
