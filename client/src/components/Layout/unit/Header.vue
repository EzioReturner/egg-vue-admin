<script lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';
import style from './Header.module.scss';

@Component
export default class LuckyueHeader extends Vue {
  @Prop(Object) readonly editStyle: any;
  // onClick() {
  //   const { $listeners, item } = this;
  //   const { click: onClick } = $listeners;
  //   onClick && onClick(item);
  // }
  handleCollapse() {}

  render(h: any) {
    const { $scopedSlots, editStyle } = this;

    /**
     * SiteTitle 插槽渲染判断
     */
    const SiteTitle = $scopedSlots.siteTitle ? (props => $scopedSlots.siteTitle(props))() : null;

    return (
      <header class={style.header} style={editStyle}>
        {SiteTitle}
        <el-button
          type="text"
          icon="el-icon-d-arrow-left"
          class={style.collapsedIcon}
          onClick={this.handleCollapse}
        />
      </header>
    );
  }
}
</script>
