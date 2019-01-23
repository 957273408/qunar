<template>
  <div>
    <h2 class="recomment-top">周末去哪儿</h2>
    <ul>
      <li class="item" v-for="(item, index) in data" :key="index">
        <div class="item-img">
          <img :src="item.url" alt>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-content">{{item.content}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {
      data: [
        {
          id: 1,
          url:
            "https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png",
          title: "大连圣亚海洋世界",
          content: "浪漫大连首站,浪漫的海洋主题公园"
        },
        {
          id: 2,
          url:
            "https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png",
          title: "大连圣亚海洋世界",
          content: "浪漫大连首站,浪漫的海洋主题公园"
        },
        {
          id: 3,
          url:
            "https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png",
          title: "大连圣亚海洋世界",
          content: "浪漫大连首站,浪漫的海洋主题公园"
        },
        {
          id: 4,
          url:
            "https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png",
          title: "大连圣亚海洋世界",
          content: "浪漫大连首站,浪漫的海洋主题公园"
        },
        {
          id: 5,
          url:
            "https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png",
          title: "大连圣亚海洋世界",
          content: "浪漫大连首站,浪漫的海洋主题公园"
        },
        {
          id: 6,
          url:
            "https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png",
          title: "大连圣亚海洋世界",
          content: "浪漫大连首站,浪漫的海洋主题公园"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.oneline() {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.recomment-top {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align-last: left;
  padding-left: 0.2rem;
  margin-top: 0.15rem;
  background-color: #ccc;
}
ul {
  li {
    align-items: center;
    // background-color: red;
    .item-img {
      overflow: hidden;
      width: 100%;
      height: 0;
      padding-bottom: 2.5rem;
      img{
          width: 100%;
      }

    }
    .item-info {
      text-align-last: left;
      flex: 1;
      min-width: 0;
      margin-bottom: .15rem;
      .item-title {
        font-size: 16px;
        line-height: 16px;
        padding-bottom: 0.12rem;
        .oneline();
      }
      .item-content {
        padding-bottom: 0.12rem;
        color: #666;
        .oneline();
      }
    }
  }
}
</style>
