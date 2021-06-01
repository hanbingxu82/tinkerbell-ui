/*
 * @Author: your name
 * @Date: 2021-05-27 16:59:49
 * @LastEditTime: 2021-05-27 16:59:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbUpload/index.js
 */
import tbUpload from './main.vue'

// 为组件添加 install 方法，用于按需引入
tbUpload.install = function (Vue) {
    Vue.component(tbUpload.name, tbUpload)
}

export default tbUpload