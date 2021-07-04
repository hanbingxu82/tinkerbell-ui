<!--
 * @Author: your name
 * @Date: 2021-07-02 17:26:40
 * @LastEditTime: 2021-07-04 10:34:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Others/Popconfirm.vue
-->

<template>
  <div>
    <h2
      id="popconfirm-que-ren"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#popconfirm-que-ren" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Popconfirm 气泡确认框
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      点击元素，弹出气泡确认框。
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
      Popconfirm 的属性与 Popconfirm 很类似，因此对于重复属性，请参考 Popconfirm 的文档，在此文档中不做详尽解释。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      在 Popconfirm 中，只有 title 属性可用，content 属性不会被展示。
      <div slot="source">
        <tb-popconfirm title="这是一段内容确定删除吗？">
          <tb-button slot="reference">删除</tb-button>
        </tb-popconfirm>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="zi-ding-yi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#zi-ding-yi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;自定义
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以在 Popconfirm 中自定义内容。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-popconfirm confirm-button-text="好的" cancel-button-text="不用了" icon="icon-home" icon-color="red" title="这是一段内容确定删除吗？">
          <tb-button slot="reference">删除</tb-button>
        </tb-popconfirm>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>

    <h3
      id="rowPopconfirm"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowPopconfirm" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Popconfirm props
    </h3>
    <p>
      <br />
    </p>

    <tb-table-eazy :rows="rowPopconfirm" :cols="col"></tb-table-eazy>
    <h3
      id="rowPopconfirmEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowPopconfirmEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Popconfirm events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowPopconfirmEvent" :cols="colEvent"></tb-table-eazy>
    <h3
      id="rowPopconfirmSlot"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowPopconfirmSlot" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Popconfirm slots
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowPopconfirmSlot" :cols="colSlot"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Popconfirm",
  components: { RightSmallNav },
  data() {
    return {
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Popconfirm 气泡确认框", id: "popconfirm-que-ren" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "自定义", id: "zi-ding-yi" },
        { title: "Popconfirm props", id: "rowPopconfirm" },
        { title: "Popconfirm events", id: "rowPopconfirmEvent" },
        { title: "Popconfirm slots", id: "rowPopconfirmSlot" },
      ],
      visible: false,
      rowPopconfirm: [
        {
          Parameters: "title",
          Explain: "标题",
          Types: "String",
          Optional: "-",
          Default: "-",
        },

        {
          Parameters: "confirm-button-text",
          Explain: "确认按钮文字",
          Types: "String",
          Optional: "-",
          Default: "—",
        },
        {
          Parameters: "cancel-button-text",
          Explain: "取消按钮文字",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "confirm-button-type",
          Explain: "确认按钮类型",
          Types: "String",
          Optional: "-",
          Default: "Primary",
        },
        {
          Parameters: "cancel-button-type",
          Explain: "取消按钮类型",
          Types: "String",
          Optional: "-",
          Default: "Text",
        },
        {
          Parameters: "icon",
          Explain: "Icon图标",
          Types: "String",
          Optional: "-",
          Default: "icon-prompt-filling",
        },
        {
          Parameters: "icon-color",
          Explain: "Icon图标颜色",
          Types: "String",
          Optional: "-",
          Default: "#f90",
        },
        {
          Parameters: "hide-icon",
          Explain: "是否隐藏 Icon",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
      ],
      rowPopconfirmEvent: [
        {
          Parameters: "confirm",
          Explain: "点击确认按钮时触发",
          Callback: "-",
        },
        {
          Parameters: "cancel",
          Explain: "点击取消按钮时触发",
          Callback: "-",
        },
      ],
      rowPopconfirmSlot: [
        {
          Parameters: "reference",
          Explain: "触发 Popconfirm 显示的 HTML 元素",
        },
      ],
      html1: `    <template>
        <tb-popconfirm
        title="这是一段内容确定删除吗？"
        >
        <tb-button slot="reference">删除</tb-button>
        </tb-popconfirm>
    </template>
              `,
      html2: `    <template>
        <tb-popconfirm
        confirm-button-text='好的'
        cancel-button-text='不用了'
        icon="icon-home"
        icon-color="red"
        title="这是一段内容确定删除吗？"
        >
        <tb-button slot="reference">删除</tb-button>
        </tb-popconfirm>
    </template>
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
    ok() {
      this.$message("点击了确定");
    },
    cancel() {
      this.$message("点击了取消");
    },
    close() {
      this.visible = false;
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
