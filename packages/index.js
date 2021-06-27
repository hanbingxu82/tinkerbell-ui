/*
 * @Author: your name
 * @Date: 2021-03-16 14:05:32
 * @LastEditTime: 2021-06-27 17:05:48
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

import tbDivider from "./tbDivider/index"; // 引入分割线组件

import tbBadge from "./tbBadge/index"; // 引入右上角小红点组件

import tbAvatar from "./tbAvatar/index"; // 引入右上角小红点组件

import tbBacktop from "./tbBacktop/index"; // 引入回到顶部组件

import tbCarousel from "./tbCarousel/index"; // 引入轮播图组件
import tbCarouselItem from "./tbCarouselItem/index"; // 引入轮播图单个节点组件

import tbCard from "./tbCard/index"; // 引入卡片组件

import InfiniteScroll from "./v-infinite-scroll/index"; // 引入滚动组件

import tbShowmore from "./tbShowmore/index"; // 引入文本显示省略号  显示隐藏组件

import tbPageHeader from "./tbPageHeader/index"; // 引入返回页头组件

import tbRate from "./tbRate/index"; // 引入评分组件

import tbBreadcrumb from "./tbBreadcrumb/index"; // 引入面包屑组件
import tbBreadcrumbItem from "./tbBreadcrumbItem/index"; // 引入面包屑组件

import tbAlert from "./tbAlert/index"; // 引入警告组件

import tbProgress from "./tbProgress/index"; // 引入进度条组件

import tbInputNumber from "./tbInputNumber/index"; // 引入计数器组件

import tbSwitch from "./tbSwitch/index"; // 引入开关组件

import tbLoadingBar from "./tbLoadingBar/index"; // 引入进度条加载组件

import tbTimeline from "./tbTimeline/index"; // 引入时间线组件
import tbTimelineItem from "./tbTimelineItem/index"; // 引入时间线子项组件

import tbMessage from "./tbMessage/index"; // 引入message弹窗组件

import tbNotification from "./tbNotification/index"; // 引入notification通知组件

import tbStep from "./tbStep/index";
import tbSteps from "./tbSteps/index"; // 引入步骤条组件

import tbUpload from "./tbUpload/index"; // 引入上传组件

import tbTabs from "./tbTabs/index"; // 引入标签页组件

// import tbDropdown from './tbDropdown/index' // 引入下拉菜单组件

import tbPopover from "./tbPopover/index"; // 引入提示弹出框

import tbModal from "./tbModal/index"; // 引入弹出框

import tbInput from "./tbInput/index"; // 引入输入框

import { tbOptionGroup, tbOption, tbSelect } from "./tbSelect/index"; // 引入下拉选择框

import { tbDatePicker, tbTimePicker } from "./tbDatePicker/index"; // 引入  时间  日期选择器

import tbCascader from "./tbCascader/index"; // 引入级联选择器

import { tbMenu, tbMenuGroup, tbMenuItem, tbSubmenu } from "./tbMenu/index"; // 引入导航菜单组件

import { tbForm, tbFormItem } from "./tbForm/index"; // 引入表单组件

import tbPagination from "./tbPagination/index"; // 引入分页组件

import tbTableEazy from "./tbTableEazy/index"; // table组件

import "./iconfont/iconfont.css"; //导入icon图标
import "./global.css";
// 以数组的结构保存组件，便于遍历
const components = [
  Xiaoxiannan,
  tbButton,
  tbRow,
  tbCol,
  tbLink,
  tbContainer,
  tbAside,
  tbMain,
  tbHeader,
  tbFooter,
  tbRadio,
  tbRadioButton,
  tbRadioGroup,
  tbCheckbox,
  tbCheckboxGroup,
  tbCheckboxButton,
  tbTag,
  tbColor,
  tbColorPicker,
  tbCalendar,
  tbPopconfirm,
  tbDivider,
  tbBadge,
  tbAvatar,
  tbBacktop,
  tbCarousel,
  tbCarouselItem,
  tbCard,
  tbShowmore,
  tbPageHeader,
  tbRate,
  tbBreadcrumb,
  tbBreadcrumbItem,
  tbAlert,
  tbProgress,
  tbInputNumber,
  tbSwitch,
  tbTimeline,
  tbTimelineItem,
  tbSteps,
  tbStep,
  tbUpload,
  tbTabs,
  // tbDropdown,
  tbPopover,
  tbModal,
  tbInput,
  tbSelect,
  tbOption,
  tbOptionGroup,
  tbDatePicker,
  tbTimePicker,
  tbCascader,
  tbMenu,
  tbMenuGroup,
  tbMenuItem,
  tbSubmenu,
  tbForm,
  tbFormItem,
  tbPagination,
  tbTableEazy,
];

// 定义 install 方法
const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;

  /**
   * @description: 单选复选对应选中事件指令
   * @param {*}
   * @return {*}
   */

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
  /**
   * @description: 2021-05-19 调用element  InfiniteScroll组件
   * @param {*}
   * @return {*}
   */

  Vue.directive("InfiniteScroll", InfiniteScroll);
  // 遍历并注册全局组件
  components.map((component) => {
    Vue.component(component.name, component);
  });
  /**
   * @description: 2021-05-24 新增loading加载条组件
   * @param {*}
   * @return {*}
   */

  Vue.prototype.$loading = tbLoadingBar;
  /**
   * @description: 2021-05-25 新增message弹窗组件
   * @param {*}
   * @return {*}
   */

  Vue.prototype.$message = tbMessage.message;
  /**
   * @description: 2021-05-26 新增notify弹窗组件
   * @param {*}
   * @return {*}
   */

  Vue.prototype.$notify = tbNotification;
  /**
   * @description: 2021-06-10 新增alert弹窗组件
   * @param {*}
   * @return {*}
   */

  Vue.prototype.$alert = tbModal.alert;
  /**
   * @description: 2021-06-10 新增confirm确认取消弹窗组件
   * @param {*}
   * @return {*}
   */

  Vue.prototype.$confirm = tbModal.confirm;
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
