<script lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LuckyueHeader from './unit/Header.vue';
import LuckyueNavigator from './unit/Navigator.vue';
import LuckyueMainContainer from './unit/MainContainer.vue';
import style from './BasicLayout.module.scss';

@Component
export default class BasicLayout extends Vue {
  public collapsed: boolean = false;

  mounted() {}

  createSlot(v_type: string): any {
    const { $scopedSlots } = this;
    if (!$scopedSlots || JSON.stringify($scopedSlots) === '{}') {
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
      } else {
        if (v_type === type) {
          const scope_slot = $scopedSlots[slot];
          scope_slot && (total[slotName] = (props: any) => scope_slot(props));
          return total;
        }
      }
    }, {});
  }

  render(h: any) {
    return (
      <div class={style.layout}>
        <LuckyueNavigator
          {...{
            scopedSlots: this.createSlot('nav')
          }}
        />
        <div class={[style.container, this.collapsed ? style.collapsed : '']}>
          <LuckyueHeader
            {...{
              scopedSlots: this.createSlot('header')
            }}
          />
          <LuckyueMainContainer />
        </div>
      </div>
    );
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
