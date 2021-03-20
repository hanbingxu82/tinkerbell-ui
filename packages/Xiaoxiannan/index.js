/*
 * @Author: your name
 * @Date: 2021-03-16 14:03:31
 * @LastEditTime: 2021-03-16 14:04:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/index.js
 */
// 导入组件，组件必须声明 name
import Xiaoxiannan from './main.vue'

// 为组件添加 install 方法，用于按需引入
Xiaoxiannan.install = function (Vue) {
    Vue.component(Xiaoxiannan.name, Xiaoxiannan)
}

export default Xiaoxiannan