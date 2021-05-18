/*
 * @Author: your name
 * @Date: 2021-05-18 09:48:06
 * @LastEditTime: 2021-05-18 09:48:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbCard/index.js
 */
// 导入组件，组件必须声明 name
import tbCard from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbCard.install = function (Vue) {
    Vue.component(tbCard.name, tbCard)
}

export default tbCard