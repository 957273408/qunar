<template>
    <div class="cityS">
        <input type="search" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
    name:"citysearch",

}
</script>

<style lang="less" scoped>
    .cityS{
        width: 100%;
        height: .72rem;
        background-color: skyblue;
        padding: 0.1rem;
        box-sizing: border-box;
        input{
            width: 100%;
            padding: 0.15rem;
            height: 100%;
            line-height: .72rem;
            text-align: center;
            border-radius: .16rem;
        }
    }
</style>
