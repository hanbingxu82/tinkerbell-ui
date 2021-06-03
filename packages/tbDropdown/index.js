/*
 * @Author: your name
 * @Date: 2021-06-02 14:47:01
 * @LastEditTime: 2021-06-02 15:38:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbDropdown/index.js
 */
import tbDropdown from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbDropdown.install = function (Vue) {
    Vue.component(tbDropdown.name, tbDropdown)
}

export default tbDropdown