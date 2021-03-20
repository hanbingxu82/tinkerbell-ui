/*
 * @Author: your name
 * @Date: 2021-03-16 14:05:32
 * @LastEditTime: 2021-03-19 17:46:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/inxex.js
 */

// 导入单个组件
import Xiaoxiannan from './Xiaoxiannan/index'
import tbButton from './tbButton/index'//tb-button 组件
import tbRow from './tbRow/index'//tb-row 组件
import tbCol from './tbCol/index'//tb-row 组件
import './global.css'
import './iconfont/iconfont.css'//导入icon图标
// 以数组的结构保存组件，便于遍历
const components = [
    Xiaoxiannan,
    tbButton,
    tbRow,
    tbCol,
]

// 定义 install 方法
const install = function (Vue) {
    if (install.installed) return
    install.installed = true
    // 遍历并注册全局组件
    components.map(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具备一个 install 方法
    install,
    // 组件列表
    ...components
}