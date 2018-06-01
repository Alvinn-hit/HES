<template>
<div>
  <el-card>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-col :span="11">
          <el-input type="password" v-model="form.password" placeholder="请输入登录密码"></el-input>
        </el-col>
        <el-col :span="11" :offset="2">
          <el-input type="password" v-model="form.password" placeholder="请输入重复密码"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="调查时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择调查时间" v-model="form.begin_at" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择结束时间" v-model="form.end_at" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="是否启用">
        <el-switch v-model="form.is_able"></el-switch>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { create } from 'domain';
export default class UserForm extends Vue {
  @Prop({ default: (viid:object) => {
    name: '',
    phone: '',
    password: '',
    repassword: '',
    begin_at: '',
    end_at: '',
    is_able: true,
  }})
  form: any

  created () {
    console.log(this.$props)
  }
}
</script>
