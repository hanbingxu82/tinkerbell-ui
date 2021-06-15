/*
 * @Author: your name
 * @Date: 2021-06-15 09:16:04
 * @LastEditTime: 2021-06-15 09:16:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbSubmenu/index.js
 */
import tbSubmenu from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbSubmenu.install = function (Vue) {
    Vue.component(tbSubmenu.name, tbSubmenu)
}

export default tbSubmenu