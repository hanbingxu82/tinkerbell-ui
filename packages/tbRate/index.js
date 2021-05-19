/*
 * @Author: your name
 * @Date: 2021-05-19 15:22:18
 * @LastEditTime: 2021-05-19 15:25:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbRate/index.js
 */
// 导入组件，组件必须声明 name
import tbRate from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbRate.install = function (Vue) {
    Vue.component(tbRate.name, tbRate)
}

export default tbRate