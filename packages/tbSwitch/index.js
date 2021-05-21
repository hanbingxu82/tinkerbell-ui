/*
 * @Author: your name
 * @Date: 2021-05-21 14:44:11
 * @LastEditTime: 2021-05-21 14:44:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbSwitch/index.js
 */
import tbSwitch from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbSwitch.install = function (Vue) {
    Vue.component(tbSwitch.name, tbSwitch)
}

export default tbSwitch