/*
 * @Author: your name
 * @Date: 2021-03-16 13:46:44
 * @LastEditTime: 2022-08-25 09:04:11
 * @LastEditors: hanbingxu
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Page from "../views/Page.vue";
import Components from "../views/Components.vue";
import tinkerbellUI from "../../packages/index";

import testHome from "../../examples/views/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Page",
    component: Page,
  },
  {
    path: "/testHome",
    name: "testHome",
    component: testHome,
  },
  {
    path: "/Components",
    name: "Components",
    component: Components,
    children: [
      {
        path: "Introduction",
        name: "Introduction",
        component: () => import("../views/DevelopmentGuide/DevelopmentGuide/Introduction.vue"), // 开发指南-->tinkerbell-ui介绍
      },
      {
        path: "Installs",
        name: "Installs",
        component: () => import("../views/DevelopmentGuide/DevelopmentGuide/Installs.vue"), // 开发指南-->tinkerbell-ui安装
      },
      {
        path: "QuickStart",
        name: "QuickStart",
        component: () => import("../views/DevelopmentGuide/DevelopmentGuide/QuickStart.vue"), // 开发指南-->tinkerbell-ui快速开始
      },
      {
        path: "UpdateLog",
        name: "UpdateLog",
        component: () => import("../views/DevelopmentGuide/DevelopmentGuide/UpdateLog.vue"), // 开发指南-->tinkerbell-ui更新日志
      },
      {
        path: "Layout",
        name: "Layout",
        component: () => import("../views/ComponentsLibrary/Foundation/Layout.vue"), // 组件-->基础-->布局
      },
      {
        path: "Container",
        name: "Container",
        component: () => import("../views/ComponentsLibrary/Foundation/Container.vue"), // 组件-->基础-->布局容器
      },
      {
        path: "Icon",
        name: "Icon",
        component: () => import("../views/ComponentsLibrary/Foundation/Icon.vue"), // 组件-->基础-->图标
      },
      {
        path: "Button",
        name: "Button",
        component: () => import("../views/ComponentsLibrary/Foundation/Button.vue"), // 组件-->基础-->按钮
      },
      {
        path: "Link",
        name: "Link",
        component: () => import("../views/ComponentsLibrary/Foundation/Link.vue"), // 组件-->基础-->文字链接
      },
      // Forms  表单部分
      {
        path: "Radio",
        name: "Radio",
        component: () => import("../views/ComponentsLibrary/Forms/Radio.vue"), // 组件-->表单-->单选
      },
      {
        path: "Checkbox",
        name: "Checkbox",
        component: () => import("../views/ComponentsLibrary/Forms/Checkbox.vue"), // 组件-->表单-->多选
      },
      {
        path: "Input",
        name: "Input",
        component: () => import("../views/ComponentsLibrary/Forms/Input.vue"), // 组件-->表单-->文本框
      },
      {
        path: "InputNumber",
        name: "InputNumber",
        component: () => import("../views/ComponentsLibrary/Forms/InputNumber.vue"), // 组件-->表单-->计数器
      },
      {
        path: "Select",
        name: "Select",
        component: () => import("../views/ComponentsLibrary/Forms/Select.vue"), // 组件-->表单-->选择器
      },
      {
        path: "Cascader",
        name: "Cascader",
        component: () => import("../views/ComponentsLibrary/Forms/Cascader.vue"), // 组件-->表单-->级联选择器
      },
      {
        path: "Switch",
        name: "Switch",
        component: () => import("../views/ComponentsLibrary/Forms/Switch.vue"), // 组件-->表单-->开关
      },
      {
        path: "DatePicker",
        name: "DatePicker",
        component: () => import("../views/ComponentsLibrary/Forms/DatePicker.vue"), // 组件-->表单-->日期选择器
      },
      {
        path: "TimePicker",
        name: "TimePicker",
        component: () => import("../views/ComponentsLibrary/Forms/TimePicker.vue"), // 组件-->表单-->时间选择器
      },
      {
        path: "Upload",
        name: "Upload",
        component: () => import("../views/ComponentsLibrary/Forms/Upload.vue"), // 组件-->表单-->上传
      },
      {
        path: "Rate",
        name: "Rate",
        component: () => import("../views/ComponentsLibrary/Forms/Rate.vue"), // 组件-->表单-->评分
      },
      {
        path: "ColorPicker",
        name: "ColorPicker",
        component: () => import("../views/ComponentsLibrary/Forms/ColorPicker.vue"), // 组件-->表单-->颜色选择器
      },
      {
        path: "Form",
        name: "Form",
        component: () => import("../views/ComponentsLibrary/Forms/Form.vue"), // 组件-->表单-->表单
      },
      {
        path: "TableEazy",
        name: "TableEazy",
        component: () => import("../views/ComponentsLibrary/Datas/TableEazy.vue"), // 组件-->数据-->表格
      },
      {
        path: "Tag",
        name: "Tag",
        component: () => import("../views/ComponentsLibrary/Datas/Tag.vue"), // 组件-->数据-->标签
      },
      {
        path: "Progress",
        name: "Progress",
        component: () => import("../views/ComponentsLibrary/Datas/Progress.vue"), // 组件-->数据-->进度条
      },
      {
        path: "Pagination",
        name: "Pagination",
        component: () => import("../views/ComponentsLibrary/Datas/Pagination.vue"), // 组件-->数据-->分页
      },
      {
        path: "Badge",
        name: "Badge",
        component: () => import("../views/ComponentsLibrary/Datas/Badge.vue"), // 组件-->数据-->标记
      },
      {
        path: "Avatar",
        name: "Avatar",
        component: () => import("../views/ComponentsLibrary/Datas/Avatar.vue"), // 组件-->数据-->头像
      },
      {
        path: "Showmore",
        name: "Showmore",
        component: () => import("../views/ComponentsLibrary/Datas/Showmore.vue"), // 组件-->数据-->文本省略
      },
      {
        path: "Alert",
        name: "Alert",
        component: () => import("../views/ComponentsLibrary/Notices/Alert.vue"), // 组件-->通知-->警告
      },
      {
        path: "LoadingBar",
        name: "LoadingBar",
        component: () => import("../views/ComponentsLibrary/Notices/LoadingBar.vue"), // 组件-->通知-->加载条
      },
      {
        path: "Message",
        name: "Message",
        component: () => import("../views/ComponentsLibrary/Notices/Message.vue"), // 组件-->通知-->消息提示
      },
      {
        path: "MessageBox",
        name: "MessageBox",
        component: () => import("../views/ComponentsLibrary/Notices/MessageBox.vue"), // 组件-->通知-->弹框
      },
      {
        path: "Notification",
        name: "Notification",
        component: () => import("../views/ComponentsLibrary/Notices/Notification.vue"), // 组件-->通知-->文本省略
      },
      {
        path: "Navmenu",
        name: "Navmenu",
        component: () => import("../views/ComponentsLibrary/Navigations/Navmenu.vue"), // 组件-->导航-->导航菜单
      },
      {
        path: "Tabs",
        name: "Tabs",
        component: () => import("../views/ComponentsLibrary/Navigations/Tabs.vue"), // 组件-->导航-->标签页
      },
      {
        path: "Breadcrumb",
        name: "Breadcrumb",
        component: () => import("../views/ComponentsLibrary/Navigations/Breadcrumb.vue"), // 组件-->导航-->面包屑
      },
      {
        path: "PageHeader",
        name: "PageHeader",
        component: () => import("../views/ComponentsLibrary/Navigations/PageHeader.vue"), // 组件-->导航-->页头
      },
      {
        path: "Steps",
        name: "Steps",
        component: () => import("../views/ComponentsLibrary/Navigations/Steps.vue"), // 组件-->导航-->步骤条
      },

      {
        path: "Modal",
        name: "Modal",
        component: () => import("../views/ComponentsLibrary/Others/Modal.vue"), // 组件-->其他-->模态框
      },
      {
        path: "Popover",
        name: "Popover",
        component: () => import("../views/ComponentsLibrary/Others/Popover.vue"), // 组件-->其他-->气泡弹窗
      },
      {
        path: "Popconfirm",
        name: "Popconfirm",
        component: () => import("../views/ComponentsLibrary/Others/Popconfirm.vue"), // 组件-->其他-->气泡确认框
      },
      {
        path: "Card",
        name: "Card",
        component: () => import("../views/ComponentsLibrary/Others/Card.vue"), // 组件-->其他-->卡片
      },
      {
        path: "Carousel",
        name: "Carousel",
        component: () => import("../views/ComponentsLibrary/Others/Carousel.vue"), // 组件-->其他-->走马灯
      },
      {
        path: "Calendar",
        name: "Calendar",
        component: () => import("../views/ComponentsLibrary/Others/Calendar.vue"), // 组件-->其他-->日历
      },
      {
        path: "Backtop",
        name: "Backtop",
        component: () => import("../views/ComponentsLibrary/Others/Backtop.vue"), // 组件-->其他-->回到顶部
      },
      {
        path: "Affix",
        name: "Affix",
        component: () => import("../views/ComponentsLibrary/Others/Affix.vue"), // 组件-->其他-->图钉
      },
      {
        path: "InfiniteScroll",
        name: "InfiniteScroll",
        component: () => import("../views/ComponentsLibrary/Others/InfiniteScroll.vue"), // 组件-->其他-->无限滚动
      },
      {
        path: "Drawer",
        name: "Drawer",
        component: () => import("../views/ComponentsLibrary/Others/Drawer.vue"), // 组件-->其他-->抽屉
      },
    ],
  },
  { path: "*", component: () => import(/* webpackChunkName: "error" */ "../views/Error/Error404.vue") },
];
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  tinkerbellUI.tbLoadingBar.start();
  next();
});
router.afterEach(() => {
  tinkerbellUI.tbLoadingBar.end();
});

export default router;
