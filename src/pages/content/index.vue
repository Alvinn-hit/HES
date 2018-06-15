<template>
  <div>
    <content-table :cid="c_id"/>
  </div>
</template>

<script>
import ContentTable from '@/components/content/table';
export default {
  components: { ContentTable },
  data () {
    return {
      c_id: this.$route.params.id
    }
  },
  watch: {
    "$route": function (val, old) {
      this.c_id = val.params.id;
    }
  }
}
</script>
