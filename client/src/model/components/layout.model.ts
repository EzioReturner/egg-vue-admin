export interface MenuModel {
  name: string;
  icon: string;
  path: string;
  component: any;
  children?: any;
  hidden?: boolean;
  authority?: string[];
}
