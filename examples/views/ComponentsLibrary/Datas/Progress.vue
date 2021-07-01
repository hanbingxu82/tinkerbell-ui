<!--
 * @Author: your name
 * @Date: 2021-06-30 13:36:57
 * @LastEditTime: 2021-07-01 09:12:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Datas/Progress.vue
-->

<template>
  <div>
    <h2
      id="progress-jin-du-tiao"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#progress-jin-du-tiao" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Progress 进度条
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      用于展示操作进度，告知用户当前状态和预期。
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
      可设置不同的 status 、 border 、color 、 bg-color 展示不同的颜色效果
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-progress :percent="10"></tb-progress>
        <tb-progress :percent="20" status="success"></tb-progress>
        <tb-progress :percent="30" status="warning" :border="false"></tb-progress>
        <tb-progress :percent="40" status="error"></tb-progress>
        <tb-progress :percent="50" color="#9254de"></tb-progress>
        <tb-progress :percent="60" :color="['#f5af19', '#f12711', '#9254de', '#40a9ff', '#5cdbd3']" :border="false"></tb-progress>
        <tb-progress :percent="70" :color="['#40a9ff', '#5cdbd3']" bg-color="#d9f7be"></tb-progress>
        <!-- <tb-progress :percent="percent" :color="getColor"></tb-progress> -->
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="bu-tong-lei-xing"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#bu-tong-lei-xing" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;不同类型
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可设置 lump 类型，同时支持宽度和颜色设置
    </p>
    <p>
      <br />
    </p>

    <Demo>
      设置closable属性可以定义一个标签是否可移除。
      <div slot="source">
        <tb-progress :percent="20"></tb-progress>
        <tb-progress :percent="40" status="success" type="lump"></tb-progress>
        <tb-progress :percent="60" status="warning" type="lump" active :border="false"></tb-progress>
        <tb-progress :percent="80" :color="['#40a9ff', '#5cdbd3']" type="lump" :cut-width="2" cut-color="#389e0d"></tb-progress>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="gao-du-she-zhi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#gao-du-she-zhi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;高度设置
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可设置不同的 line-height 展示不同的尺寸，默认为 6
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-progress :percent="10"></tb-progress>
        <tb-progress :percent="20" status="success" :line-height="8"></tb-progress>
        <tb-progress :percent="30" status="warning" :line-height="10"></tb-progress>
        <tb-progress :percent="40" status="error" :line-height="12"></tb-progress>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="wen-zi-she-zhi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#wen-zi-she-zhi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp; 文字设置
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可通过 show-text 设置是否显示文字，可 format 自定义文字显示
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-progress :percent="50"></tb-progress>
        <tb-progress :percent="60" status="success" :show-text="false"></tb-progress>
        <tb-progress :percent="80" status="warning" :format="format"></tb-progress>
        <tb-progress :percent="100" status="error" :format="format"></tb-progress>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="dong-xiao-she-zhi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#dong-xiao-she-zhi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;动效设置
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可通过 active 、 active-color 、 color-flow 来设置进度条动态效果
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-progress :percent="40" active></tb-progress>
        <tb-progress :percent="60" active active-color="#f12711"></tb-progress>
        <tb-progress :percent="80" active :color="['#f5af19', '#f12711', '#9254de', '#40a9ff', '#5cdbd3']"></tb-progress>
        <tb-progress :percent="100" :color="['#f5af19', '#f12711', '#9254de', '#40a9ff', '#5cdbd3']" :color-flow="true"></tb-progress>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html5">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowProgress"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowProgress" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Progress props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowProgress" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Progress",
  components: { RightSmallNav },
  data() {
    return {
      percent: 10,
      rowProgress: [
        {
          Parameters: "percent",
          Explain: "百分比（必填）",
          Types: "Number",
          Optional: "0-100",
          Default: "0",
        },

        {
          Parameters: "line-height",
          Explain: "进度条高度",
          Types: "Number",
          Optional: "-",
          Default: "6",
        },
        {
          Parameters: "type",
          Explain: "进度条类型",
          Types: "String",
          Optional: "line / lump",
          Default: "line",
        },
        {
          Parameters: "status",
          Explain: "进度条状态",
          Types: "String",
          Optional: "success / warning / error",
          Default: "-",
        },
        {
          Parameters: "color",
          Explain: "进度条颜色；当使用Array时，限制个数为 6；当使用 Function 时，参数为 percent",
          Types: "String / Array / Function",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "color-flow",
          Explain: "是否开启颜色流动",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "flow-second",
          Explain: "流动所需时间，即时间越小，速度越快",
          Types: "Number",
          Optional: "1 - 6",
          Default: "5",
        },
        {
          Parameters: "bg-color",
          Explain: "进度条背景颜色",
          Types: "String",
          Optional: "16进制颜色代码",
          Default: "#ebeef5",
        },

        {
          Parameters: "border",
          Explain: "是否是圆弧状态",
          Types: "Boolean",
          Optional: "-",
          Default: "true",
        },
        {
          Parameters: "border",
          Explain: "是否是圆弧状态",
          Types: "Boolean",
          Optional: "-",
          Default: "true",
        },
        {
          Parameters: "show-text",
          Explain: "是否显示进度条文字",
          Types: "Boolean",
          Optional: "-",
          Default: "true",
        },
        {
          Parameters: "format",
          Explain: "自定义文字显示，参数为 percent",
          Types: "Function",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "cut-width",
          Explain: "lump 宽度",
          Types: "Number",
          Optional: "-",
          Default: "1",
        },
        {
          Parameters: "cut-color",
          Explain: "lump 颜色",
          Types: "String",
          Optional: "16进制颜色代码",
          Default: "#ebeef5",
        },
        {
          Parameters: "active",
          Explain: "是否开启动效",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "active-color",
          Explain: "动效颜色",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
      ],

      html1: `    <template>
        <div>
            <tb-progress :percent="10"></tb-progress>
            <tb-progress :percent="20" status="success"></tb-progress>
            <tb-progress :percent="30" status="warning" :border="false"></tb-progress>
            <tb-progress :percent="40" status="error"></tb-progress>
            <tb-progress :percent="50" color="#9254de"></tb-progress>
            <tb-progress :percent="60" :color="['#f5af19', '#f12711', '#9254de', '#40a9ff', '#5cdbd3']" :border="false"></tb-progress>
            <tb-progress :percent="70" :color="['#40a9ff', '#5cdbd3']" bg-color="#d9f7be"></tb-progress>
        </div>
    </template>
              `,
      html2: `    <template>
        <div>
            <tb-progress :percent="20" ></tb-progress>
            <tb-progress :percent="40" status="success" type="lump" ></tb-progress>
            <tb-progress :percent="60" status="warning" type="lump" active :border="false" ></tb-progress>
            <tb-progress :percent="80" :color="['#40a9ff', '#5cdbd3']" type="lump" :cut-width="2" cut-color="#389e0d"></tb-progress>
        </div>
    </template>
              `,
      html3: `    <template>
        <div>
            <tb-progress :percent="10" ></tb-progress>
            <tb-progress :percent="20" status="success" :line-height="8"></tb-progress>
            <tb-progress :percent="30" status="warning" :line-height="10"></tb-progress>
            <tb-progress :percent="40" status="error" :line-height="12"></tb-progress>
        </div>
    </template>
              `,
      html4: `    <template>
        <div>
            <tb-progress :percent="50" ></tb-progress>
            <tb-progress :percent="60" status="success" :show-text="false" ></tb-progress>
            <tb-progress :percent="80" status="warning" :format="format"></tb-progress>
            <tb-progress :percent="100" status="error" :format="format"></tb-progress>
        </div>
    </template>

    <script>
        export default {
            methods: {
            format(percent) {
                if(percent == 100){
                return '^_^'
                }
                return 'QAQ'
            }
            },
        }
    <\/script>
              `,
      html5: `    <template>
        <div>
            <tb-progress :percent="40" active></tb-progress>
            <tb-progress :percent="60" active active-color="#f12711"></tb-progress>
            <tb-progress :percent="80" active :color="['#f5af19', '#f12711', '#9254de', '#40a9ff', '#5cdbd3']"></tb-progress>
            <tb-progress :percent="100" :color="['#f5af19', '#f12711', '#9254de', '#40a9ff', '#5cdbd3']" :color-flow="true"></tb-progress>
        </div>
    </template>
              `,

      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Progress 进度条", id: "progress-jin-du-tiao" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "不同类型", id: "bu-tong-lei-xing" },
        { title: "高度设置", id: "gao-du-she-zhi" },
        { title: "文字设置", id: "wen-zi-she-zhi" },
        { title: "动效设置", id: "dong-xiao-she-zhi" },
        { title: "Progress props", id: "rowProgress" },

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

    format(percent) {
      if (percent == 100) {
        return "^_^";
      }
      return "QAQ";
    },
  },
};
</script>
<style lang="less" scoped></style>
