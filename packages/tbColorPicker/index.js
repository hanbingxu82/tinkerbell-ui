/*
 * @Author: your name
 * @Date: 2021-04-29 16:45:04
 * @LastEditTime: 2021-04-29 16:55:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbColorPicker/index.js
 */
import tbColorPicker from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbColorPicker.install = function (Vue) {
    Vue.component(tbColorPicker.name, tbColorPicker)
}

export default tbColorPicker