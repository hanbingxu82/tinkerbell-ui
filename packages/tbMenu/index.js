/*
 * @Author: your name
 * @Date: 2021-06-11 16:08:51
 * @LastEditTime: 2021-06-11 16:10:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbMenu/index.js
 */
import tbMenu from "./main.vue";

// 为组件添加 install 方法，用于按需引入
tbMenu.install = function(Vue) {
  Vue.component(tbMenu.name, tbMenu);
};

export default tbMenu;
