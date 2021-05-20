/*
 * @Author: your name
 * @Date: 2021-05-20 09:29:37
 * @LastEditTime: 2021-05-20 09:47:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbBreadcrumbItem/index.js
 */
import tbBreadcrumbItem from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbBreadcrumbItem.install = function (Vue) {
    Vue.component(tbBreadcrumbItem.name, tbBreadcrumbItem)
}

export default tbBreadcrumbItem