<template>
    <div class="app">
        <h1>项目首页</h1>
        <el-button type="primary" @click="exit">退出按钮</el-button>
    </div>
</template>

<script>
  export default {
    name: "Home",
    methods: {
      exit(){
        window.sessionStorage.clear();
        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped>

</style>
