/*
 * @Author: your name
 * @Date: 2021-06-16 15:56:22
 * @LastEditTime: 2021-06-17 09:49:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbSelect/index.js
 */
import tbSelect from "./select";
import tbOption from "./option";
import tbOptionGroup from "./option-group";

/* istanbul ignore next */
tbSelect.install = function(Vue) {
  Vue.component(tbSelect.name, tbSelect);
};
tbOption.install = function(Vue) {
  Vue.component(tbOption.name, tbOption);
};
tbOptionGroup.install = function(Vue) {
  Vue.component(tbOptionGroup.name, tbOptionGroup);
};
export { tbOptionGroup, tbOption, tbSelect };
