/*
 * @Author: your name
 * @Date: 2021-05-20 14:14:49
 * @LastEditTime: 2021-05-20 14:17:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbProgress/index.js
 */
import tbProgress from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbProgress.install = function (Vue) {
    Vue.component(tbProgress.name, tbProgress)
}

export default tbProgress