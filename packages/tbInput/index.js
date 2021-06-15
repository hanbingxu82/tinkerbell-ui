/*
 * @Author: your name
 * @Date: 2021-06-15 10:48:54
 * @LastEditTime: 2021-06-15 10:50:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbInput/index.js
 */
import tbInput from "./main.vue";

// 为组件添加 install 方法，用于按需引入
tbInput.install = function(Vue) {
  Vue.component(tbInput.name, tbInput);
};

export default tbInput;
