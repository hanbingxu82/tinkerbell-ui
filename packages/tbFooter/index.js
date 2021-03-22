/*
 * @Author: your name
 * @Date: 2021-03-22 10:30:53
 * @LastEditTime: 2021-03-22 10:40:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbFooter/index.js
 */
// 导入组件，组件必须声明 name
import tbFotter from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbFotter.install = function (Vue) {
    Vue.component(tbFotter.name, tbFotter)
}

export default tbFotter