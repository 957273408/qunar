<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(val,i) in getpage" :key="i">
      <div class="icons">
        <div class="icon-item" v-for="(item,i) in val" :key="i">
          <div class="item-img">
            <img :src="item.imgUrl" alt>
          </div>
          <p>{{item.desc}}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: "icons",
  props: ["list"],
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    getpage() {
      const onpag = [];
      this.list.forEach((val, i) => {
        const pages = Math.floor(i / 8);
        if (!onpag[pages]) {
          onpag[pages] = [];
        }
        onpag[pages].push(val);
      });
      return onpag;
    }
  }
};
</script>

<style lang="less" scoped>
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  // background: red;
  display: flex;
  flex-wrap: wrap;
  .icon-item {
    position: relative;
    overflow: hidden;
    height: 0;
    width: 25%;
    padding-bottom: 25%;
    // background-color: green;
    .item-img {
      position: absolute;
      top: 0;
      width: 100%;
      left: 0;
      right: 0;
      bottom: 0.41rem;
      text-align: center;
      padding: .2rem;
      box-sizing: border-box;
      img{
        margin-top: .05rem;
        width: 70%;
      }
    }
    p {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
