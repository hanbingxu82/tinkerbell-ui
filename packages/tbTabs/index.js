/*
 * @Author: your name
 * @Date: 2021-06-01 15:09:13
 * @LastEditTime: 2021-06-01 15:17:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbTabs/index.js
 */
// 导入组件，组件必须声明 name
import tbTabs from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbTabs.install = function (Vue) {
    Vue.component(tbTabs.name, tbTabs)
}

export default tbTabs