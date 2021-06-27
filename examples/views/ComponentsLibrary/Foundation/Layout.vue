<!--
 * @Author: your name
 * @Date: 2021-06-25 14:37:01
 * @LastEditTime: 2021-06-27 10:56:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Foundation/Layout.vue
-->

<template>
  <div>
    <h2
      id="layout-bu-jv"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#layout-bu-jv" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Layout 布局
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      我们采用了24栅格系统，将区域进行24等分，和大部分组件库类似，我们也引入两个组件，row和col，row表示行，col在row之内使用
    </p>
    <h3
      id="ji-chu-yong-fa"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#ji-chu-yong-fa" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;基础用法
    </h3>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-row>
          <tb-col :span="24"><div class="grid-content bg-purple-dark"></div></tb-col>
        </tb-row>
        <tb-row>
          <tb-col :span="12"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :span="12"><div class="grid-content bg-purple-light"></div></tb-col>
        </tb-row>
        <tb-row>
          <tb-col :span="8"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :span="8"><div class="grid-content bg-purple-light"></div></tb-col>
          <tb-col :span="8"><div class="grid-content bg-purple"></div></tb-col>
        </tb-row>
        <tb-row>
          <tb-col :span="6"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :span="6"><div class="grid-content bg-purple-light"></div></tb-col>
          <tb-col :span="6"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :span="6"><div class="grid-content bg-purple-light"></div></tb-col>
        </tb-row>
        <tb-row>
          <tb-col :span="4"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :span="4"><div class="grid-content bg-purple-light"></div></tb-col>
          <tb-col :span="4"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :span="4"><div class="grid-content bg-purple-light"></div></tb-col>
          <tb-col :span="4"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :span="4"><div class="grid-content bg-purple-light"></div></tb-col>
        </tb-row>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>

    <h3
      id="jian-ge"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#jian-ge" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;间隔
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以设置gutter间隔
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-row :gutter="20">
          <tb-col :span="6"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :span="6"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :span="6"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :span="6"><div class="grid-content bg-purple"></div></tb-col>
        </tb-row>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="jian-ge"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#hun-he-bu-jv" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;混合布局
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-row :gutter="20">
          <tb-col :span="16"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :span="8"><div class="grid-content bg-purple"></div></tb-col>
        </tb-row>
        <tb-row :gutter="20">
          <tb-col :span="8"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :span="8"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :span="4"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :span="4"><div class="grid-content bg-purple"></div></tb-col>
        </tb-row>
        <tb-row :gutter="20">
          <tb-col :span="4"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :span="16"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :span="4"><div class="grid-content bg-purple"></div></tb-col>
        </tb-row>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="fen-lan-pian-yi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#hun-he-bu-jv" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;分栏偏移
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      支持偏移指定的栏数。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。
      <div slot="source">
        <tb-row :gutter="20">
          <tb-col :span="6"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></tb-col>
        </tb-row>
        <tb-row :gutter="20">
          <tb-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></tb-col>
        </tb-row>
        <tb-row :gutter="20">
          <tb-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></tb-col>
        </tb-row>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="xiang-ying-shi-bu-jv"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#hun-he-bu-jv" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;响应式布局
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-row :gutter="10">
          <tb-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></tb-col>
          <tb-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></tb-col>
          <tb-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></tb-col>
        </tb-row>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html5">
        </code>
      </pre>
    </Demo>

    <h3
      id="Row-props"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#hun-he-bu-jv" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Row props
    </h3>

    <p>
      <br />
    </p>
    <tb-table-eazy :rows="row" :cols="col"></tb-table-eazy>
    <h3
      id="Col-props"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#hun-he-bu-jv" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Col props
    </h3>

    <p>
      <br />
    </p>
    <tb-table-eazy :rows="row1" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Layout",
  components: { RightSmallNav },
  data() {
    return {
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Layout 布局", id: "layout-bu-jv" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "间隔", id: "jian-ge" },
        { title: "分栏偏移", id: "fen-lan-pian-yi" },
        { title: "响应式布局", id: "xiang-ying-shi-bu-jv" },
        { title: "Row props", id: "Row-props" },
        { title: "Col props", id: "Col-props" },
      ],
      row: [
        {
          Parameters: "gutter",
          Explain: "栅格间隔",
          Types: "number",
          Optional: "-",
          Default: "0",
        },
        {
          Parameters: "justify",
          Explain: "flex 布局下的水平排列方式",
          Types: "string",
          Optional: "start/end/center/space-around/space-between",
          Default: "start",
        },
        {
          Parameters: "align",
          Explain: "flex 布局下的垂直排列方式",
          Types: "string",
          Optional: "top/middle/bottom",
          Default: "top",
        },
      ],
      row1: [
        {
          Parameters: "span",
          Explain: "栅格占据的列数",
          Types: "number",
          Optional: "-",
          Default: "24",
        },
        {
          Parameters: "offset",
          Explain: "栅格左侧的间隔格数",
          Types: "number",
          Optional: "-",
          Default: "0",
        },
        {
          Parameters: "push",
          Explain: "栅格向右移动格数",
          Types: "number",
          Optional: "-",
          Default: "0",
        },
        {
          Parameters: "xs",
          Explain: "<768px 响应式栅格数或者栅格属性对象",
          Types: "number/object (例如： {span: 4, offset: 4})",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "sm",
          Explain: "≥768px 响应式栅格数或者栅格属性对象",
          Types: "number/object (例如： {span: 4, offset: 4})",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "md",
          Explain: "≥992px 响应式栅格数或者栅格属性对象",
          Types: "number/object (例如： {span: 4, offset: 4})",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "lg",
          Explain: "≥1200px 响应式栅格数或者栅格属性对象",
          Types: "number/object (例如： {span: 4, offset: 4})",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "xl",
          Explain: "≥1920px 响应式栅格数或者栅格属性对象",
          Types: "number/object (例如： {span: 4, offset: 4})",
          Optional: "-",
          Default: "-",
        },
      ],
      col: [
        {
          label: "参数", // 表格头名称
          align: "center", // 文本对齐方式 'center' | 'right' | 'left'
          field: "Parameters", // 字段对应数组规则
        },
        {
          label: "说明", // 表格头名称
          align: "center", // 文本对齐方式 'center' | 'right' | 'left'
          field: "Explain", // 字段对应数组规则
        },
        {
          label: "类型", // 表格头名称
          align: "center", // 文本对齐方式 'center' | 'right' | 'left'
          field: "Types", // 字段对应数组规则
        },
        {
          label: "可选值", // 表格头名称
          align: "center", // 文本对齐方式 'center' | 'right' | 'left'
          field: "Optional", // 字段对应数组规则
        },
        {
          label: "默认值", // 表格头名称
          align: "center", // 文本对齐方式 'center' | 'right' | 'left'
          field: "Default", // 字段对应数组规则
        },
      ],
      html1: `    <tb-row>
      <tb-col :span="24"><div class="grid-content bg-purple-dark"></div></tb-col>
    </tb-row>
    <tb-row>
        <tb-col :span="12"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :span="12"><div class="grid-content bg-purple-light"></div></tb-col>
    </tb-row>
    <tb-row>
        <tb-col :span="8"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :span="8"><div class="grid-content bg-purple-light"></div></tb-col>
        <tb-col :span="8"><div class="grid-content bg-purple"></div></tb-col>
    </tb-row>
    <tb-row>
        <tb-col :span="6"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :span="6"><div class="grid-content bg-purple-light"></div></tb-col>
        <tb-col :span="6"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :span="6"><div class="grid-content bg-purple-light"></div></tb-col>
    </tb-row>
    <tb-row>
        <tb-col :span="4"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :span="4"><div class="grid-content bg-purple-light"></div></tb-col>
        <tb-col :span="4"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :span="4"><div class="grid-content bg-purple-light"></div></tb-col>
        <tb-col :span="4"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :span="4"><div class="grid-content bg-purple-light"></div></tb-col>
    </tb-row>

    <style>
    .tb-row {
        margin-bottom: 20px;
        &:last-child {
        margin-bottom: 0;
        }
    }
    .tb-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    </style>
                `,
      html2: `    <tb-row :gutter="20">
        <tb-col :span="6"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :span="6"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :span="6"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :span="6"><div class="grid-content bg-purple"></div></tb-col>
    </tb-row>

    <style>
    .tb-row {
        margin-bottom: 20px;
        &:last-child {
        margin-bottom: 0;
        }
    }
    .tb-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    </style>
    `,
      html3: `    <tb-row :gutter="20">
        <tb-col :span="16"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :span="8"><div class="grid-content bg-purple"></div></tb-col>
    </tb-row>
    <tb-row :gutter="20">
        <tb-col :span="8"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :span="8"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :span="4"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :span="4"><div class="grid-content bg-purple"></div></tb-col>
    </tb-row>
    <tb-row :gutter="20">
        <tb-col :span="4"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :span="16"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :span="4"><div class="grid-content bg-purple"></div></tb-col>
    </tb-row>

    <style>
    .tb-row {
        margin-bottom: 20px;
        &:last-child {
        margin-bottom: 0;
        }
    }
    .tb-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    </style>
            `,
      html4: `    <tb-row :gutter="20">
        <tb-col :span="6"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></tb-col>
    </tb-row>
    <tb-row :gutter="20">
        <tb-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></tb-col>
    </tb-row>
    <tb-row :gutter="20">
       <tb-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></tb-col>
    </tb-row>

    <style>
    .tb-row {
        margin-bottom: 20px;
        &:last-child {
        margin-bottom: 0;
        }
    }
    .tb-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    </style>
        `,
      html5: `    <tb-row :gutter="10">
        <tb-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></tb-col>
        <tb-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></tb-col>
        <tb-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></tb-col>
    </tb-row>

    <style>
    .tb-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    </style>
        `,
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
<style lang="less" scoped>
.tb-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.tb-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
