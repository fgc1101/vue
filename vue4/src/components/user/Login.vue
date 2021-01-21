<template>
    <div class="login_container">
        <div class="login_box">
            <div class="login_avatar">
                <img src="../../assets/logo.png" alt="">
            </div>
            <el-form ref="loginFormRef" :model="login_form" :rules="rules" label-width="auto" class="login_form">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="login_form.username">
                    </el-input>
                </el-form-item>

                <!-- 密码框 -->
                <el-form-item prop="password">
                    <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" show-password v-model="login_form.password"></el-input>
                </el-form-item>

                <!-- 登陆按钮 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="LoginBtn">登陆</el-button>
                    <el-button type="info" @click="resetBtn">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Login",
    data(){
      return {
        login_form : {
          username: '',
          password: ''
        },
        rules: {
          username : [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 5, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
          ],
          password : [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
          ],
        }
      }
    },
    methods:{
      resetBtn:function(){
        console.log(this.$refs);
        this.$refs.loginFormRef.resetFields();
      },
      LoginBtn(){
        this.$refs.loginFormRef.validate(async valid => {
          if(!valid) return;

          const { data: res } = await this.$http.post('basic/login',this.login_form);
          if(res.code === 1){
            this.$message({
              message: '恭喜您登陆成功',
              type: 'success',
            });

            window.sessionStorage.setItem('_token',res.data.token);

            this.$router.push("/home");
          }else{
            this.$message({
              message: res.msg,
              type: 'error'
            })
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
    .login_container{
        background-color: #2b4b6b;
        height: 100%;
        .login_box{
            width: 450px;
            height:300px;
            background-color: #fff;
            position: absolute;
            border-radius: 10px;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
        }

        .login_avatar{
            width: 130px;
            height:130px;
            border: 1px solid #eee;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 0 10px #ddd;
            position: absolute;
            left: 50%;
            transform: translate(-50%,-50%);
            background-color: #fff;
            img{
                width: 100%;
                height:100%;
                border-radius: 50%;
                background-color: #eee;
            }
        }

        .login_form{
            position: absolute;
            bottom: 0;
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
            .btns{
                display: flex;
                justify-content: flex-end;
            }
        }
    }
</style>
