/*
 * @Author: your name
 * @Date: 2021-05-13 13:56:36
 * @LastEditTime: 2021-05-13 13:56:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbBackTop/index.js
 */
import tbBacktop from "./main.vue";

// 为组件添加 install 方法，用于按需引入
tbBacktop.install = function(Vue) {
  Vue.component(tbBacktop.name, tbBacktop);
};

export default tbBacktop;
