/*
 * @Author: your name
 * @Date: 2021-05-27 13:29:59
 * @LastEditTime: 2021-05-27 13:30:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbSteps/index.js
 */
import tbSteps from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbSteps.install = function (Vue) {
    Vue.component(tbSteps.name, tbSteps)
}

export default tbSteps