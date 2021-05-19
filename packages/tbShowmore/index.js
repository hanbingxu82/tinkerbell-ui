/*
 * @Author: your name
 * @Date: 2021-05-19 10:53:58
 * @LastEditTime: 2021-05-19 10:57:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbShowmore/index.js
 */
import tbShowmore from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbShowmore.install = function (Vue) {
    Vue.component(tbShowmore.name, tbShowmore)
}

export default tbShowmore