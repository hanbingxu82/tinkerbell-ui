/*
 * @Author: your name
 * @Date: 2021-03-16 13:46:44
 * @LastEditTime: 2021-06-27 15:55:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Page from "../views/Page.vue";
import Components from "../views/Components.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Page",
    component: Page,
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
    ],
  },
];
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};

const router = new VueRouter({
  routes,
});

export default router;
