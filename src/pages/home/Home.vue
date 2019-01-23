<template>
    <div>
        <home-header ></home-header>
        <home-swiper :list='swiperlist'></home-swiper>
        <icons :list='iconslist'></icons>
        <recommend :list='recommendlist'></recommend>
        <weekend :list='weekendlist'></weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import Icons from './components/icons'
import recommend from './components/recommend'
import weekend from './components/weekend'
import axios from 'axios'
export default {
    name:"home",
    components:{
        HomeHeader,
        HomeSwiper,
        Icons,
        recommend,
        weekend,
    },
    data(){
        return {
            swiperlist:null,
            iconslist:[],
            recommendlist:null,
            weekendlist:null,
        }
    },
    methods:{
        getjson(){
            axios.get('/api/index.json').then(result=>{
                result=result.data
                this.swiperlist=result.swiperlist
                this.iconslist=result.iconslist
                this.recommendlist=result.recommendlist
                this.weekendlist=result.weekend
            })
        }
    },
    mounted(){
        this.getjson()
    }
}
</script>

<style lang="less" scoped>

</style>
