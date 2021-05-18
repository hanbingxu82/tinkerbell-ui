/*
 * @Author: your name
 * @Date: 2021-05-18 09:50:27
 * @LastEditTime: 2021-05-18 10:39:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbCarousel/index.js
 */
// 导入组件，组件必须声明 name
import tbCarousel from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbCarousel.install = function (Vue) {
    Vue.component(tbCarousel.name, tbCarousel)
}

export default tbCarousel