<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(val,i) in getpage" :key="i">
      <div class="icons">
        <div class="icon-item" v-for="(item,i) in val" :key="i">
          <img :src="item.url" alt>
          <p>热门</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: "icons",
  props:['list'],
  data() {
    return {
      // datalist: [
      //   {
      //     id: new Date(),
      //     url:
      //       "https://img.alicdn.com/tfs/TB10UHQaNjaK1RjSZKzXXXVwXXa-183-144.png?getAvatar=1_.webp"
      //   },
      //   {
      //     id: new Date(),
      //     url:
      //       "https://img.alicdn.com/tfs/TB10UHQaNjaK1RjSZKzXXXVwXXa-183-144.png?getAvatar=1_.webp"
      //   },
      //   {
      //     id: new Date(),
      //     url:
      //       "https://gw.alicdn.com/tps/TB1eXc7PFXXXXb4XpXXXXXXXXXX-183-144.png?getAvatar=1_.webp"
      //   },
      //   {
      //     id: new Date(),
      //     url:
      //       "https://gw.alicdn.com/tfs/TB1IKqDtpooBKNjSZFPXXXa2XXa-183-144.png_.webp"
      //   },
      //   {
      //     id: new Date(),
      //     url:
      //       "https://gw.alicdn.com/tfs/TB1ydXzhCzqK1RjSZPcXXbTepXa-183-144.png?getAvatar=1_.webp"
      //   },
      //   {
      //     id: new Date(),
      //     url:
      //       "https://gw.alicdn.com/tfs/TB1CMf4tlnTBKNjSZPfXXbf1XXa-183-144.png?getAvatar=1_.webp"
      //   },
      //   {
      //     id: new Date(),
      //     url:
      //       "https://gw.alicdn.com/tfs/TB18P98tyQnBKNjSZFmXXcApVXa-183-144.png?getAvatar=1_.webp"
      //   },
      //   {
      //     id: new Date(),
      //     url:
      //       "https://gw.alicdn.com/tfs/TB1o0FLtyMnBKNjSZFoXXbOSFXa-183-144.png_.webp"
      //   },
      //   {
      //     id: new Date(),
      //     url:
      //       "https://gw.alicdn.com/tfs/TB1o0FLtyMnBKNjSZFoXXbOSFXa-183-144.png_.webp"
      //   },
      //   {
      //     id: new Date(),
      //     url:
      //       "https://gw.alicdn.com/tfs/TB1o0FLtyMnBKNjSZFoXXbOSFXa-183-144.png_.webp"
      //   }
      // ],
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
    img {
      position: absolute;
      top: 0;
      width: 100%;
      left: 0;
      right: 0;
      bottom: 0.41rem;
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
