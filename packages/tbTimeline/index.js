/*
 * @Author: your name
 * @Date: 2021-05-24 17:22:59
 * @LastEditTime: 2021-05-24 17:23:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbTimeline/index.js
 */
// 导入组件，组件必须声明 name
import tbTimeline from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbTimeline.install = function (Vue) {
    Vue.component(tbTimeline.name, tbTimeline)
}

export default tbTimeline