/*
 * @Author: your name
 * @Date: 2021-03-19 16:00:33
 * @LastEditTime: 2021-03-19 17:32:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbCol/index.js
 */
// 导入组件，组件必须声明 name
import tbCol from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbCol.install = function (Vue) {
    Vue.component(tbCol.name, tbCol)
}

export default tbCol