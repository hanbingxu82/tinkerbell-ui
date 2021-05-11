/*
 * @Author: your name
 * @Date: 2021-03-16 14:05:32
 * @LastEditTime: 2021-05-11 13:47:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/inxex.js
 */

// 导入单个组件
import Xiaoxiannan from "./Xiaoxiannan/index";
import tbButton from "./tbButton/index"; //tb-button 组件
import tbRow from "./tbRow/index"; //tb-row 组件
import tbCol from "./tbCol/index"; //tb-col 组件
import tbLink from "./tbLink/index"; //tb-link 组件
import tbContainer from "./tbContainer/index"; // tb-container容器父组件
import tbAside from "./tbAside/index"; // tb-aside容器左侧组件
import tbMain from "./tbMain/index"; // tb-main容器右侧内容组件
import tbHeader from "./tbHeader/index"; // tb-header容器头部组件
import tbFooter from "./tbFooter/index"; // tb-footer容器底部组件

import tbRadio from "./tbRadio/index"; // tb-radio容器单选框组件
import tbRadioButton from "./tbRadioButton/index"; // tb-radio-button容器单选框按钮组件
import tbRadioGroup from "./tbRadioGroup/index"; // tb-radio-group容器单选框组件

import tbCheckbox from "./tbCheckbox/index"; // tb-checkbox容器多选框组件
import tbCheckboxButton from "./tbCheckboxButton/index"; // tb-checkbox-button容器多选框按钮组件
import tbCheckboxGroup from "./tbCheckboxGroup/index"; // tb-checkbox-group容器单选框组件

import tbTag from "./tbTag/index"; // 引入tag标签组件

import tbColor from "./tbColor/index"; // 引入圆形色板
import tbColorPicker from "./tbColorPicker/index"; // 引入色板

import tbCalendar from "./tbCalendar/index"; // 引入日历组件

import tbPopconfirm from "./tbPopconfirm/index"; // 引入气泡确认框

import tbDivider from "./tbDivider/index";
import "./iconfont/iconfont.css"; //导入icon图标
import "./global.css";
// 以数组的结构保存组件，便于遍历
const components = [Xiaoxiannan, tbButton, tbRow, tbCol, tbLink, tbContainer, tbAside, tbMain, tbHeader, tbFooter, tbRadio, tbRadioButton, tbRadioGroup, tbCheckbox, tbCheckboxGroup, tbCheckboxButton, tbTag, tbColor, tbColorPicker, tbCalendar, tbPopconfirm, tbDivider];

// 定义 install 方法
const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  // Vue.radioGroup=""
  Vue.directive("inpClick", {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function(el) {
      // 聚焦元素
      el.onclick = function() {
        el.getElementsByTagName("input")[0].click();
      };
    },
    unbind(el) {
      // 清除自定义指令事件
      // 只调用一次，即在指令与元素解绑时调用
      el.onclick = null;
    },
  });
  // 遍历并注册全局组件
  components.map((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...components,
};
