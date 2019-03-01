<template>
  <div ref="wrapper">
    <div class="to">
      <home-header></home-header>
      <home-swiper :list="swiperlist"></home-swiper>
      <icons :list="iconslist"></icons>
      <recommend :list="recommendlist"></recommend>
      <weekend :list="weekendlist"></weekend>
    </div>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import Icons from "./components/icons";
import recommend from "./components/recommend";
import weekend from "./components/weekend";
import axios from "axios";
import { mapState } from "vuex";
import BScroll from "better-scroll";
export default {
  name: "home",
  components: {
    HomeHeader,
    HomeSwiper,
    Icons,
    recommend,
    weekend
  },
  data() {
    return {
      swiperlist: null,
      iconslist: [],
      recommendlist: null,
      weekendlist: null,
      lastCity: ""
    };
  },
  methods: {
    getjson() {
      axios.get("../../../static/index.json?city=" + this.city).then(result => {
        result = result.data;
        console.log(result);
        if (result.ret) {
          result = result.data;
          this.swiperlist = result.swiperList;
          this.iconslist = result.iconList;
          this.recommendlist = result.recommendList;
          this.weekendlist = result.weekendList;
        }
      });
    }
  },
  computed: {
    ...mapState(["city"])
  },
  mounted() {
    this.lastCity = this.city;
    this.getjson();
    const wrapper = this.$refs.wrapper;
    this.scroll = new BScroll(wrapper);
  },
  activated() {
    this.lastCity = this.city;
    this.getjson();
  },
  destroyed() {
    alert("111");
    window.removeEventListener("scroll");
  }
};
</script>

<style lang="less" scoped>
.to {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
