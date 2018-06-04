<template>
<div>
  <category-table cate="10"/>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CategoryTable from '@/components/category/table.vue';

@Component({
  components: { CategoryTable }
})
export default class Law extends Vue {

}
</script>
