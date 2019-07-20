<script lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';
import style from './MainContainer.module.scss';

@Component
export default class LuckyueMainContainer extends Vue {
  @Prop(Object) readonly editStyle: any;
  render(h: any) {
    return (
      <main class={style.viewBody} style={this.editStyle}>
        <router-view />
      </main>
    );
  }
}
</script>
