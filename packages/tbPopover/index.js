/*
 * @Author: your name
 * @Date: 2021-06-02 16:01:39
 * @LastEditTime: 2021-06-02 16:08:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbPopover/index.js
 */
import tbPopover from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbPopover.install = function (Vue) {
    Vue.component(tbPopover.name, tbPopover)
}

export default tbPopover