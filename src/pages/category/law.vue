<template>
<div>
  <category-table :cate="data"/>
</div>
</template>

<script>
import CategoryTable from '@/components/category/table.vue';
export default {
  components: { CategoryTable },
  data () {
    return {
      data: this.$route.params.id
    }
  },
  watch: {
    '$route': function (val, old) {
      
      this.data = val.params.id;
      console.log(this.data)
    }
  }
}
</script>

