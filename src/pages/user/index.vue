<template>
<div>
  <el-row>
    <el-button @click="addUserBox = true">增加用户</el-button>
  </el-row>
  <el-table :data="userList" border stripe style="width: 100%">
    <el-table-column prop="name" label="姓名" ></el-table-column>
    <el-table-column prop="phone" label="手机号码"></el-table-column>
    <el-table-column prop="nike_name" label="昵称"></el-table-column>
    <el-table-column prop="open_id" label="微信id"></el-table-column>
    <el-table-column prop="begin_at" label="开始时间"></el-table-column>
    <el-table-column prop="end_at" label="结束时间"></el-table-column>
    <el-table-column prop="is_able" label="是否启用">
      <template slot-scope="seope">
        <el-button circle size="mini" :type="seope.row.is_able == 1 ? 'primary' : 'info'" :icon="seope.row.is_able === 1 ? 'el-icon-check' : 'el-icon-close'"></el-button>
      </template>
    </el-table-column>
    <el-table-column prop="created_at" label="增加时间"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="editUserClick(scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog title="增加用户" :visible.sync="addUserBox">
    <user-form action="add" v-if="addUserBox" @success="reload" @cancel="addUserBox = false"></user-form>
  </el-dialog>

  <el-dialog title="修改用户" :visible.sync="editUserBox">
    <user-form action="edit" v-if="editUserBox" @success="reload" :form="selectedUser" action-type="edit" @cancel="editUserBox = false"></user-form>
  </el-dialog>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UserForm from '@/components/user/form.vue';
import { userList } from '@/api/user';
@Component({
  components: { UserForm }
})
export default class UserIndex extends Vue {
  addUserBox:boolean = false;
  editUserBox:boolean = false;
  userList: object = [];
  selectedUser: object = [];

  created() {
    this.getUserList();
  }

  getUserList() {
    userList([]).then((res) => {
      this.userList = res.items;
    })
  }

  reload() {
    this.addUserBox = false;
    this.editUserBox = false;
    this.getUserList();
  }

  editUserClick(row: object) {
    this.selectedUser = JSON.parse(JSON.stringify(row));
    this.selectedUser.is_able = this.selectedUser.is_able === 1 ? true: false;
    this.editUserBox = true;
  }
  
}
</script>

<style scoped>
.el-row {margin-bottom: 10px;}
</style>
