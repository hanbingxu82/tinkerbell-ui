/*
 * @Author: your name
 * @Date: 2021-05-18 09:48:06
 * @LastEditTime: 2021-05-18 09:48:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbCard/index.js
 */
// 导入组件，组件必须声明 name
import tbCheckbox from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbCheckbox.install = function (Vue) {
    Vue.component(tbCheckbox.name, tbCheckbox)
}

export default tbCheckbox