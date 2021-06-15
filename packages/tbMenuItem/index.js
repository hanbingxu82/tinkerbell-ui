/*
 * @Author: your name
 * @Date: 2021-06-11 16:08:56
 * @LastEditTime: 2021-06-11 16:10:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbMenuItem/index.js
 */
import tbMenuItem from "./main.vue";

// 为组件添加 install 方法，用于按需引入
tbMenuItem.install = function(Vue) {
  Vue.component(tbMenuItem.name, tbMenuItem);
};

export default tbMenuItem;
