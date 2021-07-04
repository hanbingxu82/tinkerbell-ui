<!--
 * @Author: your name
 * @Date: 2021-07-02 17:27:08
 * @LastEditTime: 2021-07-04 15:09:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Others/Backtop.vue
-->

<template>
  <div>
    <h2
      id="backtop-hui-dao-ding-bu"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#backtop-hui-dao-ding-bu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Backtop 回到顶部
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      返回页面顶部的操作按钮
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
      滑动页面即可看到右下方的按钮。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        Scroll down to see the bottom-right button.
        <tb-backtop target="#containers" :bottom="100" right="30"> </tb-backtop>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="zi-ding-yi-xian-shi-nei-rong"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#zi-ding-yi-xian-shi-nei-rong" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;自定义显示内容
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      显示区域被固定为右下方按钮的区域, 其中的文本内容可支持自定义。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        Scroll down to see the bottom-right button.
        <tb-backtop target="#containers" text="UP" :visible-y="100" :duration="300" @scrolledOnTop="yourFunction()"> </tb-backtop>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>

    <h3
      id="rowBacktop"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowBacktop" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Backtop props
    </h3>
    <p>
      <br />
    </p>

    <tb-table-eazy :rows="rowBacktop" :cols="col"></tb-table-eazy>
    <h3
      id="rowBacktopEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowBacktopEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Backtop events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowBacktopEvent" :cols="colEvent"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Backtop",
  components: { RightSmallNav },
  data() {
    return {
      // 日历options特定  样式
      calendarArr: {
        type: "combination", // 是否为特定的组合方式  header头默认设置样式
        // 如果不是特定的组合方式   那么下方的todayBtn、checkBtn样式就会起作用 两者最好不要一起使用
        headStyle: {
          todayBtn: "left",
          combination: "center",
          checkBtn: "left",
        },
        // 文本对齐位置
        viewStyle: {
          // 视图day天数  文本对齐位置
          day: "right",
        },
      },
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Backtop 回到顶部", id: "backtop-hui-dao-ding-bu" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "自定义显示内容", id: "zi-ding-yi-xian-shi-nei-rong" },
        { title: "Backtop props", id: "rowBacktop" },
        { title: "Backtop events", id: "rowBacktopEvent" },
      ],
      visible: false,
      rowBacktop: [
        {
          Parameters: "text",
          Explain: "文本slot内容  如果不传递默认展示圆形图标",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "target",
          Explain: "触发滚动的对象 如果没有默认就是body文档",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "visible-y",
          Explain: "滚动高度达到此参数值才出现",
          Types: "number",
          Optional: "-",
          Default: "200",
        },
        {
          Parameters: "right",
          Explain: "控制其显示位置, 距离页面右边距",
          Types: "number",
          Optional: "-",
          Default: "30",
        },
        {
          Parameters: "bottom",
          Explain: "控制其显示位置, 距离页面底部距离",
          Types: "number",
          Optional: "-",
          Default: "30",
        },
        {
          Parameters: "duration",
          Explain: "到顶部的动画时间毫秒",
          Types: "number",
          Optional: "-",
          Default: "600",
        },
      ],
      rowBacktopEvent: [
        {
          Parameters: "scrolledOnTop",
          Explain: "当页面滚动到顶部时触发功能",
          Callback: "-",
        },
      ],

      html1: `    <template>
        Scroll down to see the bottom-right button.
        <tb-backtop target="#containers" :bottom="100" right="30"> </tb-backtop> 
    </template>
              `,
      html2: `    <template>
        Scroll down to see the bottom-right button.
        <tb-backtop target="#containers" text="UP" :visibleY="100" :duration="300" @scrolledOnTop="yourFunction"> </tb-backtop>
    </template>
    <script>
        export default {
            methods: {
                yourFunction() {
                    console.log("到顶啦");
                }
            }
        }
    <\/script>
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
    yourFunction() {
      console.log("到顶啦");
      //   document.scrollingElement.scrollTop = 0;
    },
  },
};
</script>
<style lang="less" scoped>
.tb-button {
  margin-right: 20px;
}
.top,
.center,
.bottom {
  text-align: center;
  overflow: hidden;
}
.center-left {
  float: left;
}
.center-right {
  float: right;
}
[flex] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
