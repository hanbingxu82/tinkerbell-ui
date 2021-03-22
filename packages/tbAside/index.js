/*
 * @Author: your name
 * @Date: 2021-03-22 10:31:27
 * @LastEditTime: 2021-03-22 10:40:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbAside/index.js
 */
// 导入组件，组件必须声明 name
import tbAside from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbAside.install = function (Vue) {
    Vue.component(tbAside.name, tbAside)
}

export default tbAside