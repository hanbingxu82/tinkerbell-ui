/*
 * @Author: your name
 * @Date: 2021-03-22 08:27:51
 * @LastEditTime: 2021-03-22 08:27:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbLink/index.js
 */
// 导入组件，组件必须声明 name
import tbLink from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbLink.install = function (Vue) {
    Vue.component(tbLink.name, tbLink)
}

export default tbLink