<template>
  <div>
    <el-row>
      <el-button @click="addContentBox = true">增加</el-button>
    </el-row>
    <el-table :data="list" border stripe style="width: 100%">
      <el-table-column prop="title" label="标题" ></el-table-column>
      <el-table-column prop="category.title" label="分类" ></el-table-column>
      <el-table-column prop="created_at" label="增加时间" ></el-table-column>
      <el-table-column prop="updated_at" label="修改时间" ></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="editContentClick(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="deleteContentClick(scope.row.id)" style="color:red">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="page"
      :page-size="range"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>

    <el-dialog :visible.sync="addContentBox" title="增加内容">
      <content-form :cate="category" @success="reload" v-if="addContentBox"/>
    </el-dialog>

    <el-dialog :visible.sync="editContentBox" title="修改内容">
      <content-form :cate="category" :form="selectedContent" action-type="edit" @success="reload" v-if="editContentBox"/>
    </el-dialog>
  </div>
</template>

<script>
import { contentList, contentDelete } from '@/api/content';
import { categoryList } from '@/api/category';
import ContentForm from '@/components/content/form.vue';
export default {
  components: { ContentForm },
  props:  {
    cid: {
      type: String,
      default: '10'
    }
  },
  data () {
    return {
      list: [],
      addContentBox: false,
      editContentBox: false,
      category: [],
      selectedContent: [],
      range: 10,
      total: 0,
      page: 1
    }
  },
  created() {
    this.getList();
    this.getCategoryList();
  },
  watch: {
    "cid": function (val, old) {
      this.getList();
      this.getCategoryList();
    }
  },
  methods: {
    getList() {
      let data = {
        offset: (this.page - 1) * this.range,
        range: this.range,
        params: { c_id: this.cid }
      }
      contentList(data).then(res => {
        this.list = res.items;
        this.total = res.total;
      })
    },
    getCategoryList() {
      categoryList({type: this.cid}).then(res => {
        this.category = res;
      })
    },
    editContentClick(data) {
      let array = JSON.parse(JSON.stringify(data));
      array['c_id'] = data.extended_data && data.extended_data.path ? data.extended_data.path : '';
      this.selectedContent = array;
      this.editContentBox = true;
    },
    deleteContentClick(id) {
      this.$confirm('确定要删除这个文章么?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        contentDelete(id).then(res => {
          this.$message.success('删除成功');
          this.getList();
        })
      })
    },
    reload() {
      this.addContentBox = false;
      this.editContentBox = false;
      this.getList();
    },
    handleCurrentChange(val) {
      this.page = val
      this.getList()
    }
  }
}
</script>
