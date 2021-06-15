/*
 * @Author: your name
 * @Date: 2021-06-11 16:08:43
 * @LastEditTime: 2021-06-11 16:10:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbMenuGroup/index.js
 */
import tbMenuGroup from "./main.vue";

// 为组件添加 install 方法，用于按需引入
tbMenuGroup.install = function(Vue) {
  Vue.component(tbMenuGroup.name, tbMenuGroup);
};

export default tbMenuGroup;
