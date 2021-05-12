/*
 * @Author: your name
 * @Date: 2021-05-12 21:58:51
 * @LastEditTime: 2021-05-12 22:08:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbBadge/index.js
 */
// 导入组件，组件必须声明 name
import tbBadge from "./main.vue";

// 为组件添加 install 方法，用于按需引入
tbBadge.install = function(Vue) {
  Vue.component(tbBadge.name, tbBadge);
};

export default tbBadge;
