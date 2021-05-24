/*
 * @Author: your name
 * @Date: 2021-05-24 17:32:41
 * @LastEditTime: 2021-05-24 17:33:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbTimelineItem/index.js
 */
import tbTimelineItem from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbTimelineItem.install = function (Vue) {
    Vue.component(tbTimelineItem.name, tbTimelineItem)
}

export default tbTimelineItem