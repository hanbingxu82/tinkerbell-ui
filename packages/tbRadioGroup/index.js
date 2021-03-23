/*
 * @Author: your name
 * @Date: 2021-03-22 18:20:03
 * @LastEditTime: 2021-03-22 18:20:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbRadioGroup/index.js
 */
// 导入组件，组件必须声明 name
import tbRadioGroup from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbRadioGroup.install = function (Vue) {
    Vue.component(tbRadioGroup.name, tbRadioGroup)
}

export default tbRadioGroup