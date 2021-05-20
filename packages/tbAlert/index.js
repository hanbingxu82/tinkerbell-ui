/*
 * @Author: your name
 * @Date: 2021-05-20 10:23:50
 * @LastEditTime: 2021-05-20 10:57:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbAlert/index.js
 */
import tbAlert from "./main.vue";

// 为组件添加 install 方法，用于按需引入
tbAlert.install = function(Vue) {
  Vue.component(tbAlert.name, tbAlert);
};

export default tbAlert;
