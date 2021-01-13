<template>
    <!-- 当前组件页面的结构-->
    <div id="app">
        {{msg}}
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return {
                msg:'hello App.vue'
            }
        }
    }
</script>

<style scoped>
    /*css样式*/
    #app{
        background-color: yellowgreen;
    }
</style>
