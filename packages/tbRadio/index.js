/*
 * @Author: your name
 * @Date: 2021-03-22 13:47:47
 * @LastEditTime: 2021-03-22 14:01:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbRadio/index.js
 */
// 导入组件，组件必须声明 name
import tbRadio from "./main.vue";

// 为组件添加 install 方法，用于按需引入
tbRadio.install = function(Vue) {
  Vue.component(tbRadio.name, tbRadio);
};

export default tbRadio;
