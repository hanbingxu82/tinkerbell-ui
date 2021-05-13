/*
 * @Author: your name
 * @Date: 2021-05-13 10:41:13
 * @LastEditTime: 2021-05-13 10:43:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbAvatar/index.js
 */
import tbAvatar from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbAvatar.install = function (Vue) {
    Vue.component(tbAvatar.name, tbAvatar)
}

export default tbAvatar