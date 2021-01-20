<template>
    <el-container class="home_container">
<!--        头部区域-->
        <el-header>
            <div>
                <img src="../../assets/images/logo.jpeg" class="logo_img"  alt="">
                <span>电商后台管理系统</span>
            </div>
            <el-button type="primary" @click="exit">退出按钮</el-button>
        </el-header>
<!--        页面主体-->
        <el-container>
            <el-aside width="200px">
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#333744"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
  export default {
    name: "Home",
    methods: {
      exit(){
        window.sessionStorage.clear();
        this.$router.push('/login');
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="less" scoped >

    .home_container{
        height: 100%;
    }

    .logo_img{
        width: 60px;
        height: 100%;
    }

    .el-header{
        background-color: #373d41;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        align-items: center; //不再上下贴边
        color: #eaedf1;
        font-size: 20px;
        > div {
            display: flex;
            align-items: center;
            span{
                margin-left: 15px;
            }
        }
    }
    .el-aside{
        background-color: #333744;
    }
    .el-main{
        background-color: #eaedf1;
    }
</style>
