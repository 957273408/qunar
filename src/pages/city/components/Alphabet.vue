<template>
  <div class="item-list">
    <div
      class="item"
      v-for="item in aplarr"
      :key="item"
      :ref="item"
      @click="getvalue($event)"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  name: "Alphabet",
  props: {
    alphcity: Object
  },
  data() {
    return {
      touch: false,
      firstop: 0,
      settime: null
    };
  },
  computed: {
    aplarr() {
      const aa = [];
      for (let i in this.alphcity) {
        aa.push(i);
      }
      return aa;
    }
  },
  updated() {
    this.firstop = this.$refs.A[0].offsetTop;
  },
  methods: {
    getvalue(e) {
      this.$emit("togo", e.target.innerText);
    },
    touchstart() {
      this.touch = true;
    },
    touchmove(e) {
      if (this.touch) {
        if (this.settime) {
          clearTimeout(this.settime);
        }
        this.settime = setTimeout(() => {
          const onh = this.$refs.A[0].offsetHeight;
          const index = Math.floor(
            (e.targetTouches[0].clientY - this.firstop) / onh
          );
          if (index >= 0 && index < this.aplarr.length) {
            this.$emit("togo", this.aplarr[index]);
          }
        }, 16);
      }
    },
    touchend() {
      this.touch = false;
    }
  }
};
</script>

<style lang="less" scoped>
.item-list {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    height: 0.4rem;
    line-height: 0.4rem;
    color: blue;
  }
}
</style>
