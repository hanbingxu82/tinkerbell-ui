/*
 * @Author: your name
 * @Date: 2021-04-29 16:29:42
 * @LastEditTime: 2021-04-29 16:29:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbColor/index.js
 */
// 导入组件，组件必须声明 name
import tbColor from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbColor.install = function (Vue) {
    Vue.component(tbColor.name, tbColor)
}

export default tbColor