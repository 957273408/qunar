<template>
  <div>
    <router-link to="/" tag="div" class="backicon" v-show="show">
      <i class="iconfont icon-2fanhui"></i>
    </router-link>
    <div class="headertop" :style="styleOpcity" v-show="!show">
      <router-link to="/" tag="div">
        <i class="iconfont icon-2fanhui"></i>
      </router-link>
      <div>景点详情</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailheader",
  data() {
    return {
      show: true,
      styleOpcity: {
        opacity: 0
      }
    };
  },
  methods: {
    hasshow() {
      let top = document.documentElement.scrollTop;
      if (top > 60) {
        this.show = false;
        let opacity = top / 100 > 1 ? 1 : top / 100;
        this.styleOpcity.opacity = opacity;
      } else {
        this.show = true;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.hasshow);
  },
  deactivated() {
    window.removeEventListener("scroll",this.hasshow);
  }
};
</script>

<style lang="less" scoped>
.backicon {
  position: absolute;
  top: 0.2rem;
  left: 0;
  width: 0.7rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0 50% 50% 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding-right: 0.2rem;
}
.headertop {
  position: fixed;
  top: 0;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  background-color: skyblue;
  padding: 0 0.3rem;
  text-align: center;
  i {
    position: absolute;
    left: 0.2rem;
  }
}
</style>
