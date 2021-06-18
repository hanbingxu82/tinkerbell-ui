/*
 * @Author: your name
 * @Date: 2021-06-18 15:51:01
 * @LastEditTime: 2021-06-18 15:52:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbForm/index.js
 */
import tbForm from "./form.vue";
import tbFormItem from "./form-item.vue";

tbForm.Item = tbFormItem;

tbForm.install = function(Vue) {
  Vue.component(tbForm.name, tbForm);
};
tbFormItem.install = function(Vue) {
  Vue.component(tbForm.name, tbForm);
};
export { tbForm, tbFormItem }
