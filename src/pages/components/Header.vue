<template>
    <div class="header">
      <div class="header-left">
        <i class="iconfont icon-2fanhui"></i>
      </div>
      <div class="header-input">
        <i class="iconfont icon-sousuo"></i>
        <input type="search" placeholder="清输入想搜索的内容">
      </div>
      <div class="header-right">
        城市
        <i class="iconfont icon-xiala"></i>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  .header{
    width: 100%;
    height: .86rem;
    background: #00bcd8;
    color: #fff;
    display: flex;
    justify-content: space-between;
    .header-left{
      margin-left: .2rem;
      width: .45rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .header-input{
      flex: 1;
      border-radius: .1rem;
      margin: .2rem .1rem;
      background-color: #fff;
      position: relative;
      text-align: left;
      display: flex;
      overflow: hidden;
      i{
        color: #ccc;
        position: absolute;
        top: 50%;
        left: 5%;
        transform:  translate(-50%,-50%)
      }
      input{
        text-align: left;
        margin-left: .8rem;
        flex: 1
      }
    }
    .header-right{
      line-height: .86rem;
      font-size: .30rem;
    }
  }
</style>
