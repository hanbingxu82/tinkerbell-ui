/*
 * @Author: your name
 * @Date: 2021-04-29 11:29:11
 * @LastEditTime: 2021-04-29 11:29:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbTag/index.js
 */
// 导入组件，组件必须声明 name
import tbTag from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbTag.install = function (Vue) {
    Vue.component(tbTag.name, tbTag)
}

export default tbTag