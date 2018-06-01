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
    <el-table-column prop="is_able" label="是否禁用"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small" @click=" editUserBox = true">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog title="增加用户" :visible.sync="addUserBox">
    <user-form action="add" v-if="addUserBox"></user-form>
  </el-dialog>

  <el-dialog title="修改用户" :visible.sync="editUserBox">
    <user-form action="edit" v-if="editUserBox"></user-form>
  </el-dialog>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UserForm from '@/components/user/form.vue';
@Component({
  components: { UserForm }
})
export default class UserIndex extends Vue {
  addUserBox:boolean = false;
  editUserBox:boolean = false;
  userList: object = [
    {
      id: 1,
      name: '管理员',
      phone: '18113276669',
      nike_name: '一步之遥',
      avatar: '',
      session_key: '',
      is_able: 1,
      begin_at: '1970-01-01',
      end_at: '2028-01-01',
      created_at: '2018-06-01 02:35:28'
    },
    {
      id: 1,
      name: '管理员',
      phone: '18113276669',
      nike_name: '一步之遥',
      avatar: '',
      session_key: '',
      is_able: 1,
      begin_at: '1970-01-01',
      end_at: '2028-01-01',
      created_at: '2018-06-01 02:35:28'
    },
    {
      id: 1,
      name: '管理员',
      phone: '18113276669',
      nike_name: '一步之遥',
      avatar: '',
      session_key: '',
      is_able: 1,
      begin_at: '1970-01-01',
      end_at: '2028-01-01',
      created_at: '2018-06-01 02:35:28'
    },
    {
      id: 1,
      name: '管理员',
      phone: '18113276669',
      nike_name: '一步之遥',
      avatar: '',
      session_key: '',
      is_able: 1,
      begin_at: '1970-01-01',
      end_at: '2028-01-01',
      created_at: '2018-06-01 02:35:28'
    },
    {
      id: 1,
      name: '管理员',
      phone: '18113276669',
      nike_name: '一步之遥',
      avatar: '',
      session_key: '',
      is_able: 1,
      begin_at: '1970-01-01',
      end_at: '2028-01-01',
      created_at: '2018-06-01 02:35:28'
    },
    {
      id: 1,
      name: '管理员',
      phone: '18113276669',
      nike_name: '一步之遥',
      avatar: '',
      session_key: '',
      is_able: 1,
      begin_at: '1970-01-01',
      end_at: '2028-01-01',
      created_at: '2018-06-01 02:35:28'
    },
    {
      id: 1,
      name: '管理员',
      phone: '18113276669',
      nike_name: '一步之遥',
      avatar: '',
      session_key: '',
      is_able: 1,
      begin_at: '1970-01-01',
      end_at: '2028-01-01',
      created_at: '2018-06-01 02:35:28'
    },
    {
      id: 1,
      name: '管理员',
      phone: '18113276669',
      nike_name: '一步之遥',
      avatar: '',
      session_key: '',
      is_able: 1,
      begin_at: '1970-01-01',
      end_at: '2028-01-01',
      created_at: '2018-06-01 02:35:28'
    },
    {
      id: 1,
      name: '管理员',
      phone: '18113276669',
      nike_name: '一步之遥',
      avatar: '',
      session_key: '',
      is_able: 1,
      begin_at: '1970-01-01',
      end_at: '2028-01-01',
      created_at: '2018-06-01 02:35:28'
    },
    {
      id: 1,
      name: '管理员',
      phone: '18113276669',
      nike_name: '一步之遥',
      avatar: '',
      session_key: '',
      is_able: 1,
      begin_at: '1970-01-01',
      end_at: '2028-01-01',
      created_at: '2018-06-01 02:35:28'
    },
    {
      id: 1,
      name: '管理员',
      phone: '18113276669',
      nike_name: '一步之遥',
      avatar: '',
      session_key: '',
      is_able: 1,
      begin_at: '1970-01-01',
      end_at: '2028-01-01',
      created_at: '2018-06-01 02:35:28'
    },
    {
      id: 1,
      name: '管理员',
      phone: '18113276669',
      nike_name: '一步之遥',
      avatar: '',
      session_key: '',
      is_able: 1,
      begin_at: '1970-01-01',
      end_at: '2028-01-01',
      created_at: '2018-06-01 02:35:28'
    },
    {
      id: 1,
      name: '管理员',
      phone: '18113276669',
      nike_name: '一步之遥',
      avatar: '',
      session_key: '',
      is_able: 1,
      begin_at: '1970-01-01',
      end_at: '2028-01-01',
      created_at: '2018-06-01 02:35:28'
    },
    {
      id: 1,
      name: '管理员',
      phone: '18113276669',
      nike_name: '一步之遥',
      avatar: '',
      session_key: '',
      is_able: 1,
      begin_at: '1970-01-01',
      end_at: '2028-01-01',
      created_at: '2018-06-01 02:35:28'
    }
  ]
  
}
</script>

<style scoped>
.el-row {margin-bottom: 10px;}
</style>
