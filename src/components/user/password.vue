<template>
<el-card>
  <el-form :model="form" :rules="passwordRules" ref="ruleForm" label-width="100px">
    <el-form-item label="原密码" prop="password">
      <el-input v-model="form.password" type="password"/>
    </el-form-item>

    <el-form-item label="新密码" prop="newPassword">
      <el-input v-model="form.newPassword" type="password"/>
    </el-form-item>

    <el-form-item label="确认新密码" prop="reNewPassword">
      <el-input v-model="form.reNewPassword" type="password"/>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="passwordBtnClick">修改</el-button>
    </el-form-item>
  </el-form>
</el-card>
</template>

<script>
import { changePassword } from '@/api/login';
export default {
  data () {
    return {
      form: {
        password: '',
        newPassword: '',
        reNewPassword: ''
      },
      passwordRules: {
        password: [
          { required: true, message: '原密码不能为空', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: '新密码不能为空', trigger: 'blur' },
          { min: 6, message: '新密码至少6位', trigger: 'blur' }
        ],
        reNewPassword: [
          { required: true, message: '新密码不能为空', trigger: 'blur' },
          { min: 6, message: '新密码至少6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    passwordBtnClick () {
      if (this.form.newPassword !== this.form.reNewPassword) {
        this.$message.error('两次密码不一致');
        return false
      }

      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          changePassword(this.form).then(res => {
            this.$message.success('修改密码成功!');
            this.$emit('success');
          })
        }
      })
    }
  }
}
</script>

