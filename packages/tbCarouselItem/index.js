/*
 * @Author: your name
 * @Date: 2021-05-18 09:53:21
 * @LastEditTime: 2021-05-18 10:45:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbCarouselItem/index.js
 */
import tbCarouselItem from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbCarouselItem.install = function (Vue) {
    Vue.component(tbCarouselItem.name, tbCarouselItem)
}

export default tbCarouselItem