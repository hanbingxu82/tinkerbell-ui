/*
 * @Author: your name
 * @Date: 2021-05-27 16:29:38
 * @LastEditTime: 2021-06-22 15:08:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbPagination/index.js
 */
import tbPagination from "./main.vue";

// 为组件添加 install 方法，用于按需引入
tbPagination.install = function(Vue) {
  Vue.component(tbPagination.name, tbPagination);
};

export default tbPagination;