<template>
<div>
  <el-row class="row">
    <el-button @click="onAddCate('0')">增加一级分类</el-button>
  </el-row>
  <!--<el-table :data="list" style="width:100%;">
    <el-table-column prop="title" label="分类名称"></el-table-column>
    <el-table-column label="操作" width="200">
      <template slot-scope="scope">
        <el-button size="mini" type="text" @click="onAddCate(scope.row.id)">增加下级分类</el-button>
        <el-button size="mini" type="text" style="color: #e6a23c" @click="onEditCate(scope.row)">修改</el-button>
        <el-button size="mini" type="text" style="color:red" @click="onDeleteCate(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>-->
  <el-tree :data="list" :props="treeData" node-key="id" :expand-on-click-node="false" default-expand-all>
    <span class="custom-tree-node" slot-scope="{node, data}">
      <span>{{data.title}}</span>
      <span class="tree-right">
        <el-button size="mini" type="text" @click="onAddCate(data.id)">增加下级分类</el-button>
        <el-button size="mini" type="text" style="color: #e6a23c" @click="onEditCate(data)">修改</el-button>
        <el-button size="mini" type="text" style="color:red" @click="onDeleteCate(data.id)">删除</el-button>
      </span>
    </span>
  </el-tree>

  <el-dialog :visible.sync="addCateBox" title="增加分类">
    <cate-form action-type="add" :cate="cate" :pid="p_id" v-if="addCateBox" @success="reload"/>
  </el-dialog>

  <el-dialog :visible.sync="editCateBox" title="修改分类">
    <cate-form action-type="edit" :form="selectedCate" v-if="editCateBox" @success="reload"/>
  </el-dialog>
</div>
</template>

<script>
import Vue from 'vue';
import { categoryList, categoryDelete } from '@/api/category';
import CateForm from '@/components/category/form.vue';
export default Vue.extend({
  components: { CateForm },
  props: {
    cate: {
      type: String,
      default: '10'
    }
  },
  data () {
    return {
      list: [],
      treeData: {
        label: 'title',
        children: 'children'
      },
      addCateBox: false,
      editCateBox: false,
      selectedCate: [],
      p_id: "0"
    }
  },
  created () {
    this.getCategoryList();
  },
  watch: {
    "$route": function (val, old) {
      this.getCategoryList();
    }
  },
  methods: {
    getCategoryList() {
      categoryList({type: this.cate}).then(res => {
        this.list = res
      })
    },
    onAddCate (pid = "0") {
      console.log(pid);
      this.p_id = pid;
      this.addCateBox = true;
    },
    onEditCate(data) {
      this.selectedCate = JSON.parse(JSON.stringify(data));
      this.editCateBox = true;
    },
    onDeleteCate(id) {
      this.$confirm('确定要删除这个分类么?', '请确认', {
        confirmButtonText: '确定',
        cancelButtonText: '算了',
        type: 'warning'
      }).then(() => {
        categoryDelete(id).then(res => {
          this.$message.success('删除成功');
          this.getCategoryList();
        })
      })
      
    },
    reload() {
      this.editCateBox = false;
      this.addCateBox = false;
      this.getCategoryList();
    }
  }
})
</script>

<style scoped>
.row {
  margin-bottom: 15px;
}
.custom-tree-node {
  width: 100%;
  display: block;
}
.tree-right {
  float: right;
}
</style>
