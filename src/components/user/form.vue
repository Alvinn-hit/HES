<template>
<div>
  <el-card>
    <el-form ref="form" :rules="userRules" :model="form" label-width="80px">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-col :span="11">
          <el-input type="password" v-model="form.password" placeholder="请输入登录密码"></el-input>
        </el-col>
        <el-col :span="11" :offset="2">
          <el-input type="password" v-model="form.repassword" placeholder="请输入重复密码"></el-input>
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

<script>
export default {
  props: {
    form: {
      type: [Object, Array],
      default: () => {
        return {
          name: '',
          phone: '',
          password: '',
          repassword: '',
          begin_at: '',
          end_at: '',
          is_able: true,
        }
      }
    },
    action: {
      type: String,
      default: 'add'
    }
  },
  data () {
    return {
      userRules: {
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '手机号码不能为空', trigger: 'blur' },
          { pattern: '^[1][3,4,5,7,8,9][0-9]{9}$', message: '请输入正确的手机号', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.checkPassword()) {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            
          }
        })
      }
    },
    checkPassword () {
      if (this.form.password) {
        if (this.form.password !== this.form.repassword) {
          this.$message.error('两次密码不一致');
          return false;
        }
      } else if (this.action === 'add') {
        this.$message.error('请输入密码');
        return false;
      }
      return true
    }
  }
}
</script>

