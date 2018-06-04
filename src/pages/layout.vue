<template>
<div>
  <el-container>
    <el-aside style="width:300px;">
      <el-menu class="aside">

        <el-card class="menu-card">
          <img src="../assets/logo.jpg" class="side-img"/>
        </el-card>

        <span class="subTitle">用户管理</span>
        <el-menu-item index="user">
          <i class="el-icon-menu"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
        <span class="subTitle">分类管理</span>
        <el-menu-item index="cate">
          <i class="el-icon-menu"></i>
          <span slot="title">分类管理</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container style="height:100vh;">
      <el-header>
        <el-card class="header-card">
          <div class="title">
            HSE联系点问题整改管理系统
          </div>
          <div class="header-right">
            <img :src="user.avatar ? user.avatar : '../assets/logo.jpg'" class="user-img"/>
            <el-dropdown class="user-info"  @command="handleClick">
              <span>{{ user.name }}<i class="el-icon-arrow-down el-icon--right"></i></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="updatePassword">修改密码</el-dropdown-item>
                <el-dropdown-item divided command="loginOut">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-card>
      </el-header>
      <el-main class="main">
        <el-card>
          <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </el-card>
        <el-card class="main-body">
          <div class="body">
          <router-view/>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </el-container>

  <el-dialog title="修改密码" :visible.sync="changePassword">
    <password v-if="changePassword" @success="changed"/>
  </el-dialog>
</div>
</template>

<script>
import Password from '@/components/user/password';
export default {
  components: { Password },
  data () {
    return {
      user: JSON.parse(sessionStorage.getItem('user')),
      changePassword: false
    }
  },
  methods: {
    handleClick (command) {
      if (command === 'loginOut') {
        sessionStorage.clear();
        this.$router.push({ path: '/login' });
      } else if (command === 'updatePassword') {
        this.changePassword = true
      }
    },
    changed () {
      this.changePassword = false;
    }
  }
}
</script>




<style scoped>
.aside {
  position: fixed;
  width: 300px;
  height: 100%;
}
.subTitle {
  font-size: 12px;
  display: block;
  text-align: left;
  padding: 0 111px;
  color: #999;
}

.el-header {
  padding: 0;
}
.header-card {
  background: #26a69a;
  border: none;
  height: 60px;
  padding: 0;
  position: relative;
}
.header-right {
  width: 150px;
  height: 60px;
  right: 30px;
  top: 5px;
  position: absolute;
  
}
.title { text-align: left; font-size: 18px;color: white;}
.user-img {width: 50px; height: 50px; border-radius: 50%;}
.user-info {float: right; margin-right: 30px; line-height: 50px;}
.main { background: #e0f2f1; width: 100%;}
.main-body { width: 100%; margin-top: 5px; height: calc(100vh - 170px); overflow-y: scroll;}
.body {width: 100%; height: 100%; display: block; text-align: left;}
.menu-card{
  margin-bottom: 30px;
}

.side-img {
  max-width: 300px;
}
</style>
