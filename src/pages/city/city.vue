<template>
  <div>
    <ceader></ceader>
    <search></search>
    <clist></clist>
    <alphabet></alphabet>
  </div>
</template>

<script>
import ceader from "./components/header";
import search from "./components/search";
import Clist from "./components/list";
import Alphabet from "./components/Alphabet";
export default {
  name: "city",
  components: {
    ceader,
    search,
    Clist,
    Alphabet,
  }
};
</script>

<style lang="less" scoped>
</style>
