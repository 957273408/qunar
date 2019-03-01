<template>
  <div class="gallary" @click="gallaryClose">
    <div>
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(val,i) in gallarylist" :key="i">
          <img :src="val">
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "commonGallary",
  data() {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        observeParents: true,
        observer: true
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  props: {
    gallarylist: Array
  },
  methods: {
    gallaryClose() {
      this.swiper.slideTo(0);
      this.$emit("close");
    }
  }
};
</script>

<style lang="less" scoped>
.gallary > div {
  width: 100%;
}
.gallary {
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  z-index: 666;
  img {
    width: 100%;
  }
  .swiper-pagination {
    color: #fff;
    bottom: -1rem;
    //   width: 100%;
  }
}
.gallary /deep/ .swiper-container {
  overflow: initial;
}
</style>
