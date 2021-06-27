<!--
 * @Author: your name
 * @Date: 2021-06-24 15:47:06
 * @LastEditTime: 2021-06-25 09:38:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/DevelopmentGuide/DevelopmentGuide/Introduction.vue
-->
<template>
  <div>
<h2 id="jie-shao" style="box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; white-space: normal; background-color: rgb(255, 255, 255);">
    <a href="#jie-shao" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;介绍
</h2>
<p style="box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);">
    tinkerbell-ui 是一款基于 Vue.js 2.0 的前端 UI组件库，是个人在工作中为了更好的学习和使用vue相关技术栈而实现的。
</p>
<p style="box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);">
    本项目的源码和文档主要参考借鉴了&nbsp;<code style="box-sizing: border-box; margin: 0px; padding: 0px 4px; background-color: rgb(249, 250, 252); border: 1px solid rgb(234, 238, 251); border-radius: 4px; line-height: 2em;">element-ui</code>和&nbsp;<code style="box-sizing: border-box; margin: 0px; padding: 0px 4px; background-color: rgb(249, 250, 252); border: 1px solid rgb(234, 238, 251); border-radius: 4px; line-height: 2em;">iView</code>以及&nbsp;<code style="box-sizing: border-box; margin: 0px; padding: 0px 4px; background-color: rgb(249, 250, 252); border: 1px solid rgb(234, 238, 251); border-radius: 4px; line-height: 2em;">bin-ui</code>。分离了常用业务组件并封装，部分组件参考这三个开源库进行了简化实现。现已实现扩展了约 40 个组件可供日常开发。
</p>
<p style="box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);">
    添加了开源协议，编写本UI库的目的也是为了学习提升，熟悉vue相关技术栈及相关UI控件的实现和开发。
</p>
<p style="box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);">
    组件库的更新请参考[更新日志]
</p>
<h3 id="gai-shu" style="box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; white-space: normal; background-color: rgb(255, 255, 255);">
    <a href="#gai-shu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;概述
</h3>
<ul style="list-style-type: none;" class=" list-paddingleft-2">
    <li>
        <p>
            基于 Vue 开发的 UI 组件
        </p>
    </li>
    <li>
        <p>
            提供了一些常用的字体图标
        </p>
    </li>
    <li>
        <p>
            灵活可控的组件，良好的API文档
        </p>
    </li>
    <li>
        <p>
            集成了常用的css样式和transition动画
        </p>
    </li>
    <li>
        <p>
            封装了常用的指令和工具库
        </p>
    </li>
</ul>
<h3 id="zui-xin-ban-ben" style="box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; white-space: normal; background-color: rgb(255, 255, 255);">
    <a href="#zui-xin-ban-ben" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;最新版本
</h3>
<p style="box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);">
    <a href="https://www.npmjs.com/package/tinkerbell-ui" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">
   <img alt="npm" src="https://img.shields.io/npm/v/tinkerbell-ui" style="box-sizing: border-box; border: 0px;"/>
    </a>
</p>
<h3 id="xiang-guan-lian-jie" style="box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; white-space: normal; background-color: rgb(255, 255, 255);">
    <a href="#xiang-guan-lian-jie" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;相关链接
</h3>
<p style="box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);">
    <a href="https://element.eleme.cn/" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">element-ui</a>
</p>
<p style="box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);">
    <a href="https://www.iviewui.com/" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">iView</a>
</p>
<p style="box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);">
    <a href="https://wangbin3162.gitee.io/bin-ui/" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">bin-ui</a>
</p>
<p>
    <br/>
</p>
    <!-- <pre v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
    </pre> -->
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
const rawHtml = `<template>
  <el-row class="demo-avatar demo-basic">
    <el-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <el-avatar :size="size" :src="circleUrl"></el-avatar>
        </div>
      </div>
    </el-col>  
    <el-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
        </div>
      </div>
    </el-col> 
  </el-row>
</template>
<script>
  export default {
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"]
      }
    }
  }
<\/script>
                `;
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Introductiontotheframework",
  components: { RightSmallNav },
  data() {
    return {
      html1: rawHtml,
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "介绍", id: "jie-shao" },
        { title: "概述", id: "gai-shu" },
        { title: "最新版本", id: "zui-xin-ban-ben" },
        { title: "相关链接", id: "xiang-guan-lian-jie" },
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
