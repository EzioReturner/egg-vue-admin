<template>
  <BasicLayout>
    <!-- <template #nav-siteTitle>
      <div>123123123</div>
    </template>-->
  </BasicLayout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BasicLayout from '@components/Layout/BasicLayout.vue';

@Component({
  components: {
    //@ts-ignore
    BasicLayout
  }
})
export default class Skeleton extends Vue {}
</script>
