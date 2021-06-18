/*
 * @Author: your name
 * @Date: 2021-06-18 13:10:44
 * @LastEditTime: 2021-06-18 13:11:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbCascader/index.js
 */
import tbCascader from './main.vue'

/* istanbul ignore next */
tbCascader.install = function (Vue) {
  Vue.component(tbCascader.name, tbCascader)
}

export default tbCascader