<!--
 * @Author: your name
 * @Date: 2021-06-24 15:47:18
 * @LastEditTime: 2021-06-25 11:04:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/DevelopmentGuide/DevelopmentGuide/Installs.vue
-->

<template>
  <div>
    <h2
      id="an-zhuang"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#an-zhuang" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;安装
    </h2>
    <h3
      id="cdn-an-zhuang"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#cdn-an-zhuang" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;CDN 安装
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      通过<a href="https://unpkg.com/tinkerbell-ui/" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">unpkg.com/tinkerbell-ui</a>&nbsp;可以看到 tinkerbell-ui 最新版本的资源，也可以切换版本选择需要的资源，在页面上引入 js 和 css 文件即可开始使用：
    </p>
    <pre v-highlight>
        <code class="html" v-text="html1"></code>
    </pre>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <code style="box-sizing: border-box; margin: 0px; padding: 0px 4px; background-color: rgb(249, 250, 252); border: 1px solid rgb(234, 238, 251); border-radius: 4px; line-height: 2em;">@0.5.3</code>&nbsp;表示版本号，我们建议锁定版本号来保证代码的稳定性
    </p>
    <h3
      id="npm-an-zhuang"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#npm-an-zhuang" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;npm 安装
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      推荐使用npm安装，它能更好地和<a href="https://webpack.js.org/" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">webpack</a>打包工具配合使用。而且可以更好的和 es6配合使用。并且支持按需引入
    </p>
      <pre v-highlight>
        <code class="language-shell" v-text="html2"></code>
    </pre>
      <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      如果您了解node.js、npm安装，并希望配合webpack使用，请阅读下一节：<a href="#/Components/QuickStart" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">快速上手</a>。
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
  name: "Installs",
  components: { RightSmallNav },
  data() {
    return {
      html1: `<!-- import Vue.js -->
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>
<!-- import stylesheet -->
<link rel="stylesheet" href="https://unpkg.com/tinkerbell-ui@0.5.3/lib/tinkerbell-ui.css">
<!-- import tinkerbell-ui -->
<script src="https://unpkg.com/tinkerbell-ui@0.5.3/lib/tinkerbell-ui.umd.min.js"><\/script>`,
    html2:`npm i tinkerbell-ui -S
# or 
yarn add tinkerbell-ui`,
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "安装", id: "an-zhuang" },
        { title: "CDN 安装", id: "cdn-an-zhuang" },
        { title: "NPM 安装", id: "npm-an-zhuang" },
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
