<template>
  <div>
    <div class="cityS">
      <input v-model="keyword" type="search" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="searchcl" v-show="hasDatashow">
      <ul>
        <li
          class="border-bottom"
          v-for="(item, index) in arr"
          :key="index"
          @click="changecity(item)"
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
  name: "citysearch",
  data() {
    return {
      keyword: null,
      keytime: null,
      arr: []
    };
  },
  props: {
    citylist: Object
  },
  computed: {
    hasDatashow() {
      return this.arr.length;
    }
  },
  watch: {
    keyword() {
      this.arr = [];
      if (this.keytime) {
        clearTimeout(this.keytime);
      }
      if (this.keyword) {
        this.keytime = setTimeout(() => {
          Object.keys(this.citylist).forEach(i => {
            this.citylist[i].forEach(value => {
              if (
                value.spell.indexOf(this.keyword) != -1 ||
                value.name.indexOf(this.keyword) != -1
              ) {
                this.arr.push(value.name);
              }
            });
          });
        }, 100);
      }
    }
  },
  mounted() {
    new BScroll(this.$refs["searchcl"]);
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

<style lang="less" scoped>
.cityS {
  width: 100%;
  height: 0.72rem;
  background-color: skyblue;
  padding: 0.1rem;
  box-sizing: border-box;
  input {
    width: 100%;
    padding: 0.15rem;
    height: 100%;
    line-height: 0.72rem;
    text-align: center;
    border-radius: 0.16rem;
  }
}
.search-content {
  position: absolute;
  top: 1.3rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.1);
  z-index: 2;
  li {
    line-height: 0.6rem;
    background-color: #fff;
    padding: 0 0.6rem;
    font-size: 16px;
    border-radius: 0.1rem;
    text-align-last: left;
  }
}
</style>
