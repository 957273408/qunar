<template>
  <div class="swiperdiv">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(val,i) in list" :key="i">
        <img :src="val.imgUrl">
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "carrousel",
  props:["list"],
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          autoplay:true,
          
        }
      }
    };
  }
};
</script>

<style lang="less" scoped>
.swiperdiv /deep/ .swiper-pagination-bullet-active {
  background: #fff;
}
.swiperdiv {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 2.4rem;
  img {
    width: 100%;
  }
}
</style>

