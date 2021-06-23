/*
 * @Author: your name
 * @Date: 2021-06-22 16:33:05
 * @LastEditTime: 2021-06-22 16:47:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbTableEazy/index.js
 */
import tbTableEazy from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbTableEazy.install = function (Vue) {
    Vue.component(tbTableEazy.name, tbTableEazy)
}

export default tbTableEazy