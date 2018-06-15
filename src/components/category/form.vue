<template>
  <el-card>
    <el-form ref="cate" :rules="cateRules" :model="form" label-width="100px">
      <el-form-item label="名称" prop="title">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input v-model="form.sort" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-if="actionType === 'add'" @click="onAddAction">增加</el-button>
        <el-button type="primary" v-if="actionType === 'edit'" @click="onEditAction">修改</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import {categoryAdd, categoryEdit} from '@/api/category';
export default {
  props: {
    form: {
      type: [Object, Array],
      default: () => {
        return {
          title: '',
          sort: 500
        }
      }
    },
    actionType: {
      type: String,
      default: 'add'
    },
    pid: {
      type: String,
      default: "0"
    },
    cate: {
      type: String,
      default: "10"
    }
  },
  data () {
    return {
      cateRules: {
        title: [
          { required: true, message: '分类名称不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onAddAction() {
      const data = this.form;
      data['p_id'] = this.pid;
      data['type'] = this.cate;
      categoryAdd(data).then(res => {
        this.$message.success('增加成功');
        this.$emit('success');
      })
    },
    onEditAction() {
      categoryEdit(this.form.id, this.form).then(res => {
        this.$message.success('修改成功');
        this.$emit('success');
      })
    }
  }
}
</script>

