/*
 * @Author: your name
 * @Date: 2021-05-27 13:29:55
 * @LastEditTime: 2021-05-27 13:29:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbStep/index.js
 */
import tbStep from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbStep.install = function (Vue) {
    Vue.component(tbStep.name, tbStep)
}

export default tbStep