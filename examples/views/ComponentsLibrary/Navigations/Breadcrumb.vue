<!--
 * @Author: your name
 * @Date: 2021-07-01 22:09:12
 * @LastEditTime: 2021-07-02 11:53:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Navigations/Breadcrumb.vue
-->

<template>
  <div>
    <h2
      id="Breadcrumb-mian-bao-xie"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#Breadcrumb-mian-bao-xie" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Breadcrumb 面包屑
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      显示当前页面的路径，快速返回之前的任意页面。
    </p>
    <h3
      id="ji-chu-yong-fa"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#ji-chu-yong-fa" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;基础用法
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      适用广泛的基础用法。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      在tb-breadcrumb中使用tb-breadcrumb-item标签表示从首页开始的每一级。Tinkerbell 提供了一个separator属性，在tb-breadcrumb标签中设置它来决定分隔符，它只能是字符串，默认为斜杠/。
      <div slot="source">
        <div style="overflow: hidden;">
          <tb-breadcrumb separator="/">
            <tb-breadcrumb-item :to="{ path: '/' }">首页</tb-breadcrumb-item>
            <tb-breadcrumb-item><a href="/">活动管理</a></tb-breadcrumb-item>
            <tb-breadcrumb-item>活动列表</tb-breadcrumb-item>
            <tb-breadcrumb-item>活动详情</tb-breadcrumb-item>
          </tb-breadcrumb>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="tu-biao-fen-ge-fu"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#tu-biao-fen-ge-fu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;图标分隔符
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      使用图标进行分割
    </p>
    <p>
      <br />
    </p>

    <Demo>
      通过设置 separator-class 可使用相应的 iconfont 作为分隔符，注意这将使 separator 设置失效
      <div slot="source">
        <div style="overflow: hidden;">
          <tb-breadcrumb separator-class="icon-arrow-right-bold">
            <tb-breadcrumb-item :to="{ path: '/' }">首页</tb-breadcrumb-item>
            <tb-breadcrumb-item>活动管理</tb-breadcrumb-item>
            <tb-breadcrumb-item>活动列表</tb-breadcrumb-item>
            <tb-breadcrumb-item>活动详情</tb-breadcrumb-item>
          </tb-breadcrumb>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowBreadcrumb"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowBreadcrumb" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Breadcrumb props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowBreadcrumb" :cols="col"></tb-table-eazy>
    <h3
      id="rowBreadcrumbItem"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowBreadcrumbItem" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;BreadcrumbItem props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowBreadcrumbItem" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Breadcrumb",
  components: { RightSmallNav },
  data() {
    return {
      rowBreadcrumb: [
        {
          Parameters: "separator",
          Explain: "分隔符",
          Types: "string",
          Optional: "-",
          Default: "/",
        },

        {
          Parameters: "separator-class",
          Explain: "图标分隔符 class",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
      ],
      rowBreadcrumbItem: [
        {
          Parameters: "to",
          Explain: "路由跳转对象，同 vue-router 的 to",
          Types: "string/object",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "replace",
          Explain: "在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
      ],
      html1: `    <tb-breadcrumb separator="/">
        <tb-breadcrumb-item :to="{ path: '/' }">首页</tb-breadcrumb-item>
        <tb-breadcrumb-item><a href="/">活动管理</a></tb-breadcrumb-item>
        <tb-breadcrumb-item>活动列表</tb-breadcrumb-item>
        <tb-breadcrumb-item>活动详情</tb-breadcrumb-item>
    </tb-breadcrumb>
              `,
      html2: `    <tb-breadcrumb separator-class="icon-arrow-right-bold">
        <tb-breadcrumb-item :to="{ path: '/' }">首页</tb-breadcrumb-item>
        <tb-breadcrumb-item>活动管理</tb-breadcrumb-item>
        <tb-breadcrumb-item>活动列表</tb-breadcrumb-item>
        <tb-breadcrumb-item>活动详情</tb-breadcrumb-item>
    </tb-breadcrumb>
              `,

      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Breadcrumb 面包屑", id: "Breadcrumb-mian-bao-xie" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "图标分隔符", id: "tu-biao-fen-ge-fu" },
        { title: "Breadcrumb props", id: "rowBreadcrumb" },
        { title: "BreadcrumbItem props", id: "rowBreadcrumbItem" },
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
    hello() {
      this.$message("hello");
    },
  },
};
</script>
<style lang="less" scoped>
.tb-alert {
  margin: 10px 0;
}
</style>
