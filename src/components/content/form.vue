<template>
  <el-form ref="contentForm" :model="form" rules="contentRules" label-width="100px">
    <el-form-item label="标题" prop="title">
      <el-input v-model="form.title" />
    </el-form-item>
    <el-form-item label="分类">
      
    </el-form-item>
  </el-form>
</template>
