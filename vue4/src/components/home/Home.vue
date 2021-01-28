<template>
    <el-container class="home_container">
<!--        头部区域-->
        <el-header height="60px">
            <div>
                <img src="../../assets/images/logo.jpeg" class="logo_img"  alt="">
                <span>电商后台管理系统</span>
            </div>
            <el-button type="warning" @click="exit">退出按钮</el-button>
        </el-header>
<!--        页面主体-->
        <el-container>
            <el-aside :width="isCollapse ? '64px' : '200px' ">

                <div class="toggle-button" @click="toggleCollapse">|||</div>

<!--                菜单栏开始-->
                <el-menu
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#409eff"
                        unique-opened
                        :collapse="isCollapse"
                        :collapse-transition="false" router
                        :default-active="$route.path">
                    <el-submenu :index="item.path + ''" v-for="item in menuList" :key="item.id">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.authName}}</span>
                        </template>
<!--                        二级菜单-->
                        <el-menu-item :index="subItem.path + ''" v-for="subItem in item.children" :key="subItem.id">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span>{{subItem.authName}}</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
<!--                菜单栏结束-->

            </el-aside>

<!--            右侧内容模块-->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
  export default {
    name: "Home",
    data(){
     return {
       // 左侧菜单
       menuList: [],
       isCollapse: false,
     }
    },
    created(){
      this.getMenuList()
    },
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
      },
      async getMenuList(){
        const { data: res } = await this.$http.get('basic/menu')
        if(res.code !== 1) return this.$message.error('获取权限列表失败');
        // console.log(res);
        this.menuList = JSON.parse(JSON.stringify(res.data));
      },
      toggleCollapse(){
        this.isCollapse = !this.isCollapse;
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
        .el-menu{
            border-right: none;
        }

        .toggle-button{
            background-color: #4a5064;
            font-size: 10px;
            line-height:24px;
            color: #fff;
            text-align: center;
            letter-spacing: 0.2em;
            cursor: pointer;
        }
    }
    .el-main{
        background-color: #eaedf1;
    }
</style>
