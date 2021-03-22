/*
 * @Author: your name
 * @Date: 2021-03-22 10:31:17
 * @LastEditTime: 2021-03-22 10:41:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbMain/index.js
 */
// 导入组件，组件必须声明 name
import tbMain from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbMain.install = function (Vue) {
    Vue.component(tbMain.name, tbMain)
}

export default tbMain