<template>
  <div>
    <ceader></ceader>
    <search
    :citylist='alphcity'
    ></search>
    <clist 
    :hotcity='hotcity' 
    :alphcity='alphcity'
    :togo='alpcon'
    ></clist>
    <alphabet 
    :alphcity='alphcity'
    @togo='alpvalue'
    ></alphabet>
  </div>
</template>

<script>
import ceader from "./components/header";
import search from "./components/search";
import Clist from "./components/list";
import Alphabet from "./components/Alphabet";
import axios from "axios";
export default {
  name: "city",
  components: {
    ceader,
    search,
    Clist,
    Alphabet
  },
  methods:{
    alpvalue(aa){
      this.alpcon=aa
    }
  },
  data() {
    return {
        "hotcity":[],
        "alphcity":{},
        'alpcon':''
    };
  },
  mounted() {
    axios.get("../../../static/city.json").then(result => {
      result = result.data;
      if (result.ret) {
          result=result.data
          this.hotcity=result.hotCities
          this.alphcity=result.cities
      }
    });
  }
};
</script>

<style lang="less" scoped>
</style>
