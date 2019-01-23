<template>
  <div class="swiperdiv">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(val,i) in list" :key="i">
        <img :src="val.url">
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
      // list: [
      //   {
      //     id: new Date(),
      //     url:
      //       "//img.alicdn.com/tps/i4/TB14ZyQCwHqK1RjSZFkSut.WFXa.jpg_q90_.webp"
      //   },
      //   {
      //     id: new Date(),
      //     url:
      //       "https://img.alicdn.com/simba/img/TB1tvNyC9zqK1RjSZFLSuwn2XXa.jpg"
      //   },
      //   {
      //     id: new Date(),
      //     url:
      //       "https://img.alicdn.com/simba/img/TB1gQswzRLoK1RjSZFuSutn0XXa.jpg"
      //   },
      //   {
      //     id: new Date(),
      //     url:
      //       "//img.alicdn.com/tps/i4/TB1diKiCPDpK1RjSZFrSuu78VXa.jpg_q90_.webp"
      //   }
      // ],
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
  padding-bottom: 4rem;
  img {
    width: 100%;
  }
}
</style>

