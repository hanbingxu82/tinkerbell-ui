/*
 * @Author: your name
 * @Date: 2021-08-26 16:21:59
 * @LastEditTime: 2021-08-26 16:23:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbAffix/index.js
 */
import tbAffix from "./main.vue";

// 为组件添加 install 方法，用于按需引入
tbAffix.install = function(Vue) {
  Vue.component(tbAffix.name, tbAffix);
};

export default tbAffix;
