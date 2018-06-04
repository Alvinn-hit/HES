<template>
<div>
{{cate}}
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    cate: {
      type: String,
      default: '123123'
    }
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    console.log('123')
    console.log(this.list)
  },
})
</script>

