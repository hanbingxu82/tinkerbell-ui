/*
 * @Author: your name
 * @Date: 2021-05-21 13:13:30
 * @LastEditTime: 2021-05-21 13:13:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbInputNumber/index.js
 */
import tbInputNumber from "./main.vue";

// 为组件添加 install 方法，用于按需引入
tbInputNumber.install = function(Vue) {
  Vue.component(tbInputNumber.name, tbInputNumber);
};

export default tbInputNumber;
