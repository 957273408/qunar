<template>
  <div class="item-list">
      <div class="item">A</div>
      <div class="item">A</div>
      <div class="item">A</div>
      <div class="item">A</div>
      <div class="item">A</div>
      <div class="item">A</div>
      <div class="item">A</div>
      <div class="item">A</div>
  </div>
</template>

<script>
export default {
  name: "Alphabet"
};
</script>

<style lang="less" scoped>
    .item-list{
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        top: 1.35rem;
        right: 0;
        bottom: 0;
        width: .4rem;
        .item{
            height: .4rem;
            line-height: .4rem;
            color: blue;
        }
    }
</style>
