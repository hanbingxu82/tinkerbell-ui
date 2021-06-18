/*
 * @Author: your name
 * @Date: 2021-06-11 16:08:51
 * @LastEditTime: 2021-06-18 14:25:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbMenu/index.js
 */
import tbMenu from "./main.vue";
import tbMenuGroup from './menu-group.vue'
import tbMenuItem from './menu-item.vue'
import tbSubmenu from "./submenu.vue";

// 为组件添加 install 方法，用于按需引入
tbMenu.install = function(Vue) {
  Vue.component(tbMenu.name, tbMenu);
};
tbMenuGroup.install = function(Vue) {
  Vue.component(tbMenuGroup.name, tbMenuGroup);
};
tbMenuItem.install = function(Vue) {
  Vue.component(tbMenuItem.name, tbMenuItem);
};
tbSubmenu.install = function(Vue) {
  Vue.component(tbSubmenu.name, tbSubmenu);
};

export {tbMenu,tbMenuGroup,tbMenuItem,tbSubmenu}
