/*
 * @Author: your name
 * @Date: 2021-03-19 16:00:33
 * @LastEditTime: 2021-03-19 16:00:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbRow/index.js
 */
// 导入组件，组件必须声明 name
import tbRow from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbRow.install = function (Vue) {
    Vue.component(tbRow.name, tbRow)
}

export default tbRow