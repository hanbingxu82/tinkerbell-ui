<!--
 * @Author: your name
 * @Date: 2021-07-01 22:09:24
 * @LastEditTime: 2021-07-02 12:15:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Navigations/PageHeader.vue
-->

<template>
  <div>
    <h2
      id="PageHeader-ye-tou"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#PageHeader-ye-tou" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;PageHeader 页头
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。
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
      页头组件基础用法。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-page-header @back="goBack" content="详情页面"> </tb-page-header>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>

    <h3
      id="rowPageHeader"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowPageHeader" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;PageHeader props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowPageHeader" :cols="col"></tb-table-eazy>
    <h3
      id="rowPageHeaderEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowPageHeaderEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;PageHeader events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowPageHeaderEvent" :cols="col"></tb-table-eazy>
    <h3
      id="rowPageHeaderSlot"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowPageHeaderSlot" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;PageHeader slots
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowPageHeaderSlot" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "PageHeader",
  components: { RightSmallNav },
  data() {
    return {
      rowPageHeader: [
        {
          Parameters: "title",
          Explain: "标题",
          Types: "string",
          Optional: "-",
          Default: "返回",
        },

        {
          Parameters: "content",
          Explain: "内容",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
      ],
      rowPageHeaderEvent: [
        {
          Parameters: "back",
          Explain: "点击左侧区域触发",
          Callback: "-",
        },
      ],
      rowPageHeaderSlot: [
        {
          Parameters: "title",
          Explain: "标题内容",
        },
        {
          Parameters: "content",
          Explain: "内容",
        },
      ],
      html1: `    <tb-page-header @back="goBack" content="详情页面"></tb-page-header>

    <script>
        export default {
            methods: {
                goBack() {
                    console.log('go back');
                }
            }
        }
    <\/script>
              `,
      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "PageHeader 面包屑", id: "PageHeader-ye-tou" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "PageHeader props", id: "rowPageHeader" },
        { title: "PageHeader events", id: "rowPageHeaderEvent" },
        { title: "PageHeader slots", id: "rowPageHeaderSlot" },
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
    goBack() {
      console.log("go back");
    },
  },
};
</script>
<style lang="less" scoped>
.tb-alert {
  margin: 10px 0;
}
</style>
