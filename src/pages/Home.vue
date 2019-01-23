<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <icons></icons>
        <recommend></recommend>
        <weekend></weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import Icons from './components/icons'
import recommend from './components/recommend'
import weekend from './components/weekend'
export default {
    name:"home",
    components:{
        HomeHeader,
        HomeSwiper,
        Icons,
        recommend,
        weekend,
    }
}
</script>

<style lang="less" scoped>

</style>
