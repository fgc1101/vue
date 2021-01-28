<template>
    <div>
        <!--    面包屑导航-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!--    面包屑导航结束-->

<!--        卡片视图区域-->
        <el-card class="box-card">
            <el-row :gutter="20">
                <el-col :span="10">
                    <el-input placeholder="请输入内容" class="input-with-select" v-model="queryInfo.query" clearable @clear="getUserList">
                        <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
                </el-col>
            </el-row>

            <el-table
                    :data="userList"
                    style="width: 100%"
                    stripe
                    border>
                <el-table-column
                        type="index"
                        label="#"
                        width="60">
                </el-table-column>
                <el-table-column
                        prop="id"
                        label="ID"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="username"
                        label="用户名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="nickname"
                        label="昵称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="tel"
                        label="电话">
                </el-table-column>
                <el-table-column
                        label="状态">
                    <template slot-scope="scope">
<!--                        {{scope.row}}-->
                        <el-switch
                                v-model="scope.row.status"
                                :active-value="1"
                                :inactive-value="0"
                                @change="userStatusChanged(scope.row)">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column
                        label="操作"
                        width="180">
                    <template slot-scope="scope">
                        <el-tooltip class="item" effect="dark" content="编辑" placement="top" :enterable="false">
                            <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="删除" placement="top" :enterable="false">
                            <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="分配角色" placement="top" :enterable="false">
                            <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>

<!--        分页-->
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="queryInfo.pagenum"
                :page-sizes="[1, 2, 5, 10]"
                :page-size="queryInfo.pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
        </el-pagination>
<!--        分页结束-->

        <el-dialog
                title="添加用户"
                :visible.sync="addDialogVisible"
                width="50%"
        @close="addDialogClosed">
            <span>
                <el-form :model="addForm" :rules="addFromRules" ref="addRuleFormRef" label-width="100px">
                  <el-form-item label="昵称" prop="nickname">
                    <el-input v-model="addForm.nickname"></el-input>
                  </el-form-item>
                    <el-form-item label="用户名" prop="username">
                    <el-input v-model="addForm.username"></el-input>
                  </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                    <el-input v-model="addForm.email"></el-input>
                  </el-form-item>
                    <el-form-item label="手机号码" prop="telphone">
                    <el-input v-model="addForm.telphone"></el-input>
                  </el-form-item>
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="addDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
  </span>
        </el-dialog>
<!--        卡片视图区域结束-->
    </div>
</template>

<script>
  export default {
    name: "Users",
    data(){
      var checkEmail = (rule, value, callback) => {

      }

      return {
        queryInfo:{
          query: '',
          pagenum: 1,
          pagesize: 2
        },
        userList:[],
        total:0,
        addDialogVisible: false,
        addForm: {
          nickname: '',
          username: '',
          email: '',
          telphone:'',
        },
        addFromRules:{
          nickname: [
            {
              required: true,message:'请输入昵称',trigger:'blur',
            },{
              min:3,max:10,message:'昵称的长度在3-10个字符串之间',
            }
          ],
          username: [
            {
              required: true,message:'请输入用户名',trigger:'blur',
            },{
              min:3,max:10,message:'用户名的长度在3-10个字符串之间',
            }
          ],
          email: [
            {
              required: true,message:'请输入邮箱',trigger:'blur',
            }
          ],
          telphone: [
            {
              required: true,message:'请输入手机号码',trigger:'blur',
            }
          ],
        }
      }
    },
    created() {
        this.getUserList();
    },
    methods:{
      async getUserList(){
          const { data : res } = await this.$http.get('/user/index',{params: this.queryInfo});
          if(res.code !== 1) return this.$message.error('获取用户列表失败！');
          console.log(res);
          this.userList = res.data;
          this.total = res.count;
        },
      handleSizeChange(val) {
        this.queryInfo.pagesize = val;
        this.getUserList();
        //console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.queryInfo.pagenum = val;
        this.getUserList();
        //console.log(`当前页: ${val}`);
      },
      async userStatusChanged(userInfo){
        console.log(userInfo);
        const {data : res} = await this.$http.get(`user/${userInfo.id}/status/${userInfo.status}`).catch(()=>{

        });
        console.log(res);
      },
      // 监听添加用户对话框的关闭事件
      addDialogClosed(){
        this.$refs.addRuleFormRef.resetFields();
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
