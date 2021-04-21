/*
 * @Author: your name
 * @Date: 2021-03-24 10:42:08
 * @LastEditTime: 2021-03-24 10:43:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbCheckboxGroup/index.js
 */
// 导入组件，组件必须声明 name
import tbCheckboxGroup from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbCheckboxGroup.install = function (Vue) {
    Vue.component(tbCheckboxGroup.name, tbCheckboxGroup)
}

export default tbCheckboxGroup