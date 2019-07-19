<script lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';
import style from './MainContainer.module.scss';

@Component
export default class LuckyueMainContainer extends Vue {
  render(h: any) {
    return (
      <div class={style.viewBody}>
        <router-view />
      </div>
    );
  }
}
</script>
