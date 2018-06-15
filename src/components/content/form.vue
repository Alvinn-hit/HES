<template>
<el-card>
  <el-form ref="contentForm" :model="form" :rules="contentRules" label-width="100px">
    <el-form-item label="标题" prop="title">
      <el-input v-model="form.title" />
    </el-form-item>
    <el-form-item label="分类" prop="c_id">
      <el-col :span="10">
        <el-cascader v-model="form.c_id" :options="cate" :show-all-levels="false" :props="selectOptions" clearable change-on-select/>
      </el-col>
      <el-col :span="3" :offset="1">排序</el-col>
      <el-col :span="10">
        <el-input v-model="form.sort" />
      </el-col>
    </el-form-item>
    <el-form-item label="正文">
      <el-input type="textarea" v-model="form.content"></el-input>
    </el-form-item>
    <el-form-item label="描述">
      <el-input type="textarea" v-model="form.description"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onAddAction" v-if="actionType === 'add'">增加</el-button>
      <el-button type="primary" @click="onEditAction" v-if="actionType === 'edit'">修改</el-button>
    </el-form-item>
  </el-form>
</el-card>
</template>

<script>
import { contentAdd, contentEdit } from '@/api/content';
export default {
  props: {
    form: {
      type: [Object, Array],
      default: () => {
        return {
          title: '',
          c_id: [4],
          sort: 500,
          content: '',
          description: ''
        }
      }
    },
    cate: [Object, Array],
    actionType: {
      type: String,
      default: 'add'
    }
  },
  data () {
    return {
      selectOptions: {
        value: 'id',
        label: 'title',
        children: 'children'
      },
      contentRules: {
        title: [
          { required: true, message: '请输入正文标题', trigger: 'blur' }
        ],
        c_id: [
          { required: true, message: '请选择分类', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    onAddAction() {
      this.$refs['contentForm'].validate(valid => {
        if (valid) {
          let data = this.form;
          data['extended_data']= {
            path: data.c_id
          };
          data['c_id'] = data['c_id'][data['c_id'].length -1]
          contentAdd(data).then(res => {
            this.$message.success('增加成功');
            this.$emit('success');
          })
        }
      })
    },
    onEditAction() {
      this.$refs['contentForm'].validate(valid => {
        if (valid) {
          let data = {
            title: this.form.title,
            extended_data: {
              path: this.form.c_id
            },
            c_id: this.form.c_id[this.form.c_id.length - 1],
            sort: this.form.sort,
            description: this.form.description,
            content: this.form.content
          }
          contentEdit(this.form.id, data).then(res => {
            this.$message.success('修改成功');
            this.$emit('success');
          })
        }
      })
    }
  }
}
</script>
