/*
 * @Author: your name
 * @Date: 2021-03-24 08:09:03
 * @LastEditTime: 2021-03-24 10:43:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbCheckbox/index.js
 */
// 导入组件，组件必须声明 name
import tbCheckboxButton from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbCheckboxButton.install = function (Vue) {
    Vue.component(tbCheckboxButton.name, tbCheckboxButton)
}

export default tbCheckboxButton