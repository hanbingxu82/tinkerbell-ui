/*
 * @Author: your name
 * @Date: 2021-03-22 10:30:43
 * @LastEditTime: 2021-03-22 10:40:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbContainer/index.js
 */
// 导入组件，组件必须声明 name
import tbContainer from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbContainer.install = function (Vue) {
    Vue.component(tbContainer.name, tbContainer)
}

export default tbContainer