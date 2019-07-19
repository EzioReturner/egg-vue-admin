<script lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';
import style from './Header.module.scss';

@Component
export default class LuckyueHeader extends Vue {
  // onClick() {
  //   const { $listeners, item } = this;
  //   const { click: onClick } = $listeners;
  //   onClick && onClick(item);
  // }
  handleCollapse() {}

  render(h: any) {
    return (
      <div class={style.header}>
        <el-button
          type="text"
          icon="el-icon-d-arrow-left"
          class={style.collapsedIcon}
          onClick={this.handleCollapse}
        />
      </div>
    );
  }
}
</script>
