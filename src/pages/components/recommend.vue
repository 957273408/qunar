<template>
  <div>
    <h2 class="recomment-top">热门推荐</h2>
    <ul>
      <li class="item" v-for="(item, index) in data" :key="index">
        <img
          :src="item.url"
          alt
        >
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-content">{{item.content}}</p>
          <button class="item-button">查看详情</button>
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
            "https://img.alicdn.com/imgextra/i2/252339290/TB29PYUXnIlyKJjSZFrXXXn2VXa_!!252339290-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp",
          title:'大连圣亚海洋世界',
          content:"浪漫大连首站,浪漫的海洋主题公园"
        },
        {
          id: 2,
          url:
            "https://img.alicdn.com/imgextra/i2/252339290/TB29PYUXnIlyKJjSZFrXXXn2VXa_!!252339290-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp",
          title:'大连圣亚海洋世界',
          content:"浪漫大连首站,浪漫的海洋主题公园"
        },
        {
          id: 3,
          url:
            "https://img.alicdn.com/imgextra/i2/252339290/TB29PYUXnIlyKJjSZFrXXXn2VXa_!!252339290-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp",
          title:'大连圣亚海洋世界',
          content:"浪漫大连首站,浪漫的海洋主题公园"
        },
        {
          id: 4,
          url:
            "https://img.alicdn.com/imgextra/i2/252339290/TB29PYUXnIlyKJjSZFrXXXn2VXa_!!252339290-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp",
          title:'大连圣亚海洋世界',
          content:"浪漫大连首站,浪漫的海洋主题公园"
        },
        {
          id: 5,
          url:
            "https://img.alicdn.com/imgextra/i2/252339290/TB29PYUXnIlyKJjSZFrXXXn2VXa_!!252339290-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp",
          title:'大连圣亚海洋世界',
          content:"浪漫大连首站,浪漫的海洋主题公园"
        },
        {
          id: 6,
          url:
            "https://img.alicdn.com/imgextra/i2/252339290/TB29PYUXnIlyKJjSZFrXXXn2VXa_!!252339290-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp",
          title:'大连圣亚海洋世界',
          content:"浪漫大连首站,浪漫的海洋主题公园"
        },
      ]
    }
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
  height: 0.4rem;
  line-height: 0.4rem;
  text-align-last: left;
  padding-left: 0.2rem;
  margin-top: 0.15rem;
  background-color: #ccc;
}
ul {
  li {
    display: flex;
    padding: 0.1rem;
    align-items: center;
    // background-color: red;
    img {
      width: 1.5rem;
      height: 1.5rem;
      padding: 0.05rem;
      margin-right: 0.15rem;
    }
    .item-info {
      text-align-last: left;
      flex: 1;
      min-width: 0;
      .item-title {
        font-size: 16px;
        line-height: 16px;
        padding-bottom: 0.12rem;
        .oneline();
      }
      .item-content {
        padding-bottom: 0.12rem;
        .oneline();
      }
      .item-button {
        background-color: orange;
        padding: 0.05rem .1rem;
        border-radius: 0.11rem;
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
</style>
