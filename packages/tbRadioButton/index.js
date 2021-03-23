/*
 * @Author: your name
 * @Date: 2021-03-23 13:54:20
 * @LastEditTime: 2021-03-23 13:54:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbRadioButton/index.js
 */
import tbRadioGroup from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbRadioGroup.install = function (Vue) {
    Vue.component(tbRadioGroup.name, tbRadioGroup)
}

export default tbRadioGroup