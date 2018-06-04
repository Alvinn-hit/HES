<template>
  <div>
    <el-row>
      <el-button>增加</el-button>
    </el-row>
    <el-table :data="list" border stripe style="width: 100%">
      <el-table-column prop="title" label="标题" ></el-table-column>
      <el-table-column prop="category.title" label="分类" ></el-table-column>
      <el-table-column prop="created_at" label="增加时间" ></el-table-column>
      <el-table-column prop="updated_at" label="修改时间" ></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="editUserClick(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { contentList } from '@/api/content';
export default {
  data () {
    return {
      list: []
    }
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      contentList({}).then(res => {
        this.list = res.items;
      })
    }
  }
}
</script>
