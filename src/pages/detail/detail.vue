<template>
  <div>
    <detail-banner/>
    <detail-header/>
  </div>
</template>

<script>
import detailBanner from "./components/banner";
import detailHeader from "./components/header";
export default {
  name: "detail",
  components: {
    detailBanner,
    detailHeader
  }
};
</script>

<style lang="less" scoped>
  div{
      height: 1000px;
  }
</style>
