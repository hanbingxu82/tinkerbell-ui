/*
 * @Author: your name
 * @Date: 2021-05-11 13:28:15
 * @LastEditTime: 2021-05-11 13:46:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbDivider/index.js
 */
import tbDivider from "./main.vue";

// 为组件添加 install 方法，用于按需引入
tbDivider.install = function(Vue) {
  Vue.component(tbDivider.name, tbDivider);
};

export default tbDivider;
