/*
 * @Author: your name
 * @Date: 2021-05-06 13:16:17
 * @LastEditTime: 2021-05-06 13:19:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbCalendar/index.js
 */
// 导入组件，组件必须声明 name
import tbCalendar from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbCalendar.install = function (Vue) {
    Vue.component(tbCalendar.name, tbCalendar)
}

export default tbCalendar