<!--
 * @Author: your name
 * @Date: 2021-06-24 15:47:25
 * @LastEditTime: 2021-06-25 11:58:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/DevelopmentGuide/DevelopmentGuide/QuickStart.vue
-->

<template>
  <div>
    <h2
      id="kuai-su-shang-shou"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#kuai-su-shang-shou" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;快速上手
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      本节将介绍如何在项目中使用 tinkerbell-ui。
    </p>
    <h3
      id="yin-ru-tinkerbell-ui"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#yin-ru-tinkerbell-ui" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;引入 tinkerbell-ui
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      你可以引入整个 tinkerbell-ui，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 tinkerbell-ui。
    </p>
    <h4
      id="wan-zheng-yin-ru"
      style='box-sizing: border-box; margin: 0px; padding: 0px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#wan-zheng-yin-ru" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;完整引入
    </h4>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      在 main.js 中写入以下内容：
    </p>
    <pre v-highlight>
        <code class="javascript" v-text="html1"></code>
    </pre>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      以上代码便完成了 tinkerbell-ui 的引入。需要注意的是，样式文件需要单独引入。
    </p>
    <h4
      id="an-xu-yin-ru"
      style='box-sizing: border-box; margin: 0px; padding: 0px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#an-xu-yin-ru" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;按需引入
    </h4>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      借助插件&nbsp;<a href="https://github.com/ant-design/babel-plugin-import" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">babel-plugin-import</a>我们可以只引入需要的组件，以达到减小项目体积的目的
    </p>
    <pre v-highlight>
        <code class="javascript" v-text="html2"></code>
    </pre>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      然后，将 .babelrc 或 babel.config.js修改为：
    </p>
    <pre v-highlight>
        <code class="javascript" v-text="html3"></code>
    </pre>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      如果你只希望引入部分组件，比如 Button 和 Icon，那么需要在 main.js 中写入以下内容
    </p>
    <pre v-highlight>
        <code class="javascript" v-text="html4"></code>
    </pre>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <span style="box-sizing: border-box; display: block; padding: 8px 16px; background-color: rgb(236, 248, 255); border-radius: 4px; border-left: 5px solid rgb(80, 191, 255); margin: 20px 0px;"
        >特别提醒:按需引用仍然需要导入样式，即在 main.js 或根组件 import &#39;tinkerbell-ui/lib/styles/index.css&#39;;</span
      >
    </p>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      完整组件列表
    </p>
    <pre v-highlight>
        <code class="javascript" v-text="html5"></code>
    </pre>
    <h3
      id="kai-shi-shi-yong"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#kai-shi-shi-yong" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;开始使用
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      至此，一个基于 Vue 和 tinkerbell-ui 的开发环境已经搭建完毕。各个组件的使用方法请参阅它们各自的文档。
    </p>
    <p>
      <br />
    </p>
    <!-- <pre v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
    </pre> -->
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "QuickStart",
  components: { RightSmallNav },
  data() {
    return {
      html1: `import Vue from 'vue'
import App from './App.vue'
import 'tinkerbell-ui/lib/tinkerbell-ui.css'
import TinkerbellUI from 'tinkerbell-ui'
Vue.use(TinkerbellUI)

new Vue({
  el: '#app',
  render: h => h(App)
})`,
      html2: `npm install babel-plugin-import --save-dev`,
      html3: `module.exports = {
  presets: [
    ['@vue/app', {
      useBuiltIns: 'entry'
    }]
  ],
  plugins: [
    ["import", {
     "libraryName": "tinkerbell-ui",
     "libraryDirectory": "src/components"
    }]
  ]
}`,
      html4: `import Vue from 'vue';
import { tbButton, tbMessage, tbIcon } from 'tinkerbell-ui'

Vue.component(tbButton.name,tbButton)
Vue.component(tbIcon.name,tbIcon)

Vue.prototype.$message = tbMessage.message // 注册全局message方法
/* 或写为
 * Vue.use(tbButton)
 * Vue.use(tbIcon)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});`,
      html5: `import {
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
  tbTableEazy 
  } from 'tinkerbell-ui'`,
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "快速上手", id: "kuai-su-shang-shou" },
        { title: "引入 tinkerbell-ui", id: "yin-ru-tinkerbell-ui" },
      ],
    };
  },
  /**
   * @description: 引入minxns   src/utils/mixins.ts
   * @param {rightTitle}  rightTitle:右侧right浮起框数据
   * @return {*}
   */
  mixins: [useScroll],
  methods: {
    /**
     * @description: 点击右侧区域跳转至对应的html区域
     * @param {id:string} id:id节点地址
     * @return {*}
     */
    goMeowPoint(id) {
      const containern = window.document.querySelector("#" + id);
      containern.scrollIntoView(true);
    },
  },
};
</script>
<style lang="less" scoped></style>
