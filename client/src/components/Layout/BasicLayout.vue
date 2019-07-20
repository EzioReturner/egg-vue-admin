<script lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LuckyueHeader from './unit/Header.vue';
import LuckyueNavigator from './unit/Navigator.vue';
import LuckyueMainContainer from './unit/MainContainer.vue';
import style from './BasicLayout.module.scss';
//@ts-ignore
import { header } from '@config/setting';

const { mode: header_mode } = header;
@Component
export default class BasicLayout extends Vue {
  @Prop(Object) readonly editStyle: any;
  public collapsed: boolean = false;
  mounted() {}

  /**
   * 获取 slots 方法
   */
  getSlots(): any {
    const { $scopedSlots } = this;

    if (!$scopedSlots) {
      return;
    }
    return Object.keys($scopedSlots).reduce((total: any, slot: string) => {
      const [type, slotName] = slot.split('-');
      if (!['header', 'nav'].includes(type)) {
        console.warn('Luckyue', '[BasicLayout]:', '组件未按约定传参');
        return;
      }
      if (!slotName) {
        console.warn('Luckyue', '[BasicLayout]:', '组件未按约定传参');
        return;
      }
      !total[`${type}Slots`] && (total[`${type}Slots`] = {});

      const scope_slot = $scopedSlots[slot];
      scope_slot && (total[`${type}Slots`][slotName] = (props: any) => scope_slot(props));
      return total;
    }, {});
  }

  render(h: any) {
    const { navSlots, headerSlots } = this.getSlots();

    const { navStyle, headerStyle, mainStyle } = this.editStyle;

    const Navigator = (
      <LuckyueNavigator
        {...{
          scopedSlots: navSlots
        }}
        props={{
          editStyle: navStyle
        }}
      />
    );

    const Header = (
      <LuckyueHeader
        {...{
          scopedSlots: headerSlots,
          editStyle: headerStyle
        }}
      />
    );

    const MainContainer = <LuckyueMainContainer {...{ editStyle: mainStyle }} />;

    const SplitLayout = (
      <section class={style.splitLayout}>
        {Navigator}
        <section class={[style.container, this.collapsed ? style.collapsed : '']}>
          {Header}
          {MainContainer}
        </section>
      </section>
    );

    const InlineLayout = (
      <section class={style.inlineLayout}>
        {Header}
        <section class={style.container}>
          {Navigator}
          {MainContainer}
        </section>
      </section>
    );

    return header_mode === 'split' ? SplitLayout : InlineLayout;
  }
}
</script>

<style lang="scss">
@keyframes nprogress-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
