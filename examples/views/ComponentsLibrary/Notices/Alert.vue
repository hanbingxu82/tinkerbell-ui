<!--
 * @Author: your name
 * @Date: 2021-07-01 13:37:49
 * @LastEditTime: 2021-07-01 14:22:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Notices.vue/Alert.vue
-->

<template>
  <div>
    <h2
      id="alert-jing-gao"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#alert-jing-gao" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Alert 警告
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      用于页面中展示重要的提示信息。
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
      页面中的非浮层元素，不会自动消失。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-alert type="primary">通用提示的文案</tb-alert>
        <tb-alert type="success">成功提示的文案</tb-alert>
        <tb-alert type="info">消息提示的文案</tb-alert>
        <tb-alert type="warning" title="警告提示的文案"></tb-alert>
        <tb-alert type="danger" title="错误提示的文案"></tb-alert>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="dai-you-icon"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#dai-you-icon" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;带有 icon
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      表示某种状态时提升可读性。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-alert type="primary" show-icon>通用提示的文案</tb-alert>
        <tb-alert type="success" show-icon>成功提示的文案</tb-alert>
        <tb-alert type="info" show-icon>消息提示的文案</tb-alert>
        <tb-alert type="warning" show-icon>警告提示的文案</tb-alert>
        <tb-alert type="danger" show-icon>错误提示的文案</tb-alert>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="wen-zi-jv-zhong"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#wen-zi-jv-zhong" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;文字居中
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      使用 center 属性让文字水平居中。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-alert type="primary" center show-icon>通用提示的文案</tb-alert>
        <tb-alert type="success" center show-icon>成功提示的文案</tb-alert>
        <tb-alert type="info" center show-icon>消息提示的文案</tb-alert>
        <tb-alert type="warning" center show-icon>警告提示的文案</tb-alert>
        <tb-alert type="danger" center show-icon>错误提示的文案</tb-alert>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>
    <h3
      id="zi-ding-yi-guan-bi"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#zi-ding-yi-guan-bi" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;自定义关闭按钮
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      自定义关闭按钮为文字或其他符号。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-alert type="success" :closable="false">不可关闭的 alert</tb-alert>
        <tb-alert type="info" close-text="知道了">自定义关闭的 alert</tb-alert>
        <tb-alert type="warning" @close="hello">设置了回调的 alert</tb-alert>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html4">
        </code>
      </pre>
    </Demo>
    <h3
      id="fu-zhu-jie-shao"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#fu-zhu-jie-shao" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;带有辅助性文字介绍
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      包含标题和内容，解释更详细的警告。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-alert type="success" description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰……">带辅助性文字介绍</tb-alert>
        <tb-alert type="info" show-icon description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰……">带有 icon 和辅助性文字介绍</tb-alert>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html5">
        </code>
      </pre>
    </Demo>
    <h3
      id="rowAlert"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowAlert" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Alert props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowAlert" :cols="col"></tb-table-eazy>
    <h3
      id="rowAlertEvent"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowAlertEvent" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;Alert events
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowAlertEvent" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "Alert",
  components: { RightSmallNav },
  data() {
    return {
      rowAlert: [
        {
          Parameters: "title",
          Explain: "标题，必选参数。也可通过默认 slot 传入",
          Types: "string",
          Optional: "-",
          Default: "-",
        },

        {
          Parameters: "type",
          Explain: "主题",
          Types: "string",
          Optional: "primary/success/warning/info/danger",
          Default: "success",
        },
        {
          Parameters: "description",
          Explain: "辅助性文字",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "closable",
          Explain: "是否可关闭",
          Types: "boolean",
          Optional: "-",
          Default: "true",
        },
        {
          Parameters: "center",
          Explain: "文字是否居中",
          Types: "boolean",
          Optional: "-",
          Default: "true",
        },
        {
          Parameters: "close-text",
          Explain: "关闭按钮自定义文本",
          Types: "string",
          Optional: "-",
          Default: "-",
        },
        {
          Parameters: "show-icon",
          Explain: "是否显示图标",
          Types: "boolean",
          Optional: "-",
          Default: "false",
        },
      ],
      rowAlertEvent: [
        {
          Parameters: "close",
          Explain: "关闭alert时触发的事件",
          Callback: "-",
        },
      ],
      html1: `    <div>
        <tb-alert type="primary">通用提示的文案</tb-alert>
        <tb-alert type="success">成功提示的文案</tb-alert>
        <tb-alert type="info">消息提示的文案</tb-alert>
        <tb-alert type="warning" title="警告提示的文案"></tb-alert>
        <tb-alert type="danger" title="错误提示的文案"></tb-alert>
    </div>
              `,
      html2: `    <div>
        <tb-alert type="primary" show-icon>通用提示的文案</tb-alert>
        <tb-alert type="success" show-icon>成功提示的文案</tb-alert>
        <tb-alert type="info" show-icon>消息提示的文案</tb-alert>
        <tb-alert type="warning" show-icon>警告提示的文案</tb-alert>
        <tb-alert type="danger" show-icon>错误提示的文案</tb-alert>
    </div>
              `,
      html3: `    <div>
        <tb-alert type="success" center show-icon>成功提示的文案</tb-alert>
        <tb-alert type="info" center show-icon>消息提示的文案</tb-alert>
        <tb-alert type="warning" center show-icon>警告提示的文案</tb-alert>
        <tb-alert type="danger" center show-icon>错误提示的文案</tb-alert>
    </div>
              `,
      html4: `    <div>
          <tb-alert type="success" :closable="false">不可关闭的 alert</tb-alert>
          <tb-alert type="info" close-text="知道了">自定义关闭的 alert</tb-alert>
          <tb-alert type="warning" @close="hello">设置了回调的 alert</tb-alert>
    </div>
              `,
      html5: `    <div>
          <tb-alert type="success" description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰……">带辅助性文字介绍</tb-alert>
          <tb-alert type="info" show-icon description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰……">带有 icon 和辅助性文字介绍</tb-alert>
    </div>
              `,

      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "Alert 警告", id: "alert-jing-gao" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "带有 icon", id: "dai-you-icon" },
        { title: "文字居中", id: "wen-zi-jv-zhong" },
        { title: "自定义关闭按钮", id: "zi-ding-yi-guan-bi" },
        { title: "辅助性文字", id: "fu-zhu-jie-shao" },
        { title: "Alert props", id: "rowAlert" },
        { title: "Alert events", id: "rowAlertEvent" },
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
.tb-alert {
  margin: 10px 0;
}
</style>
