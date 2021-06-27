<!--
 * @Author: your name
 * @Date: 2021-06-27 15:45:46
 * @LastEditTime: 2021-06-27 15:45:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Forms/Radio.vue
-->

<template>
  <div>
    <h2
      id="link-an-niu"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#link-an-niu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Link 文字链接
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      文字超链接。
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
      基础的文字链接用法。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-link href="/" target="_blank">默认链接</tb-link>
        <tb-link type="primary">主要链接</tb-link>
        <tb-link type="success">成功链接</tb-link>
        <tb-link type="warning">警告链接</tb-link>
        <tb-link type="danger">危险链接</tb-link>
        <tb-link type="info">信息链接</tb-link>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="jin-yong-zhuang-tai"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#jin-yong-zhuang-tai" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;禁用状态
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      文字链接不可用状态。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div>
          <tb-link disabled>默认链接</tb-link>
          <tb-link type="primary" disabled>主要链接</tb-link>
          <tb-link type="success" disabled>成功链接</tb-link>
          <tb-link type="warning" disabled>警告链接</tb-link>
          <tb-link type="danger" disabled>危险链接</tb-link>
          <tb-link type="info" disabled>信息链接</tb-link>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="xia-hua-xian"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#xia-hua-xian" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;下划线
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      文字链接下划线。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div>
          <tb-link :underline="false">无下划线</tb-link>
          <tb-link>有下划线</tb-link>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="tu-biao"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#tu-biao" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;图标
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      带图标的文字链接可增强辨识度。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div>
          <tb-link icon="iconfont icon-edit">编辑</tb-link>
          <tb-link>查看<i class="iconfont icon-browse"></i> </tb-link>
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowLink"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowLink" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Link props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowLink" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Link",
  components: { RightSmallNav },
  data() {
    return {
      rowLink: [
        {
          Parameters: "type",
          Explain: "类型",
          Types: "string",
          Optional: "primary / success / warning / danger / info",
          Default: "default",
        },

        {
          Parameters: "underline",
          Explain: "是否下划线",
          Types: "boolean",
          Optional: "-",
          Default: "true",
        },
        {
          Parameters: "disabled",
          Explain: "是否禁用状态",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
        {
          Parameters: "href",
          Explain: "原生 href 属性",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "icon",
          Explain: "	图标类名",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
      ],
      html1: `    <div>
      <tb-link href="/" target="_blank">默认链接</tb-link>
      <tb-link type="primary">主要链接</tb-link>
      <tb-link type="success">成功链接</tb-link>
      <tb-link type="warning">警告链接</tb-link>
      <tb-link type="danger">危险链接</tb-link>
      <tb-link type="info">信息链接</tb-link>
    </div>
              `,
      html2: `    <div>
      <tb-link disabled>默认链接</tb-link>
      <tb-link type="primary" disabled>主要链接</tb-link>
      <tb-link type="success" disabled>成功链接</tb-link>
      <tb-link type="warning" disabled>警告链接</tb-link>
      <tb-link type="danger" disabled>危险链接</tb-link>
      <tb-link type="info" disabled>信息链接</tb-link>
    </div>
              `,
      html3: `    <div>
      <tb-link :underline="false">无下划线</tb-link>
      <tb-link>有下划线</tb-link>
    </div>
              `,
      html4: `    <div>
      <tb-link icon="iconfont icon-edit">编辑</tb-link>
      <tb-link>查看<i class="iconfont icon-browse"></i> </tb-link>
    </div>
              `,

      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Link 按钮", id: "link-an-niu" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "禁用状态", id: "jin-yong-zhuang-tai" },
        { title: "下划线", id: "xia-hua-xian" },
        { title: "图标", id: "tu-biao" },
        { title: "Link props", id: "rowLink" },
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
<style lang="less" scoped>
.tb-link {
  margin: 5px;
}
</style>
