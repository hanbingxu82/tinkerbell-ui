/*
 * @Author: your name
 * @Date: 2021-05-07 10:54:28
 * @LastEditTime: 2021-05-07 10:57:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbPopconfirm/index.js
 */
// 导入组件，组件必须声明 name
import tbPopconfirm from "./main.vue";

// 为组件添加 install 方法，用于按需引入
tbPopconfirm.install = function(Vue) {
  Vue.component(tbPopconfirm.name, tbPopconfirm);
};

export default tbPopconfirm;
