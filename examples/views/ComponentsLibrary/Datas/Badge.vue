<!--
 * @Author: your name
 * @Date: 2021-06-30 13:38:50
 * @LastEditTime: 2021-07-01 10:41:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Datas/Badage.vue
-->

<template>
  <div>
    <h2
      id="badge-biao-ji"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#badge-biao-ji" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Badge 标记
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      出现在按钮、图标旁的数字或状态标记。
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
      展示新消息数量。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      定义value属性，它接受Number或者String。
      <div slot="source">
        <tb-badge :value="12" class="item">
          <tb-button size="small">评论</tb-button>
        </tb-badge>
        <tb-badge :value="3" class="item">
          <tb-button size="small">回复</tb-button>
        </tb-badge>
        <tb-badge :value="1" class="item" type="primary">
          <tb-button size="small">评论</tb-button>
        </tb-badge>
        <tb-badge :value="2" class="item" type="warning">
          <tb-button size="small">回复</tb-button>
        </tb-badge>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="max"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#max" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;最大值
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可自定义最大值。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      由max属性定义，它接受一个Number，需要注意的是，只有当value为Number时，它才会生效。
      <div slot="source">
        <tb-badge :value="200" :max="99" class="item">
          <tb-button size="small">评论</tb-button>
        </tb-badge>
        <tb-badge :value="100" :max="10" class="item">
          <tb-button size="small">回复</tb-button>
        </tb-badge>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="zi-ding-yi-nei-rong"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#zi-ding-yi-nei-rong" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;自定义内容
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      可以显示数字以外的文本内容。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      定义value为String类型是时可以用于显示自定义文本。
      <div slot="source">
        <tb-badge value="new" class="item">
          <tb-button size="small">评论</tb-button>
        </tb-badge>
        <tb-badge value="hot" class="item">
          <tb-button size="small">回复</tb-button>
        </tb-badge>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="xiao-hong-dian"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#xiao-hong-dian" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp; 小红点
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      以红点的形式标注需要关注的内容。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      除了数字外，设置is-dot属性，它接受一个Boolean。
      <div slot="source">
        <tb-badge is-dot class="item">数据查询</tb-badge>
        <tb-badge is-dot class="item">
          <tb-button class="share-button" icon="icon-home" type="primary"></tb-button>
        </tb-badge>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowBadge"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowBadge" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Badge props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowBadge" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Badge",
  components: { RightSmallNav },
  data() {
    return {
      percent: 10,
      rowBadge: [
        {
          Parameters: "value",
          Explain: "显示值",
          Types: "string, number",
          Optional: "-",
          Default: "-",
        },

        {
          Parameters: "max",
          Explain: "最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型",
          Types: "number",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "is-dot",
          Explain: "小圆点",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "hidden",
          Explain: "隐藏 badge",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "type",
          Explain: "类型",
          Types: "string",
          Optional: "primary / success / warning / danger / info",
          Default: "-",
        },
      ],

      html1: `    <template>
        <div>
            <tb-badge :value="12" class="item">
                <tb-button size="small">评论</tb-button>
            </tb-badge>
            <tb-badge :value="3" class="item">
                <tb-button size="small">回复</tb-button>
            </tb-badge>
            <tb-badge :value="1" class="item" type="primary">
                <tb-button size="small">评论</tb-button>
            </tb-badge>
            <tb-badge :value="2" class="item" type="warning">
                <tb-button size="small">回复</tb-button>
            </tb-badge>
        </div>
    </template>
    <style>
    .item {
    margin-top: 10px;
    margin-right: 40px;
    }
    </style>
              `,
      html2: `    <template>
        <div>
            <tb-badge :value="200" :max="99" class="item">
                <tb-button size="small">评论</tb-button>
            </tb-badge>
            <tb-badge :value="100" :max="10" class="item">
                <tb-button size="small">回复</tb-button>
            </tb-badge>
        </div>
    </template>
              `,
      html3: `    <template>
        <div>
            <tb-badge value="new" class="item">
                <tb-button size="small">评论</tb-button>
            </tb-badge>
            <tb-badge value="hot" class="item">
                <tb-button size="small">回复</tb-button>
            </tb-badge>
        </div>
    </template>
              `,
      html4: `    <template>
        <div>
            <tb-badge is-dot class="item">数据查询</tb-badge>
            <tb-badge is-dot class="item">
                <tb-button class="share-button" icon="icon-home" type="primary"></tb-button>
            </tb-badge>
        </div>
    </template>
              `,

      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Badge 标记", id: "badge-biao-ji" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "最大值", id: "max" },
        { title: "自定义内容", id: "zi-ding-yi-nei-rong" },
        { title: "小红点", id: "xiao-hong-dian" },
        { title: "Badge props", id: "rowBadge" },
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
<style lang="less" scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
