<script lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';
import style from './Navigator.module.scss';
// @ts-ignore
import { constantRouterMap } from '@config/routes';
//@ts-ignore
import { MenuModel } from '@model/components/layout.model';

const routes = constantRouterMap[0].children;
@Component
export default class LuckyueNavigator extends Vue {
  @Prop(Object) readonly editStyle: any;
  private collapsed: boolean = false;
  private openMenu: string[] = [];

  public mounted() {
    this.openMenu = this.checkOpenMenu();
  }

  public get activeIndex(): string {
    return `/${this.openMenu.join('/')}`;
  }

  /**
   * 默认开启菜单判断
   */
  checkOpenMenu(): string[] {
    const { path, params } = this.$route;
    const paramsValue = JSON.stringify(params) !== '{}' ? Object.values(params) : [];
    return path.split('/').filter((chip: string) => {
      return chip && !paramsValue.includes(chip);
    });
  }

  render(h: any) {
    const { $scopedSlots, editStyle } = this;

    /**
     * SiteTitle 插槽渲染判断
     */
    const SiteTitle = $scopedSlots.siteTitle ? (props => $scopedSlots.siteTitle(props))() : null;

    /**
     * 菜单数据过滤方法
     */
    const getNavMenu = (_routes: MenuModel[], parentPath?: string) => {
      if (!_routes.length) {
        return;
      }
      return _routes
        .filter((menu: MenuModel) => {
          const { hidden, authority } = menu;
          if (!hidden) {
            return true;
          }
          return false;
        })
        .map((menu: MenuModel) => generateMenu(menu, parentPath));
    };

    /**
     * 生成菜单dom方法
     */
    const generateMenu = (menu: any, parentPath?: string) => {
      const { children, name, icon, path } = menu;
      const _path = parentPath ? parentPath + `/${path}` : `/${path}`;

      if (children && children.length) {
        return (
          <el-submenu index={path}>
            <template slot="title">
              {icon && <i class={`el-icon-${icon}`}></i>}
              <span>{name}</span>
            </template>
            {getNavMenu(children, _path)}
          </el-submenu>
        );
      }
      return (
        <el-menu-item index={_path}>
          {icon && <i class={`el-icon-${icon}`}></i>}
          {name}
        </el-menu-item>
      );
    };

    /**
     * NavMenu 插槽渲染判断
     */
    const NavMenu = $scopedSlots.NavMenu ? (
      (props => $scopedSlots.NavMenu(props))()
    ) : (
      <el-menu
        collapsed={this.collapsed}
        router={true}
        class="asideMenu"
        style="margin-top:20px;"
        default-active={this.activeIndex}
        default-openeds={this.openMenu}
      >
        {routes && getNavMenu(routes)}
      </el-menu>
    );

    return (
      <aside class={style.navigator} style={editStyle}>
        {SiteTitle}
        <div class={style.menuContainer}>{NavMenu}</div>
      </aside>
    );
  }
}
</script>
