/*
 * @Author: your name
 * @Date: 2021-03-22 10:31:02
 * @LastEditTime: 2021-03-22 10:40:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbHeader/index.js
 */
// 导入组件，组件必须声明 name
import tbHeader from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbHeader.install = function (Vue) {
    Vue.component(tbHeader.name, tbHeader)
}

export default tbHeader