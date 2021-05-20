/*
 * @Author: your name
 * @Date: 2021-05-20 09:28:53
 * @LastEditTime: 2021-05-20 09:47:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbBreadcrumb/index.js
 */
import tbBreadcrumb from "./main.vue";

// 为组件添加 install 方法，用于按需引入
tbBreadcrumb.install = function(Vue) {
  Vue.component(tbBreadcrumb.name, tbBreadcrumb);
};

export default tbBreadcrumb;
