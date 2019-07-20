<template>
  <BasicLayout :editStyle="editStyle">
    <template #nav-siteTitle>
      <a :class="style.controlBut" target="_blank" rel="noopener noreferrer">
        <span :class="style.title">Luckyue</span>
      </a>
    </template>
  </BasicLayout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BasicLayout from '@components/Layout/BasicLayout.vue';
import _style from './index.module.scss';

@Component({
  components: {
    //@ts-ignore
    BasicLayout
  }
})
export default class Skeleton extends Vue {
  private style: any = _style;
  private editStyle: any = {
    headerStyle: {
      color: 'blue'
    },
    navStyle: {
      color: 'blue'
    },
    mainStyle: {}
  };
}
</script>
