/*
 * @Author: your name
 * @Date: 2021-05-19 14:08:11
 * @LastEditTime: 2021-05-19 14:23:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbPageHeader/index.js
 */
import tbPageHeader from "./main.vue";

// 为组件添加 install 方法，用于按需引入
tbPageHeader.install = function(Vue) {
  Vue.component(tbPageHeader.name, tbPageHeader);
};

export default tbPageHeader;