/*
 * @Author: your name
 * @Date: 2021-05-18 17:25:09
 * @LastEditTime: 2021-05-19 10:06:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/InfiniteScroll/index.js
 */
// 导入组件，组件必须声明 name

import InfiniteScroll from "./main";

const install = function(Vue) {
  Vue.directive("InfiniteScroll", InfiniteScroll);
};

if (window.Vue) {
  window.infiniteScroll = InfiniteScroll;
  Vue.use(install); // eslint-disable-line
}

InfiniteScroll.install = install;
export default InfiniteScroll;
