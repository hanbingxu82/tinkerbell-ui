<!--
 * @Author: your name
 * @Date: 2021-06-30 13:39:51
 * @LastEditTime: 2021-07-01 12:19:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Datas/Showmore.vue
-->

<template>
  <div>
    <h2
      id="Showmore-fen-ye"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#Showmore-fen-ye" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Showmore 文本省略
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      当文本过长时，使用文本省略。
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
      文本省略的基本用法
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <div>
          展开
        </div>
        <div>
          <tb-showmore :len="10" text="文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠"> </tb-showmore>
        </div>
        <div style="margin-top:10px">
          展开 / 收起
        </div>
        <div>
          <tb-showmore allowFold :len="10" show-text="show" hidden-text="hidden" text="文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠"> </tb-showmore>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowShowmore"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowShowmore" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Showmore props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowShowmore" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Showmore",
  components: { RightSmallNav },
  data() {
    return {
      rowShowmore: [
        {
          Parameters: "len",
          Explain: "显示文本的长度  默认不折叠",
          Types: "Number",
          Optional: "-",
          Default: "-1",
        },

        {
          Parameters: "text",
          Explain: "文本",
          Types: "String",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "show-text",
          Explain: "折叠时需要显示文案",
          Types: "Number",
          Optional: "-",
          Default: "显示更多",
        },
        {
          Parameters: "allow-fold",
          Explain: "是否需要展示hiddenText  收起效果",
          Types: "Boolean",
          Optional: "-",
          Default: "false",
        },
      ],
      html1: `    <template>
        <div>
            <div>
            展开
            </div>
            <div>
            <tb-showmore :len="10" text="文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠"> </tb-showmore>
            </div>
            <div style="margin-top:10px">
                展开 / 收起
            </div>
            <div>
            <tb-showmore allowFold :len="10" show-text="show" hidden-text="hidden" text="文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠"> </tb-showmore>
            </div>
        </div>
    </template>
              `,
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Showmore 文本省略", id: "Showmore-fen-ye" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "Showmore props", id: "rowShowmore" },
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

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style lang="less" scoped></style>
