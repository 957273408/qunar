<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="item-list">
          <div class="item">{{city}}</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="item-list">
          <div
            class="item"
            v-for="val in hotcity"
            :key="val.id"
            @click="changecity(val.name)"
          >{{val.name}}</div>
        </div>
      </div>
      <div class="area" v-for="(item, index) in alphcity" :key="index" :ref="index">
        <div class="title border-topbottom">{{index}}</div>
        <div class="city-list">
          <div
            class="item border-bottom"
            v-for="val in item"
            :key="val.id"
            @click="changecity(val.name)"
          >{{val.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "citylist",
  mounted() {
    const wrapper = this.$refs.wrapper;
    this.scroll = new BScroll(wrapper);
  },
  computed: {
    ...mapState(["city"])
  },
  watch: {
    togo() {
      if (this.togo) {
        const val = this.$refs[this.togo][0];
        this.scroll.scrollToElement(val, 100);
      }
    }
  },
  props: {
    hotcity: Array,
    alphcity: Object,
    togo: String
  },
  methods: {
    changecity(city) {
      this.gocity(city);
      this.$router.push({ path: "/" });
    },
    ...mapMutations({ gocity: "changecity" })
  }
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
