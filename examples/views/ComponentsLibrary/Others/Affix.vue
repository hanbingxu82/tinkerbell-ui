<!--
 * @Author: your name
 * @Date: 2021-08-26 16:27:06
 * @LastEditTime: 2021-08-26 17:00:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Others/Affix.vue
-->

<template>
  <div>
    <h2
      id="Affix-tu-ding"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#Affix-tu-ding" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Affix 图钉
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      到达指定的位置之后固定其位置。
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
      原生滚动相对于window窗口固定，也可以自定义node-el进行配置
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-affix :offset-top="80" node-el="containers">
          <tb-tag type="primary">固定在顶部80的位置</tb-tag>
        </tb-affix>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="shi-jian-chu-fa"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#shi-jian-chu-fa" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;事件触发
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以设置事件触发后的行为。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-affix :offset-top="200" @change="change" node-el="containers">
          <tb-tag type="primary">固定状态触发事件</tb-tag>
        </tb-affix>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>

    <h3
      id="rowAffix"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowAffix" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Affix props
    </h3>
    <p>
      <br />
    </p>

    <tb-table-eazy :rows="rowAffix" :cols="col"></tb-table-eazy>
    <h3
      id="rowAffixEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowAffixEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Affix events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowAffixEvent" :cols="colEvent"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Affix",
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
        { title: "Affix 图钉", id: "Affix-tu-ding" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "事件触发", id: "shi-jian-chu-fa" },
      ],
      visible: false,
      rowAffix: [
        {
          Parameters: "offset-top",
          Explain: "距离窗口顶部达到指定偏移量后触发",
          Types: "Number",
          Optional: "-",
          Default: "0",
        },
        {
          Parameters: "z-index",
          Explain: "层级",
          Types: "Number",
          Optional: "-",
          Default: "0",
        },
        {
          Parameters: "node-el",
          Explain: "指定所在的id节点",
          Types: "String",
          Optional: "-",
          Default: "Window对象",
        },

      ],
      rowAffixEvent: [
        {
          Parameters: "change",
          Explain: "在固定状态发生改变时触发",
          Callback: "true/false",
        },
      ],

      html1: `    <template>
        <tb-affix :offset-top="80" node-el="containers">
            <tb-tag type="primary">固定在顶部80的位置</tb-tag>
        </tb-affix>
    </template>
              `,
      html2: `    <template>
        <tb-affix :offset-top="200" @change="change" node-el="containers">
            <tb-tag type="primary">固定状态触发事件</tb-tag>
        </tb-affix>
    </template>

    <script>
        export default {
            methods: {
                change (status) {
                    this.$message('Status: ' + status)
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
    change(status) {
      this.$message(`Status: ${status}`);
    },
  },
};
</script>
<style lang="less" scoped>
.tb-button-box {
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