<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <icons></icons>
        <recommend></recommend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import Icons from './components/icons'
import recommend from './components/recommend'
export default {
    name:"home",
    components:{
        HomeHeader,
        HomeSwiper,
        Icons,
        recommend,
    }
}
</script>

<style lang="less" scoped>

</style>
