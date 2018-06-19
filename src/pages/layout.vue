<template>
<div>
  <el-container>
    <el-aside style="width:300px;">
      <el-menu class="aside" router>

        <el-card class="menu-card">
          <img src="../assets/logo.jpg" class="side-img"/>
        </el-card>

        <span class="subTitle">用户管理</span>
        <el-menu-item index="/user/list">
          <i class="el-icon-news"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>

        <span class="subTitle">分类管理</span>
        <el-menu-item index="/category/10">
          <i class="el-icon-menu"></i>
          <span slot="title">法律法规</span>
        </el-menu-item>
        <el-menu-item index="/category/20">
          <i class="el-icon-menu"></i>
          <span slot="title">体系要素</span>
        </el-menu-item>
        <el-menu-item index="/category/30">
          <i class="el-icon-menu"></i>
          <span slot="title">隐患分级标准</span>
        </el-menu-item>
        <el-menu-item index="/category/40">
          <i class="el-icon-menu"></i>
          <span slot="title">违章分级标准</span>
        </el-menu-item>
        <el-menu-item index="/category/60">
          <i class="el-icon-menu"></i>
          <span slot="title">内审类别</span>
        </el-menu-item>
        <el-menu-item index="/category/50">
          <i class="el-icon-menu"></i>
          <span slot="title">整改措施建议参考</span>
        </el-menu-item>

        <span class="subTitle">内容管理</span>
        <el-menu-item index="/content/10">
          <i class="el-icon-document"></i>
          <span slot="title">法律法规</span>
        </el-menu-item>
        <el-menu-item index="/content/20">
          <i class="el-icon-document"></i>
          <span slot="title">体系要素</span>
        </el-menu-item>
        <el-menu-item index="/content/30">
          <i class="el-icon-document"></i>
          <span slot="title">隐患分级标准</span>
        </el-menu-item>
        <el-menu-item index="/content/40">
          <i class="el-icon-document"></i>
          <span slot="title">违章分级标准</span>
        </el-menu-item>
        <el-menu-item index="/content/60">
          <i class="el-icon-document"></i>
          <span slot="title">内审类别</span>
        </el-menu-item>
        <el-menu-item index="/content/50">
          <i class="el-icon-document"></i>
          <span slot="title">整改措施建议参考</span>
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
            <img :src="user.avatar ? user.avatar : '/images/user.png'" class="user-img"/>
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
              <el-breadcrumb-item>{{path.meta.name}}</el-breadcrumb-item>
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
      changePassword: false,
      path: this.$route
    }
  },
  watch: {
    "$route": function (val, old) {
      this.path = val;
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
  overflow-y: scroll;
}
.subTitle {
  font-size: 12px;
  display: block;
  text-align: left;
  padding: 0 20px;
  color: #999;
}

.el-header {
  padding: 0;
}
.header-card {
  background: #b71c1c;
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
.user-img {max-width: 50px; max-height: 50px; border-radius: 50%; float: left;}
.user-info {float: right; line-height: 50px; color: white}
.main { background: #fff3e0; width: 100%;}
.main-body { width: 100%; margin-top: 5px; height: calc(100vh - 170px); overflow-y: scroll;}
.body {width: 100%; height: 100%; display: block; text-align: left;}
.menu-card{
  margin-bottom: 30px;
}

.side-img {
  max-width: 300px;
}
.el-menu-item {
  text-align: left;
}
</style>
